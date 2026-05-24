export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoSection = {
  title: string;
  body: string;
  bullets?: readonly string[];
};

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  keywords: readonly string[];
  sections: readonly SeoSection[];
  faqs: readonly SeoFaq[];
};

export const SEO_PAGES = [
  {
    slug: 'hitung-weton-jodoh',
    title: 'Hitung Weton Jodoh Jawa Betaljemur',
    description:
      'Kalkulator weton jodoh Jawa untuk membaca kecocokan pasangan memakai neptu hari, pasaran, dan acuan Primbon Betaljemur.',
    eyebrow: 'Petung pasangan',
    h1: 'Hitung Weton Jodoh Jawa Menurut Betaljemur',
    intro:
      'Halaman ini membantu membaca kecocokan pasangan dari weton laki-laki dan perempuan. Hitungan pasangan dipisahkan dari hitungan tanggal acara, sehingga hasil jodoh tidak dipakai sebagai satu-satunya dasar memilih hari akad.',
    keywords: ['hitung weton jodoh', 'weton pasangan', 'primbon jodoh', 'petung jawa'],
    sections: [
      {
        title: 'Apa yang dihitung',
        body:
          'Sistem membaca neptu hari dan pasaran kedua calon, lalu menampilkan beberapa pembagian yang umum dipakai untuk pasangan. Untuk acuan Betaljemur, bagian pasangan juga memuat hitungan sisa 9, hari lahir pasangan, dan pembagi 3 No.25 bila tanggal lahir lengkap tersedia.',
        bullets: [
          'Neptu weton laki-laki dan perempuan.',
          'Pembacaan pasangan dengan sisa 8 dan sisa 9.',
          'Pembagi 3 Betaljemur No.25 dari hari, pasaran, bulan Jawa, tanggal Jawa, dan tahun Jawa.',
        ],
      },
      {
        title: 'Cara membaca hasil',
        body:
          'Hasil baik, waspada, atau hindari perlu dibaca sebagai petunjuk tradisi, bukan keputusan tunggal. Untuk rencana lamaran atau akad, tanggal acara tetap perlu dicek dengan aturan bulan, hari, pasaran, tanggal Jawa, dan saat acara.',
      },
    ],
    faqs: [
      {
        question: 'Apakah hitungan weton jodoh bisa menentukan tanggal nikah?',
        answer:
          'Tidak langsung. Hitungan weton jodoh lebih tepat untuk membaca pasangan, sedangkan tanggal nikah perlu memakai filter hari, bulan, tanggal Jawa, pasaran, dan saat akad.',
      },
      {
        question: 'Apakah pembagi 3 Betaljemur dipakai untuk acara?',
        answer:
          'Pembagi 3 No.25 lebih tepat ditempatkan sebagai hitungan suami istri atau kecocokan pasangan, bukan mesin utama rekomendasi tanggal acara.',
      },
    ],
  },
  {
    slug: 'hari-baik-lamaran',
    title: 'Hari Baik Lamaran Menurut Primbon Jawa',
    description:
      'Cari hari baik lamaran dan temu keluarga dengan filter bulan rahayu, bulan sarju, tanggal sangar, dan opsi aturan hajad nikah.',
    eyebrow: 'Lamaran dan peningset',
    h1: 'Cari Hari Baik Lamaran Menurut Primbon Jawa',
    intro:
      'Lamaran biasanya dibaca sebagai keperluan penting keluarga. Untuk lamaran ringan, filter utamanya adalah bulan baik dan tanggal sangar. Jika lamaran dianggap bagian dari rangkaian nikah, filter bisa diperketat seperti hajad nikah.',
    keywords: ['hari baik lamaran', 'tanggal baik lamaran', 'weton lamaran', 'primbon lamaran'],
    sections: [
      {
        title: 'Filter utama lamaran',
        body:
          'Pendekatan ringan memakai acuan bulan rahayu, bulan sarju, dan menghindari tanggal sangar. Pendekatan ketat menambahkan larangan hajad nikah agar tanggal yang dipilih lebih selektif.',
        bullets: [
          'Temu keluarga awal: cek hari baik umum dan hindari tanggal sangar.',
          'Lamaran atau peningset: cek hari baik umum, lalu tambah filter hajad nikah bila perlu.',
          'Rombongan lamaran: cek juga jam berangkat dengan hitungan lelungan.',
        ],
      },
      {
        title: 'Beda tanggal acara dan jam berangkat',
        body:
          'Tanggal lamaran dinilai dengan aturan acara, sedangkan waktu keberangkatan rombongan dinilai dengan neptu hari dan pasaran keberangkatan. Keduanya sebaiknya tampil terpisah agar hasilnya mudah dipahami.',
      },
    ],
    faqs: [
      {
        question: 'Apakah lamaran harus memakai aturan akad nikah?',
        answer:
          'Tidak selalu. Untuk temu keluarga atau lamaran ringan cukup memakai hari baik umum. Jika lamaran sudah dianggap bagian dari hajat nikah, aturan akad bisa ikut dipakai.',
      },
      {
        question: 'Jam berangkat lamaran dihitung dari apa?',
        answer:
          'Jam berangkat memakai neptu hari dan pasaran keberangkatan, lalu dicocokkan dengan acuan lelungan seperti No.141, No.145, dan No.146.',
      },
    ],
  },
  {
    slug: 'hari-baik-akad-nikah',
    title: 'Hari Baik Akad Nikah Jawa Betaljemur',
    description:
      'Rekomendasi hari baik akad nikah Jawa dengan filter bulan, tanggal Jawa, hari, pasaran, larangan nikah, dan saat ijab.',
    eyebrow: 'Akad dan ijab',
    h1: 'Hitung Hari Baik Akad Nikah Jawa',
    intro:
      'Untuk akad, sistem utama bukan hitungan pasangan dibagi 3. Tanggal akad lebih tepat dipilih dari lapisan bulan Jawa, tanggal Jawa, hari, pasaran, pantangan hajad nikah, dan saat ijab.',
    keywords: ['hari baik akad nikah', 'tanggal baik nikah jawa', 'saat ijab', 'primbon nikah'],
    sections: [
      {
        title: 'Urutan hitungan akad',
        body:
          'Tanggal kandidat perlu dikonversi lebih dulu ke kalender Jawa, lalu difilter berdasarkan aturan bulan dan larangan khusus hajad nikah. Setelah lolos, barulah jam ijab dipilih dari tabel saat menikah.',
        bullets: [
          'Pilih bulan Jawa yang layak untuk hajad nikah.',
          'Hindari hari dan tanggal larangan nikah.',
          'Nilai hari akad dan pilih saat ijab yang baik.',
        ],
      },
      {
        title: 'Jam akad dan jam berangkat berbeda',
        body:
          'Jam akad memakai acuan saat menikah, sedangkan jam berangkat memakai acuan lelungan. Dalam rekomendasi, dua hasil ini sengaja dipisahkan agar tidak tertukar.',
      },
    ],
    faqs: [
      {
        question: 'Apakah tanggal Jawa sama dengan tanggal Masehi?',
        answer:
          'Tidak. Tanggal yang dipakai dalam banyak aturan Primbon adalah tanggal Jawa, sehingga tanggal Masehi harus dikonversi dulu sebelum dinilai.',
      },
      {
        question: 'Apa yang dicari pada jam ijab?',
        answer:
          'Umumnya sistem mencari saat baik seperti Slamet atau Rejeki menurut tabel saat menikah yang sesuai pasaran dan tanggal Jawa.',
      },
    ],
  },
  {
    slug: 'rekomendasi-tanggal-pernikahan-jawa',
    title: 'Rekomendasi Tanggal Pernikahan Jawa',
    description:
      'Cari rekomendasi tanggal pernikahan Jawa dengan filter Betaljemur untuk akad, resepsi, tarub, dan jam keberangkatan rombongan.',
    eyebrow: 'Pernikahan Jawa',
    h1: 'Rekomendasi Tanggal Pernikahan Jawa',
    intro:
      'Pernikahan memerlukan beberapa lapis hitungan. Aplikasi ini memisahkan rekomendasi tanggal akad, resepsi, tarub, dan keberangkatan agar setiap keputusan punya dasar yang jelas.',
    keywords: ['rekomendasi tanggal pernikahan', 'tanggal pernikahan jawa', 'hari baik resepsi', 'tarub jawa'],
    sections: [
      {
        title: 'Lapisan rekomendasi',
        body:
          'Untuk akad dan resepsi, filter utama memakai aturan hajad nikah. Untuk tarub, sistem memakai aturan tarub yang menilai neptu hari dan pasaran serta tanggal. Untuk rombongan, sistem menambahkan acuan lelungan.',
        bullets: [
          'Akad: bulan, hari, tanggal Jawa, pasaran, pantangan, dan saat ijab.',
          'Resepsi: filter hajad nikah dan catatan pantangan.',
          'Tarub: aturan tarub dan saat pemasangan.',
          'Rombongan: jam berangkat dan arah Kala.',
        ],
      },
      {
        title: 'Mengapa hasil bisa sedikit',
        body:
          'Semakin ketat filter kitab yang dipakai, semakin sedikit tanggal yang lolos. Jika tidak ada hasil, rentang pencarian bisa diperpanjang atau mode rekomendasi dibuat lebih ringan.',
      },
    ],
    faqs: [
      {
        question: 'Kenapa rekomendasi tanggal nikah tidak memakai pembagi 3?',
        answer:
          'Karena pembagi 3 Betaljemur No.25 lebih tepat untuk membaca pasangan. Tanggal nikah memakai aturan khusus hajad nikah, bulan, hari, pasaran, dan saat ijab.',
      },
      {
        question: 'Apakah tarub memakai hitungan yang sama dengan akad?',
        answer:
          'Tidak sepenuhnya. Tarub punya bagian sendiri, termasuk penilaian neptu hari dan pasaran serta tanggal untuk pemasangan tarub.',
      },
    ],
  },
  {
    slug: 'jam-berangkat-lelungan',
    title: 'Jam Berangkat Lelungan Menurut Primbon Jawa',
    description:
      'Hitung jam berangkat rombongan menurut lelungan Jawa dengan neptu hari dan pasaran, arah Kala, serta slot saat baik.',
    eyebrow: 'Lelungan',
    h1: 'Jam Berangkat Lelungan Menurut Primbon Jawa',
    intro:
      'Hitungan lelungan dipakai untuk menentukan waktu keberangkatan, bukan menggantikan tanggal acara. Rumus dasarnya adalah neptu hari ditambah neptu pasaran dari hari keberangkatan.',
    keywords: ['jam berangkat lelungan', 'saat bepergian jawa', 'arah kala', 'primbon bepergian'],
    sections: [
      {
        title: 'Rumus lelungan',
        body:
          'Neptu keberangkatan dihitung dari hari dan pasaran. Totalnya dibaca ke kategori seperti Suku, Watu, Gajah, Baya, atau Ratu. Dalam acuan ini, Gajah dan Ratu dianggap baik untuk bepergian jauh.',
        bullets: [
          'Hitung neptu hari keberangkatan.',
          'Tambahkan neptu pasaran keberangkatan.',
          'Baca kategori dan arah Kala yang sebaiknya dihindari.',
          'Pilih slot jam berangkat dari acuan No.145 atau No.146.',
        ],
      },
      {
        title: 'Posisi dalam acara keluarga',
        body:
          'Untuk lamaran, akad, atau resepsi, lelungan dipakai sebagai modul tambahan. Tanggal acara tetap dinilai dengan aturan acara, sedangkan rombongan memakai jam berangkat terbaik.',
      },
    ],
    faqs: [
      {
        question: 'Apakah lelungan menentukan jam akad?',
        answer:
          'Tidak. Lelungan menentukan jam berangkat. Jam akad sebaiknya memakai tabel saat menikah atau saat ijab.',
      },
      {
        question: 'Apa arti arah Kala?',
        answer:
          'Arah Kala adalah arah yang sebaiknya dihindari saat keberangkatan jauh menurut acuan lelungan pada total neptu tertentu.',
      },
    ],
  },
  {
    slug: 'primbon-betaljemur-adammakna',
    title: 'Primbon Betaljemur Adammakna untuk Petung Jawa',
    description:
      'Ringkasan cara aplikasi memakai Kitab Primbon Betaljemur Adammakna sebagai acuan petung pasangan, acara, akad, tarub, dan lelungan.',
    eyebrow: 'Acuan kitab',
    h1: 'Acuan Primbon Betaljemur Adammakna',
    intro:
      'Aplikasi ini memakai Kitab Primbon Betaljemur Adammakna sebagai salah satu acuan logika. Bagian yang dipakai dipisahkan sesuai konteks agar hitungan pasangan, tanggal acara, akad, tarub, dan lelungan tidak saling tertukar.',
    keywords: ['primbon betaljemur', 'betaljemur adammakna', 'kitab primbon jawa', 'petung betaljemur'],
    sections: [
      {
        title: 'Pembagian konteks',
        body:
          'Bagian pasangan dipakai untuk membaca kecocokan. Bagian hajad nikah dipakai untuk memilih tanggal akad atau pernikahan. Bagian tarub dipakai untuk pemasangan tarub. Bagian lelungan dipakai untuk jam keberangkatan.',
        bullets: [
          'No.15 sampai No.25: bacaan pasangan.',
          'No.26 sampai No.37: tanggal dan saat akad atau hajad nikah.',
          'No.39 sampai No.42: tarub.',
          'No.141 sampai No.146: lelungan dan jam berangkat.',
        ],
      },
      {
        title: 'Cara aplikasi menjaga konteks',
        body:
          'Setiap hasil diberi label acuan agar pengguna tahu apakah sebuah hitungan sedang membaca pasangan, tanggal acara, jam ijab, atau jam berangkat. Ini penting karena satu rumus tidak selalu cocok untuk semua kebutuhan.',
      },
    ],
    faqs: [
      {
        question: 'Apakah semua hasil berasal dari Betaljemur?',
        answer:
          'Aplikasi memprioritaskan acuan Betaljemur untuk logika utama yang sudah dimasukkan. Pakem lokal keluarga atau daerah tetap bisa berbeda.',
      },
      {
        question: 'Kenapa sumber kitab perlu disebutkan?',
        answer:
          'Sumber kitab membantu pengguna memahami dasar hitungan, konteks pemakaian, dan batasan hasil yang ditampilkan aplikasi.',
      },
    ],
  },
] as const satisfies readonly SeoPage[];

export const SEO_PAGE_LINKS = SEO_PAGES.map(({ description, eyebrow, h1, slug }) => ({
  description,
  eyebrow,
  href: `/${slug}`,
  title: h1,
}));

export function getSeoPage(slug: string): SeoPage | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}
