# Panduan Penggunaan Git (Git Guide)

Dokumen ini berisi rekapitulasi perintah Git yang sering digunakan dalam pengembangan proyek ini.


## 1. Konfigurasi Awal (Setup)
Sebelum mulai, pastikan identitas sudah terkonfigurasi:
```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@contoh.com"
```

## 2. Perintah Dasar (Basic Workflow)

### Cek Status
Melihat file yang berubah atau belum ditrack.
```bash
git status
```

### Menambahkan File (Staging)
Menyiapkan file untuk disimpan.
```bash
# Tambah satu file spesifik
git add nama_file.js

# Tambah semua file yang berubah
git add .
```

### Menyimpan Perubahan (Commit)
Menyimpan perubahan yang sudah di-stage dengan pesan deskriptif.
```bash
git commit -m "jenis: pesan singkat tentang perubahan"
```
**Contoh Format Pesan:**
- `feat`: Fitur baru (e.g., `feat: add learn progress page`)
- `fix`: Perbaikan bug (e.g., `fix: mobile navbar z-index`)
- `refactor`: Perubahan kode tanpa ubah fitur (e.g., `refactor: clean up comments`)
- `style`: Perubahan UI/CSS (e.g., `style: update button color`)
- `docs`: Dokumentasi (e.g., `docs: update readme`)

### Mengirim ke Server (Push)
Mengupload commit lokal ke repository GitHub.
```bash
git push
```

### Mengambil Update (Pull)
Mengambil perubahan terbaru dari repository GitHub ke lokal.
```bash
git pull
```

## 3. Melihat Riwayat (History)

### Log Singkat
Melihat daftar commit terakhir dalam satu baris per commit.
```bash
git log --oneline -n 10
```

### Log Detail
Melihat detail siapa yang mengubah dan kapan.
```bash
git log
```

## 4. Troubleshooting Umum

### Undo `git add`
Jika salah menambahkan file ke staging area.
```bash
git restore --staged nama_file
```

### Membatalkan Perubahan Lokal
Mengembalikan file ke kondisi terakhir commit (HATI-HATI: perubahan hilang).
```bash
git restore nama_file
```

## 5. Branching (Cabang)
*Saat ini proyek menggunakan branch utama `main`.*

```bash
# Buat branch baru
git checkout -b nama-fitur-baru

# Pindah branch
git checkout main

# Gabung branch ke main
git checkout main
git merge nama-fitur-baru
```

---
*Dibuat otomatis oleh Assistant.*
