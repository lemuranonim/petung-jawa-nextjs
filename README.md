# Petung Jawa Next.js

Starter web app untuk menghitung neptu, weton pasangan, dan hari acara seperti lamaran/pernikahan.

## Fitur

- Input weton laki-laki dan perempuan.
- Input hari acara manual atau otomatis dari tanggal Masehi.
- Input jam acara untuk membaca wayah menurut Saat Lima dan Sengkala Alam.
- Tampilkan tanggal acara dalam 3 kalender: Masehi, Hijriah, dan Jawa.
- Hitung rumus `z = neptu laki-laki + neptu perempuan + neptu hari acara`.
- Tampilkan hasil pembagi 5, 7, dan 3 untuk hari acara.
- Cek tanggal acara terhadap tanggal Jawa, wuku, dan daftar dina/tanggal kurang baik:
  - Sangare Tanggal, Bangas Padewan, Naasing Tanggal.
  - Taliwangke bulanan dan Taliwangke berbasis wuku.
  - Samparwangke, Dino Olo, Sangaring Sasi, Suwung Anggara Kasih, Dina Ala, Kaladite, Sarikagung, dan Dhendhan Kukudan.
- Cek wayah acara:
  - Saat Lima berdasarkan pasaran: Rejeki, Selamat, Nasehat, Pacak Wesi, dan Pangkalan.
  - Sengkala Alam: Surup/Sandekala, Bedhug/Tengah Hari, Lingsir Wengi, dan Sepi Kirang.
- Pisahkan pembagi 4 sesuai konteks:
  - Salaki Rabi / jodoh: Gentho, Gembili, Sri, Punggel.
  - Hari / lelungan / golek hasil: Kliyeg atau Riyeg, Mentheg atau Menthek, Jotho, Kemil.
- Cek pasangan pembagi 8: Pegat, Ratu, Jodoh, Topo, Tinari, Padu, Sujanan, Pesthi.
- Rekomendasi tanggal acara yang jatuh pada sisa 3 pembagi 5 dan bersih dari penanda kurang baik.

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
src/app/page.tsx       Halaman utama dan UI kalkulator
src/app/globals.css    Styling aplikasi
src/lib/petung.ts      Semua rumus, tabel neptu, tabel tibo, dan konversi tanggal
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
