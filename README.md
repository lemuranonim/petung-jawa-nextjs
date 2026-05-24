# Petung Jawa Next.js

Starter web app untuk menghitung neptu, weton pasangan, dan hari acara seperti lamaran/pernikahan.

## Fitur

- Input weton laki-laki dan perempuan.
- Input hari acara manual atau otomatis dari tanggal Masehi.
- Input jam acara untuk membaca wayah menurut Saat Ijab Betaljemur dan Sengkala Alam.
- Tampilkan tanggal acara dalam 3 kalender: Masehi, Hijriah, dan Jawa.
- Tampilkan neptu bulan dan tahun Jawa sesuai acuan `Kitab Primbon Betaljemur Adammakna`.
- Hitung rumus `z = neptu laki-laki + neptu perempuan + neptu hari acara`.
- Tampilkan hasil pembagi 5 dan 7 untuk hari acara, serta pembagi 3 sebagai bacaan pasangan No.25 Betaljemur.
- Cek tanggal acara terhadap tanggal Jawa, wuku, dan daftar dina/tanggal kurang baik:
  - Sangare Tanggal, Bangas Padewan, Naasing Tanggal.
  - Taliwangke bulanan dan Taliwangke berbasis wuku.
  - Samparwangke, Dino Olo, Sangaring Sasi, Suwung Anggara Kasih, Dina Ala, Kaladite, Sarikagung, dan Dhendhan Kukudan.
  - Kunarpa Warsa, Sangar Warsa, Kejadian Nabi, bulan baik/tidak baik, dan Pantangan Bulan dari Betaljemur.
- Cek wayah acara:
  - Saat Ijab Betaljemur berdasarkan tanggal Jawa, pasaran, dan jam: Slamet, Rejeki, Pitutur, Pacak Wesi, dan Pangkalan.
  - Sengkala Alam: Surup/Sandekala, Bedhug/Tengah Hari, Lingsir Wengi, dan Sepi Kirang.
- Cek lelungan/jam berangkat rombongan:
  - No.141 berdasarkan neptu hari + pasaran: Suku, Watu, Gajah, Baya, Ratu, beserta arah Kala yang dihindari.
  - No.145 dan No.146 untuk rekomendasi slot jam berangkat baik.
- Pisahkan pembagi 4 sesuai konteks:
  - Salaki Rabi / jodoh: Gentho, Gembili, Sri, Punggel.
  - Hari / lelungan / golek hasil: Kliyeg atau Riyeg, Mentheg atau Menthek, Jotho, Kemil.
- Cek pasangan pembagi 8: Pegat, Ratu, Jodoh, Topo, Tinari, Padu, Sujanan, Pesthi.
- Cek pasangan pembagi 9 Betaljemur berdasarkan sisa neptu laki-laki dan perempuan.
- Cek kecocokan hari lahir pasangan berdasarkan tabel hari suami istri Betaljemur.
- Hitung pembagi 3 mengikuti No. 25 Betaljemur: hari, pasaran, bulan Jawa, tanggal Jawa, dan tahun Jawa kedua calon.
- Panel detail tabel lengkap untuk pembagi 3, 5, 7, 8, 9, dan hari lahir pasangan.
- Rekomendasi tanggal acara berdasarkan jenis acara: temu keluarga, lamaran, lamaran ketat, akad/nikah, atau tarub.
- SEO teknis:
  - Metadata canonical, OpenGraph, Twitter card, dan OG image.
  - `robots.txt` dan `sitemap.xml` otomatis.
  - JSON-LD `WebSite`, `WebApplication`, `WebPage`, `BreadcrumbList`, dan `FAQPage`.
  - Halaman SEO untuk weton jodoh, hari baik lamaran, akad nikah, rekomendasi tanggal pernikahan, lelungan, dan acuan Betaljemur.

## Menjalankan project

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000`.

Alternatif npm:

```bash
npm install
npm run dev
```

## Struktur penting

```text
src/app/page.tsx         Halaman utama dan UI kalkulator
src/app/[slug]/page.tsx  Halaman SEO statis berbasis keyword
src/app/sitemap.ts       Sitemap otomatis
src/app/robots.ts        Robots otomatis
src/app/globals.css      Styling aplikasi
src/lib/petung.ts        Semua rumus, tabel neptu, tabel tibo, dan konversi tanggal
src/lib/seo-pages.ts     Konten halaman SEO
src/lib/seo.ts           Metadata dasar dan JSON-LD helper
```

## Konfigurasi SEO produksi

Set `NEXT_PUBLIC_SITE_URL` ke domain produksi sebelum deploy agar canonical, sitemap, robots, dan structured data tidak memakai URL lokal.

```bash
NEXT_PUBLIC_SITE_URL=https://domain-kamu.com
```

## Catatan pakem

Pakem petung Jawa bisa berbeda antar keluarga, desa, atau sesepuh. Untuk mengubah urutan tibo atau tafsir, edit file:

```text
src/lib/petung.ts
```

Konversi pasaran tanggal memakai anchor:

```text
2000-01-01 = Sabtu Legi
```

Karena pasaran berulang setiap 5 hari, aplikasi menghitung selisih hari dari anchor tersebut.

Konversi wuku memakai anchor:

```text
2000-05-21 = Wuku Sinta
```

Konversi tanggal Jawa modern memakai pola bulan Kurup Asapon dengan anchor:

```text
2026-05-18 = 1 Besar 1959 Dal
```

Tanggal Hijriah memakai kalender `islamic-umalqura` dari `Intl.DateTimeFormat`. Untuk 22 Mei 2026,
hasilnya cocok dengan KHGT Muhammadiyah: `5 Zulhijah 1447 H`.

Daftar pantangan bersifat rujukan budaya. Pakem lokal bisa berbeda, jadi hasil aplikasi sebaiknya dipakai sebagai bahan cek awal sebelum dicocokkan dengan sesepuh atau pakem keluarga.
