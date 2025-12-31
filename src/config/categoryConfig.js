export const CATEGORIES = {
    WEB_APP: 'Web App',
    DATA_ANALYSIS: 'Data Analysis',
    DATA_ENGINEERING: 'Data Engineering'
};

// --- DEFAULT TEMPLATES ---

const TEMPLATE_WEB_APP = {
    overview: { title: "Overview", content: "" },
    problem: { title: "The Problem", content: "" },
    solution: { title: "The Solution", content: "" },
    role: "Solo Developer",
    features: [], // List of strings
    tech: {
        frontend: [],
        backend: [],
        database: [],
        deployment: []
    },
    architecture: { summary: "", diagram_url: "" },
    process: [], // List of {title, desc}
    results: {
        impact: "",
        metrics: [] // {label, value}
    },
    challenges: [], // List of strings
    lessons: [], // List of strings
    images: [] // Gallery
};

const TEMPLATE_DATA_ANALYSIS = {
    overview: { title: "Overview", content: "" },
    business_context: "",
    dataset: {
        source: "",
        size: "",
        period: "",
        tables: []
    },
    questions: [], // List of strings
    kpis: [], // List of strings
    process: [], // List of {title, desc}
    key_insights: [], // {title, evidence}
    recommendations: [], // {action, expected_impact}
    deliverables: {
        dashboard_url: "",
        sql_notebook_url: "",
        slides_url: ""
    },
    results: { metrics: [] } // {label, value}
};

const TEMPLATE_DATA_ENGINEERING = {
    overview: { title: "Overview", content: "" },
    architecture: {
        pattern: "ELT/ETL",
        diagram_url: "",
        components: {
            sources: [],
            storage: [],
            warehouse: [],
            orchestration: [],
            transform: [],
            bi: []
        }
    },
    data_pipeline: {
        frequency: "daily",
        steps: [] // {name, desc}
    },
    data_model: {
        type: "star_schema",
        facts: [],
        dims: []
    },
    data_quality: {
        checks: [], // {rule, tool}
        sla: ""
    },
    observability: {
        metrics: [],
        alerts: []
    },
    results: { metrics: [] },
    challenges: [],
    lessons: []
};

export const CATEGORY_CONFIG = {
    [CATEGORIES.WEB_APP]: {
        template: TEMPLATE_WEB_APP,
        sections: [
            { key: 'role', type: 'text', title: 'My Role' },
            { key: 'problem', type: 'object-text', title: 'Problem Statement' },
            { key: 'solution', type: 'object-text', title: 'Solution' },
            { key: 'features', type: 'list-string', title: 'Key Features' },
            { key: 'tech', type: 'map-list', title: 'Tech Stack Detail', keys: ['frontend', 'backend', 'database', 'deployment'] },
            { key: 'architecture', type: 'object-mixed', title: 'Architecture', fields: [{ key: 'summary', type: 'text' }, { key: 'diagram_url', type: 'text' }] },
            { key: 'process', type: 'list-object', title: 'Development Process', fields: ['title', 'desc'] },
            { key: 'results', type: 'results-metrics', title: 'Results & Impact' },
        ],
        validate: (data) => {
            const errors = [];
            if (!data.demo_url && !data.github_url) errors.push("Web App must have Demo or GitHub URL.");
            if ((data.tech_stack?.split(',').length || 0) < 3) errors.push("List at least 3 technologies.");
            return errors;
        }
    },
    [CATEGORIES.DATA_ANALYSIS]: {
        template: TEMPLATE_DATA_ANALYSIS,
        sections: [
            { key: 'business_context', type: 'textarea', title: 'Business Context' },
            { key: 'dataset', type: 'object-mixed', title: 'Dataset Info', fields: [{ key: 'source', type: 'text' }, { key: 'size', type: 'text' }, { key: 'period', type: 'text' }] },
            { key: 'questions', type: 'list-string', title: 'Analysis Questions' },
            { key: 'kpis', type: 'list-string', title: 'KPI Metrics' },
            { key: 'key_insights', type: 'list-object', title: 'Key Insights', fields: ['title', 'evidence'] },
            { key: 'recommendations', type: 'list-object', title: 'Recommendations', fields: ['action', 'expected_impact'] },
            { key: 'deliverables', type: 'object-mixed', title: 'Deliverables', fields: [{ key: 'dashboard_url', type: 'text' }, { key: 'sql_notebook_url', type: 'text' }] },
        ],
        validate: (data) => {
            const errors = [];
            // Basic Check?
            return errors;
        }
    },
    [CATEGORIES.DATA_ENGINEERING]: {
        template: TEMPLATE_DATA_ENGINEERING,
        sections: [
            { key: 'architecture', type: 'object-mixed', title: 'Architecture', fields: [{ key: 'pattern', type: 'text' }, { key: 'diagram_url', type: 'text' }] },
            // Deep nested components omitted for simplicity in generic builder, simpler to use JSON for now or flatten
            { key: 'data_pipeline', type: 'object-mixed', title: 'Pipeline', fields: [{ key: 'frequency', type: 'text' }] },
            { key: 'data_model', type: 'object-mixed', title: 'Data Model', fields: [{ key: 'type', type: 'text' }] },
            { key: 'data_quality', type: 'object-mixed', title: 'Data Quality', fields: [{ key: 'sla', type: 'text' }] },
        ],
        validate: (data) => {
            const errors = [];
            return errors;
        }
    }
};
