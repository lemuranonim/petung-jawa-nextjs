# Petung Jawa Next.js

Starter web app untuk menghitung neptu, weton pasangan, dan hari acara seperti lamaran/pernikahan.

## Fitur

- Input weton laki-laki dan perempuan.
- Input hari acara manual atau otomatis dari tanggal Masehi.
- Hitung rumus `z = neptu laki-laki + neptu perempuan + neptu hari acara`.
- Tampilkan hasil pembagi 5, 7, dan 3 untuk hari acara.
- Pisahkan pembagi 4 sesuai konteks:
  - Salaki Rabi / jodoh: Gentho, Gembili, Sri, Punggel.
  - Hari / lelungan / golek hasil: Kliyeg atau Riyeg, Mentheg atau Menthek, Jotho, Kemil.
- Cek pasangan pembagi 8: Pegat, Ratu, Jodoh, Topo, Tinari, Padu, Sujanan, Pesthi.
- Rekomendasi tanggal acara yang jatuh pada sisa 3 pembagi 5.

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
