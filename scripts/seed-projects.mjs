// scripts/seed-projects.mjs
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

// === 1) Configure Supabase ===
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('❌ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
    console.error('Ensure you have a .env file with these keys.');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
});

// === 2) Import your local data ===
// Using named imports as verified in your files
import { cases } from '../src/data/cases.js';
import { translations } from '../src/data/locales.js';

const casesData = cases;
const locales = translations;

// Helper to get locale text safely
function getLocaleText(slug, lang) {
    const langObj = locales?.[lang];
    if (!langObj) return null;

    // Try different potential keys if structure changes
    const caseObj =
        langObj?.cases?.[slug] ||
        langObj?.projects?.[slug] ||
        langObj?.Projects?.[slug] ||
        langObj?.casesPage?.[slug]; // Checking all possibilities

    // Based on your viewed file: locales.en.projects.[slug] seems correct
    if (!caseObj && langObj?.projects?.[slug]) {
        return langObj.projects[slug];
    }

    return caseObj || null;
}

function toArray(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value.map(String).map((s) => s.trim()).filter(Boolean);

    if (typeof value === 'string') {
        return value.split(',').map((s) => s.trim()).filter(Boolean);
    }

    return [];
}

function buildDetails(localeObj) {
    if (!localeObj) return {};

    const details = {
        overview: localeObj?.overview ?? null,
        problem: localeObj?.problem ?? null,
        solution: localeObj?.solution ?? null,
        process: localeObj?.process ?? null,
        results: localeObj?.results ?? null,
        stats: localeObj?.stats ?? null,
        features: localeObj?.features ?? null,
        role: localeObj?.role ?? null,
        notes: localeObj?.notes ?? null,

        // Any extra keys from your specific structure
        header: localeObj?.header ?? null,
        subheader: localeObj?.subheader ?? null,
        meta: localeObj?.meta ?? null,
        context: localeObj?.context ?? null,
        findings: localeObj?.findings ?? null,
        images: localeObj?.images ?? null
    };

    Object.keys(details).forEach((k) => details[k] == null && delete details[k]);
    return details;
}

function normalizeProject(caseItem) {
    const slug = caseItem.slug;
    if (!slug) {
        throw new Error(`Missing slug on item: ${JSON.stringify(caseItem).slice(0, 200)}`);
    }

    // Debugging log
    // console.log(`Processing ${slug}...`);

    const en = getLocaleText(slug, 'en');
    const id = getLocaleText(slug, 'id');

    // Set default status to published since we are migrating existing items
    const status = 'published';
    const published_at = new Date().toISOString();

    const payload = {
        slug,
        category: caseItem.category ?? null,
        timeline: caseItem.timeline ?? null,

        tech_stack: toArray(caseItem.tech_stack || caseItem.tech),
        tags: toArray(caseItem.tags),

        demo_url: caseItem.demo_url || caseItem.demoUrl || null,
        github_url: caseItem.github_url || caseItem.githubLink || null,

        cover_image: caseItem.cover_image || caseItem.coverImage || null,
        image_gradient: caseItem.image_gradient || caseItem.imageGradient || null,

        client: caseItem.client ?? null, // Fallback if not in locale, but usually in metadata
        location: caseItem.location ?? null,

        // Content from Locales
        title_en: en?.title || caseItem.title_en || caseItem.title || null,
        title_id: id?.title || caseItem.title_id || null,

        desc_en: en?.desc || en?.description || caseItem.desc_en || null,
        desc_id: id?.desc || id?.description || caseItem.desc_id || null,

        details_en: buildDetails(en),
        details_id: buildDetails(id),

        status,
        published_at
    };

    return payload;
}

async function seed({ dryRun = false, batchSize = 50 } = {}) {
    console.log('🚀 Starting seed...');
    console.log(`Mode: ${dryRun ? 'DRY RUN (no DB writes)' : 'LIVE WRITE'}`);

    const casesArray = casesData;
    if (!Array.isArray(casesArray) || casesArray.length === 0) {
        console.error('❌ casesData is empty or not an array.');
        process.exit(1);
    }

    const projects = [];
    const errors = [];

    for (const item of casesArray) {
        try {
            projects.push(normalizeProject(item));
        } catch (e) {
            errors.push({ slug: item?.slug, error: String(e) });
        }
    }

    console.log(`✅ Parsed ${projects.length} projects`);
    if (errors.length) {
        console.log(`⚠️  ${errors.length} projects failed to normalize:`);
        console.table(errors);
    }

    if (dryRun) {
        console.log('🧪 Sample payload (first 1):');
        console.dir(projects.slice(0, 1), { depth: 6 });
        return;
    }

    let successCount = 0;
    for (let i = 0; i < projects.length; i += batchSize) {
        const batch = projects.slice(i, i + batchSize);
        const { data, error } = await supabase
            .from('projects')
            .upsert(batch, { onConflict: 'slug' })
            .select('slug');

        if (error) {
            console.error('❌ Supabase upsert error:', error);
            process.exit(1);
        }
        successCount += data?.length || 0;
        console.log(`✅ Upserted batch: ${i + 1}–${Math.min(i + batchSize, projects.length)}`);
    }

    console.log(`🎉 Done. Total upserted: ${successCount}`);
}

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const batchSizeArg = args.find((a) => a.startsWith('--batch='));
const batchSize = batchSizeArg ? Number(batchSizeArg.split('=')[1]) : 50;

seed({ dryRun, batchSize }).catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
});
