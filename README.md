# Website Chadel Food: Oleh-oleh Khas Serang

Website statis untuk toko online oleh-oleh khas Serang (Chadel Food). Website ini dibuat menggunakan HTML, CSS, dan JavaScript, serta kompatibel untuk hosting di GitHub Pages.

## Fitur

- Tampilan responsif (mobile friendly) dengan Bootstrap 5
- Navbar dengan logo dan warna merah tua
- Hero section dengan background gambar produk (pisang)
- Katalog produk dengan gambar, deskripsi, harga, dan tombol beli
- Efek zoom pada gambar produk saat hover
- Integrasi WhatsApp untuk pemesanan otomatis
- Footer dengan copyright
- Mudah di-deploy ke GitHub Pages

## Struktur File

```
.
├── index.html          # Halaman utama website
├── styles.css          # File CSS untuk styling dan efek
├── script.js           # File JavaScript untuk tombol WhatsApp
├── README.md           # Dokumentasi
└── images/             # Folder untuk gambar
    ├── Chadel.png      # Logo utama
    ├── pisang.png      # Background hero section
    ├── emping.jpg      # Gambar produk emping
    ├── kerupuk.jpg     # Gambar produk kerupuk
    ├── dodol.jpg       # Gambar produk dodol
    └── ...             # Gambar produk lainnya
```

## Cara Deploy ke GitHub Pages

1. Push semua file ke repository GitHub Anda.
2. Buka repository di GitHub, masuk ke **Settings > Pages**.
3. Pastikan source sudah diatur ke branch `main` dan folder `/ (root)`.
4. Tunggu beberapa menit, website akan online di:
   `https://[username].github.io/[repository-name]/`

## Cara Update Website

Jika ada perubahan pada file, jalankan perintah berikut di terminal:
```
git add .
git commit -m "update konten"
git push
```

## Kontak

Untuk informasi lebih lanjut, silakan hubungi:
- WhatsApp: +628988513047 