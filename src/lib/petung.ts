export const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'] as const;
export const PASARAN = ['Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon'] as const;
export const JAVANESE_MONTHS = [
  'Suro',
  'Sapar',
  'Mulud',
  'Bakda Mulud',
  'Jumadil Awal',
  'Jumadil Akhir',
  'Rejeb',
  'Ruwah',
  'Pasa',
  'Sawal',
  'Sela',
  'Besar',
] as const;
export const JAVANESE_YEAR_NAMES = ['Alip', 'Ehe', 'Jimawal', 'Je', 'Dal', 'Be', 'Wawu', 'Jimakir'] as const;
export const HIJRI_CALENDAR_LOCALE = 'id-ID-u-ca-islamic-umalqura-nu-latn';
export const WUKU = [
  'Sinta',
  'Landep',
  'Wukir',
  'Kurantil',
  'Tolu',
  'Gumbreg',
  'Warigalit',
  'Warigagung',
  'Julungwangi',
  'Sungsang',
  'Galungan',
  'Kuningan',
  'Langkir',
  'Mandasiya',
  'Julungpujut',
  'Pahang',
  'Kuruwelut',
  'Marakeh',
  'Tambir',
  'Medangkungan',
  'Maktal',
  'Wuye',
  'Manahil',
  'Prangbakat',
  'Bala',
  'Wugu',
  'Wayang',
  'Kulawu',
  'Dukut',
  'Watugunung',
] as const;

export type DayName = (typeof DAYS)[number];
export type PasaranName = (typeof PASARAN)[number];
export type JavaneseMonthName = (typeof JAVANESE_MONTHS)[number];
export type JavaneseYearName = (typeof JAVANESE_YEAR_NAMES)[number];
export type WukuName = (typeof WUKU)[number];

export const DAY_NEPTU: Record<DayName, number> = {
  Minggu: 5,
  Senin: 4,
  Selasa: 3,
  Rabu: 7,
  Kamis: 8,
  Jumat: 6,
  Sabtu: 9,
};

export const PASARAN_NEPTU: Record<PasaranName, number> = {
  Legi: 5,
  Pahing: 9,
  Pon: 7,
  Wage: 4,
  Kliwon: 8,
};

export type TiboMeaning = {
  name: string;
  level: 'baik' | 'netral' | 'waspada' | 'hindari';
  description: string;
};

export type QualityLevel = TiboMeaning['level'];

export type Petung4Context = 'salakiRabi' | 'lelunganHasil';

export type Petung4System = {
  id: Petung4Context;
  name: string;
  label: string;
  basisLabel: string;
  formula: string;
  results: Record<number, TiboMeaning>;
};

export const TIBO_3: Record<number, TiboMeaning> = {
  1: { name: 'Begja / Bejo', level: 'baik', description: 'Dianggap membawa keberuntungan.' },
  2: { name: 'Lara', level: 'waspada', description: 'Dianggap kurang nyaman, rawan kesusahan.' },
  3: { name: 'Pati', level: 'hindari', description: 'Umumnya dihindari untuk hajat besar.' },
};

export const PETUNG_4_SALAKI_RABI: Petung4System = {
  id: 'salakiRabi',
  name: 'Petung 4 Salaki Rabi - Betaljemur',
  label: 'Jodoh / Salaki Rabi',
  basisLabel: 'Neptu pasangan',
  formula: 'neptu laki-laki + neptu perempuan',
  results: {
    1: { name: 'Gentho / Gento', level: 'waspada', description: 'Larang anak / jarang anak.' },
    2: { name: 'Gembili', level: 'baik', description: 'Sugih anak / banyak anak.' },
    3: { name: 'Sri', level: 'baik', description: 'Sugih rejeki.' },
    4: { name: 'Punggel', level: 'hindari', description: 'Mati siji / rawan berpisah.' },
  },
};

export const PETUNG_4_LELUNGAN_HASIL: Petung4System = {
  id: 'lelunganHasil',
  name: 'Petung 4 Lelungan / Golek Hasil',
  label: 'Hari / Lelungan / Hasil',
  basisLabel: 'Neptu hari',
  formula: 'neptu hari yang dipilih',
  results: {
    1: { name: 'Kliyeg / Riyeg', level: 'waspada', description: 'Capai, ora oleh apa-apa / tidak mendapat hasil.' },
    2: { name: 'Mentheg / Menthek', level: 'baik', description: 'Oleh akeh / hasil sesuai harapan.' },
    3: { name: 'Jotho', level: 'hindari', description: 'Kecewa / gagal.' },
    4: { name: 'Kemil', level: 'netral', description: 'Ngemil / mendapat suguhan; maknanya kontekstual.' },
  },
};

export const PETUNG_4_CONTEXTS: readonly Petung4Context[] = ['salakiRabi', 'lelunganHasil'];

export const PETUNG_4_SYSTEMS: Record<Petung4Context, Petung4System> = {
  salakiRabi: PETUNG_4_SALAKI_RABI,
  lelunganHasil: PETUNG_4_LELUNGAN_HASIL,
};

export const TIBO_4_SALAKI_RABI = PETUNG_4_SALAKI_RABI.results;
export const TIBO_4_LELUNGAN_HASIL = PETUNG_4_LELUNGAN_HASIL.results;

// Default pembagi 4 untuk konteks hari/acara; pernikahan memakai PETUNG_4_SALAKI_RABI.
export const TIBO_4: Record<number, TiboMeaning> = TIBO_4_LELUNGAN_HASIL;

// Default untuk pemilihan hari acara/hajatan.
// Di beberapa pakem, sisa 3 dianggap paling dicari.
export const TIBO_5_EVENT: Record<number, TiboMeaning> = {
  1: { name: 'Sandang', level: 'baik', description: 'Baik; cukup sandang/kebutuhan.' },
  2: { name: 'Pangan', level: 'baik', description: 'Baik; cukup pangan dan rezeki.' },
  3: { name: 'Papan / Joyo', level: 'baik', description: 'Sangat baik; sering dijadikan target hari acara.' },
  4: { name: 'Lara / Loro', level: 'hindari', description: 'Kurang baik; biasanya dihindari.' },
  5: { name: 'Pati', level: 'hindari', description: 'Kurang baik; biasanya dihindari untuk hajat besar.' },
};

export const TIBO_7: Record<number, TiboMeaning> = {
  1: { name: 'Wasesa Segara', level: 'baik', description: 'Baik; luas rezeki dan wibawa.' },
  2: { name: 'Tunggak Semi', level: 'baik', description: 'Baik; mudah tumbuh dan berkembang.' },
  3: { name: 'Satriya Wibawa', level: 'baik', description: 'Baik; berwibawa dan dihormati.' },
  4: { name: 'Sumur Sinaba', level: 'baik', description: 'Baik; menjadi tempat rujukan/nasehat.' },
  5: { name: 'Satriya Wirang', level: 'waspada', description: 'Perlu hati-hati; rawan malu atau sandungan.' },
  6: { name: 'Bumi Kepetak', level: 'waspada', description: 'Perlu hati-hati; tafsirnya cenderung berat.' },
  7: { name: 'Lebu Ketiup Angin', level: 'hindari', description: 'Kurang baik; mudah buyar/tidak kokoh.' },
};

// Default untuk cek kecocokan pasangan.
export const TIBO_8_COUPLE: Record<number, TiboMeaning> = {
  1: { name: 'Pegat', level: 'hindari', description: 'Rawan pisah atau banyak masalah.' },
  2: { name: 'Ratu', level: 'baik', description: 'Baik; dihormati dan harmonis.' },
  3: { name: 'Jodoh', level: 'baik', description: 'Baik; dianggap cocok.' },
  4: { name: 'Topo', level: 'waspada', description: 'Awal berat, tetapi bisa membaik jika kuat menjalani.' },
  5: { name: 'Tinari', level: 'baik', description: 'Baik; rezeki dan kebahagiaan.' },
  6: { name: 'Padu', level: 'waspada', description: 'Rawan cekcok atau perbedaan pendapat.' },
  7: { name: 'Sujanan', level: 'waspada', description: 'Rawan curiga, konflik, atau godaan pihak ketiga.' },
  8: { name: 'Pesthi', level: 'baik', description: 'Baik; rukun, adem, dan langgeng.' },
};

export type WetonInput = {
  day: DayName;
  pasaran: PasaranName;
};

export type JavaneseDateInfo = {
  day: number;
  month: JavaneseMonthName;
  monthIndex: number;
  year: number;
  yearName: JavaneseYearName;
  wuku: WukuName;
};

export type HijriDateInfo = {
  day: number;
  month: string;
  year: number;
  era: string;
};

export type BadDayWarning = {
  id: string;
  name: string;
  level: 'waspada' | 'hindari';
  scope: string;
  description: string;
};

export type EventDateAssessment = {
  date: string;
  weton: WetonInput;
  javanese: JavaneseDateInfo;
  warnings: BadDayWarning[];
  worstLevel: Exclude<QualityLevel, 'netral'>;
};

export type WayahPeriod = {
  id: string;
  name: string;
  level: QualityLevel;
  range: string;
  source: 'Saat Lima' | 'Sengkala Alam';
  description: string;
};

export type WayahAssessment = {
  time: string;
  pasaran: PasaranName;
  minuteOfDay: number;
  saatLima: WayahPeriod | null;
  alam: WayahPeriod[];
  overallLevel: QualityLevel;
};

const SANGARE_TANGGAL: Record<JavaneseMonthName, readonly number[]> = {
  Suro: [18],
  Sapar: [10],
  Mulud: [8],
  'Bakda Mulud': [28],
  'Jumadil Awal': [28],
  'Jumadil Akhir': [18],
  Rejeb: [18],
  Ruwah: [26],
  Pasa: [24],
  Sawal: [2],
  Sela: [28],
  Besar: [],
};

const BANGAS_PADEWAN: Record<JavaneseMonthName, readonly number[]> = {
  Suro: [11],
  Sapar: [20],
  Mulud: [1, 15],
  'Bakda Mulud': [10, 20],
  'Jumadil Awal': [10, 11],
  'Jumadil Akhir': [10, 14],
  Rejeb: [13, 27],
  Ruwah: [4, 28],
  Pasa: [7, 9, 20],
  Sawal: [10],
  Sela: [2, 22],
  Besar: [6, 20],
};

const NAASING_TANGGAL: Record<JavaneseMonthName, readonly number[]> = {
  Suro: [6, 11],
  Sapar: [1, 20],
  Mulud: [10, 20],
  'Bakda Mulud': [10, 20],
  'Jumadil Awal': [1, 11],
  'Jumadil Akhir': [10, 14],
  Rejeb: [2, 14],
  Ruwah: [12, 13],
  Pasa: [9, 20],
  Sawal: [10, 20],
  Sela: [12, 13],
  Besar: [6, 10],
};

const DINO_OLO_DAYS: Record<JavaneseMonthName, readonly DayName[]> = {
  Suro: ['Senin', 'Selasa'],
  Sapar: ['Senin', 'Selasa'],
  Mulud: ['Rabu', 'Kamis'],
  'Bakda Mulud': ['Rabu', 'Kamis'],
  'Jumadil Awal': ['Rabu', 'Kamis'],
  'Jumadil Akhir': ['Jumat'],
  Rejeb: ['Jumat'],
  Ruwah: ['Jumat'],
  Pasa: ['Sabtu', 'Minggu'],
  Sawal: ['Sabtu', 'Minggu'],
  Sela: ['Sabtu', 'Minggu'],
  Besar: ['Senin', 'Selasa'],
};

const SANGARING_SASI_DAYS: Record<JavaneseMonthName, readonly DayName[]> = {
  Suro: ['Sabtu', 'Minggu'],
  Sapar: ['Sabtu', 'Minggu'],
  Mulud: ['Senin', 'Selasa'],
  'Bakda Mulud': ['Senin', 'Selasa'],
  'Jumadil Awal': ['Senin', 'Selasa'],
  'Jumadil Akhir': ['Rabu', 'Kamis'],
  Rejeb: ['Rabu', 'Kamis'],
  Ruwah: ['Rabu', 'Kamis'],
  Pasa: ['Jumat'],
  Sawal: ['Jumat'],
  Sela: ['Jumat'],
  Besar: ['Sabtu', 'Minggu'],
};

const SUWUNG_ANGGARA_KASIH_MONTHS: Record<JavaneseYearName, readonly JavaneseMonthName[]> = {
  Alip: ['Jumadil Akhir', 'Besar'],
  Ehe: ['Rejeb'],
  Jimawal: ['Suro', 'Ruwah'],
  Je: ['Sapar', 'Ruwah'],
  Dal: ['Mulud', 'Pasa'],
  Be: ['Bakda Mulud'],
  Wawu: ['Mulud', 'Sela'],
  Jimakir: ['Jumadil Awal'],
};

const TALIWANGKE_SASI_RULES: readonly {
  day: DayName;
  pasaran: PasaranName;
  months: readonly JavaneseMonthName[];
}[] = [
  { day: 'Senin', pasaran: 'Kliwon', months: ['Jumadil Awal', 'Sela'] },
  { day: 'Selasa', pasaran: 'Legi', months: ['Jumadil Akhir', 'Besar'] },
  { day: 'Rabu', pasaran: 'Pahing', months: ['Suro', 'Rejeb'] },
  { day: 'Kamis', pasaran: 'Pon', months: ['Sapar', 'Ruwah'] },
  { day: 'Jumat', pasaran: 'Wage', months: ['Mulud', 'Pasa'] },
  { day: 'Sabtu', pasaran: 'Kliwon', months: ['Bakda Mulud', 'Sawal'] },
];

const TALIWANGKE_WUKU_RULES: readonly {
  day: DayName;
  pasaran: PasaranName;
  wuku: WukuName;
  alias: string;
}[] = [
  { day: 'Senin', pasaran: 'Kliwon', wuku: 'Wuye', alias: 'Somaye' },
  { day: 'Selasa', pasaran: 'Legi', wuku: 'Wayang', alias: 'Anggararayang' },
  { day: 'Rabu', pasaran: 'Pahing', wuku: 'Landep', alias: 'Bodanep' },
  { day: 'Kamis', pasaran: 'Pon', wuku: 'Warigalit', alias: 'Warigamis' },
  { day: 'Jumat', pasaran: 'Wage', wuku: 'Kuningan', alias: 'Sukraingan' },
  { day: 'Sabtu', pasaran: 'Kliwon', wuku: 'Kuruwelut', alias: 'Tumpaklote' },
];

const SAMPARWANGKE_WUKU_RULES: readonly {
  day: DayName;
  pasaran: PasaranName;
  wuku: WukuName;
}[] = [
  { day: 'Senin', pasaran: 'Kliwon', wuku: 'Warigalit' },
  { day: 'Senin', pasaran: 'Legi', wuku: 'Bala' },
  { day: 'Senin', pasaran: 'Pahing', wuku: 'Langkir' },
  { day: 'Senin', pasaran: 'Pon', wuku: 'Sinta' },
  { day: 'Senin', pasaran: 'Wage', wuku: 'Tambir' },
];

const DINA_ALA_WETONS = new Set([
  'Minggu Pahing',
  'Sabtu Pon',
  'Jumat Wage',
  'Selasa Kliwon',
  'Senin Legi',
  'Kamis Wage',
]);
const DINA_ALA_BANGET_WETONS = new Set([
  'Rabu Legi',
  'Minggu Pahing',
  'Kamis Pon',
  'Selasa Wage',
  'Sabtu Kliwon',
]);
const KALADITE_WUKU = new Set<WukuName>(['Warigagung', 'Kuruwelut', 'Dukut']);
const SARIKAGUNG_WUKU = new Set<WukuName>(['Kurantil', 'Galungan', 'Marakeh', 'Bala']);
const DHENDHAN_KUKUDAN_DAYS = new Set<DayName>(['Minggu', 'Senin', 'Selasa']);

const SAAT_LIMA_RANGES = [
  { start: 6 * 60, end: 8 * 60 + 24, label: '06.00 - 08.24' },
  { start: 8 * 60 + 24, end: 10 * 60 + 48, label: '08.24 - 10.48' },
  { start: 10 * 60 + 48, end: 13 * 60 + 12, label: '10.48 - 13.12' },
  { start: 13 * 60 + 12, end: 15 * 60 + 36, label: '13.12 - 15.36' },
  { start: 15 * 60 + 36, end: 18 * 60, label: '15.36 - 18.00' },
] as const;

const SAAT_LIMA_BY_PASARAN: Record<PasaranName, readonly string[]> = {
  Legi: ['Nasehat', 'Rejeki', 'Selamat', 'Pangkalan', 'Pacak Wesi'],
  Pahing: ['Rejeki', 'Selamat', 'Pangkalan', 'Pacak Wesi', 'Nasehat'],
  Pon: ['Selamat', 'Pangkalan', 'Pacak Wesi', 'Nasehat', 'Rejeki'],
  Wage: ['Pangkalan', 'Pacak Wesi', 'Nasehat', 'Selamat', 'Rejeki'],
  Kliwon: ['Pacak Wesi', 'Nasehat', 'Rejeki', 'Selamat', 'Pangkalan'],
};

const SAAT_LIMA_MEANINGS: Record<string, Omit<WayahPeriod, 'id' | 'range' | 'source'>> = {
  Rejeki: {
    name: 'Rejeki',
    level: 'baik',
    description: 'Baik untuk berdagang, mencari modal, menagih, membuka usaha, atau menutup transaksi.',
  },
  Selamat: {
    name: 'Selamat',
    level: 'baik',
    description: 'Baik untuk akad, lamaran, perjalanan, pindahan, dan urusan yang membutuhkan rahayu.',
  },
  Nasehat: {
    name: 'Nasehat',
    level: 'baik',
    description: 'Baik untuk diskusi, meminta restu, musyawarah keluarga, belajar, atau berdamai.',
  },
  'Pacak Wesi': {
    name: 'Pacak Wesi',
    level: 'baik',
    description: 'Baik untuk urusan yang perlu keteguhan, perjanjian, aset, bangunan, atau barang berharga.',
  },
  Pangkalan: {
    name: 'Pangkalan',
    level: 'hindari',
    description: 'Wayah kurang baik; rawan hambatan, sengkala, kecelakaan, atau urusan macet.',
  },
};

const SENGKALA_ALAM_PERIODS: readonly {
  id: string;
  name: string;
  level: QualityLevel;
  start: number;
  end: number;
  range: string;
  description: string;
}[] = [
  {
    id: 'lingsir-wengi',
    name: 'Lingsir Wengi',
    level: 'hindari',
    start: 0,
    end: 60,
    range: '00.00 - 01.00',
    description: 'Pantangan memindahkan barang berharga atau mengambil keputusan bisnis besar.',
  },
  {
    id: 'sepi-kirang',
    name: 'Sepi Kirang',
    level: 'baik',
    start: 2 * 60,
    end: 4 * 60 + 30,
    range: '02.00 - 04.30',
    description: 'Wayah spiritual yang baik untuk doa, tirakat, meditasi, atau memohon petunjuk.',
  },
  {
    id: 'bedhug',
    name: 'Bedhug / Tengah Hari',
    level: 'hindari',
    start: 12 * 60,
    end: 13 * 60,
    range: '12.00 - 13.00',
    description: 'Pantangan prosesi sakral murni karena hawa dianggap panas dan mudah memancing emosi.',
  },
  {
    id: 'surup-sandekala',
    name: 'Surup / Sandekala',
    level: 'hindari',
    start: 17 * 60 + 30,
    end: 18 * 60 + 30,
    range: '17.30 - 18.30',
    description: 'Waktu transisi siang ke malam; tidak dianjurkan memulai perjalanan jauh atau hajat besar.',
  },
];

export type PetungResult = {
  divisor: number;
  remainder: number;
  meaning: TiboMeaning;
};

export type PetungCalculation = {
  maleNeptu: number;
  femaleNeptu: number;
  coupleNeptu: number;
  eventNeptu: number;
  totalNeptu: number;
  petung4: Record<Petung4Context, PetungResult>;
  eventResults: PetungResult[];
  coupleResult8: PetungResult;
};

export function wetonNeptu(input: WetonInput): number {
  return DAY_NEPTU[input.day] + PASARAN_NEPTU[input.pasaran];
}

export function normalizeModulo(total: number, divisor: number): number {
  const raw = total % divisor;
  return raw === 0 ? divisor : raw;
}

export function resultForTable(total: number, divisor: number, table: Record<number, TiboMeaning>): PetungResult {
  const remainder = normalizeModulo(total, divisor);

  return {
    divisor,
    remainder,
    meaning: table[remainder],
  };
}

export function resultFor(total: number, divisor: 3 | 4 | 5 | 7 | 8): PetungResult {
  const tables = {
    3: TIBO_3,
    4: TIBO_4,
    5: TIBO_5_EVENT,
    7: TIBO_7,
    8: TIBO_8_COUPLE,
  } as const;

  return resultForTable(total, divisor, tables[divisor]);
}

export function calculatePetung(params: {
  male: WetonInput;
  female: WetonInput;
  event: WetonInput;
}): PetungCalculation {
  const maleNeptu = wetonNeptu(params.male);
  const femaleNeptu = wetonNeptu(params.female);
  const coupleNeptu = maleNeptu + femaleNeptu;
  const eventNeptu = wetonNeptu(params.event);
  const totalNeptu = coupleNeptu + eventNeptu;

  return {
    maleNeptu,
    femaleNeptu,
    coupleNeptu,
    eventNeptu,
    totalNeptu,
    petung4: {
      salakiRabi: resultForTable(coupleNeptu, 4, TIBO_4_SALAKI_RABI),
      lelunganHasil: resultForTable(eventNeptu, 4, TIBO_4_LELUNGAN_HASIL),
    },
    coupleResult8: resultFor(coupleNeptu, 8),
    eventResults: [
      resultFor(totalNeptu, 5),
      resultFor(totalNeptu, 7),
      resultFor(totalNeptu, 3),
    ],
  };
}

function positiveModulo(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % divisor;
}

function parseIsoDateToUtc(date: string): number {
  const [year, month, day] = date.split('-').map(Number);

  if (!year || !month || !day) {
    throw new Error('Format tanggal harus YYYY-MM-DD.');
  }

  return Date.UTC(year, month - 1, day);
}

export function dayFromIsoDate(date: string): DayName {
  const utc = parseIsoDateToUtc(date);
  const dayIndex = new Date(utc).getUTCDay();
  return DAYS[dayIndex];
}

// Anchor: 2000-01-01 = Sabtu Legi.
// Karena pasaran berulang tiap 5 hari, cukup hitung selisih hari dari anchor ini.
export function pasaranFromIsoDate(date: string): PasaranName {
  const oneDay = 24 * 60 * 60 * 1000;
  const anchorUtc = Date.UTC(2000, 0, 1);
  const targetUtc = parseIsoDateToUtc(date);
  const diffDays = Math.round((targetUtc - anchorUtc) / oneDay);
  const pasaranIndex = positiveModulo(diffDays, 5);
  return PASARAN[pasaranIndex];
}

export function wetonFromIsoDate(date: string): WetonInput {
  return {
    day: dayFromIsoDate(date),
    pasaran: pasaranFromIsoDate(date),
  };
}

export function addDaysIso(date: string, amount: number): string {
  const utc = parseIsoDateToUtc(date);
  const nextUtc = utc + amount * 24 * 60 * 60 * 1000;
  return new Date(nextUtc).toISOString().slice(0, 10);
}

function getJavaneseYearName(year: number): JavaneseYearName {
  return JAVANESE_YEAR_NAMES[positiveModulo(year + 5, 8)];
}

function isJavaneseLeapYear(year: number): boolean {
  const yearName = getJavaneseYearName(year);
  return yearName === 'Ehe' || yearName === 'Dal' || yearName === 'Jimakir';
}

function javaneseMonthLength(year: number, monthIndex: number): number {
  if (monthIndex === 11) return isJavaneseLeapYear(year) ? 30 : 29;
  return monthIndex % 2 === 0 ? 30 : 29;
}

function moveToNextJavaneseMonth(value: { day: number; monthIndex: number; year: number }) {
  value.day = 1;
  value.monthIndex += 1;

  if (value.monthIndex >= JAVANESE_MONTHS.length) {
    value.monthIndex = 0;
    value.year += 1;
  }
}

function moveToPreviousJavaneseMonth(value: { day: number; monthIndex: number; year: number }) {
  value.monthIndex -= 1;

  if (value.monthIndex < 0) {
    value.monthIndex = JAVANESE_MONTHS.length - 1;
    value.year -= 1;
  }

  value.day = javaneseMonthLength(value.year, value.monthIndex);
}

export function wukuFromIsoDate(date: string): WukuName {
  const oneDay = 24 * 60 * 60 * 1000;
  const anchorUtc = Date.UTC(2000, 4, 21);
  const targetUtc = parseIsoDateToUtc(date);
  const diffDays = Math.round((targetUtc - anchorUtc) / oneDay);
  const wukuIndex = Math.floor(positiveModulo(diffDays, 210) / 7);
  return WUKU[wukuIndex];
}

export function javaneseDateFromIsoDate(date: string): JavaneseDateInfo {
  const oneDay = 24 * 60 * 60 * 1000;
  const anchorUtc = Date.UTC(2026, 4, 18);
  const targetUtc = parseIsoDateToUtc(date);
  let remainingDays = Math.round((targetUtc - anchorUtc) / oneDay);
  const value = {
    day: 1,
    monthIndex: 11,
    year: 1959,
  };

  while (remainingDays > 0) {
    const remainingInMonth = javaneseMonthLength(value.year, value.monthIndex) - value.day;

    if (remainingDays <= remainingInMonth) {
      value.day += remainingDays;
      remainingDays = 0;
    } else {
      remainingDays -= remainingInMonth + 1;
      moveToNextJavaneseMonth(value);
    }
  }

  while (remainingDays < 0) {
    const daysBack = Math.abs(remainingDays);

    if (daysBack < value.day) {
      value.day -= daysBack;
      remainingDays = 0;
    } else {
      remainingDays += value.day;
      moveToPreviousJavaneseMonth(value);
    }
  }

  return {
    ...value,
    month: JAVANESE_MONTHS[value.monthIndex],
    yearName: getJavaneseYearName(value.year),
    wuku: wukuFromIsoDate(date),
  };
}

export function hijriDateFromIsoDate(date: string): HijriDateInfo {
  const targetUtc = parseIsoDateToUtc(date);
  const formatter = new Intl.DateTimeFormat(HIJRI_CALENDAR_LOCALE, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const parts = formatter.formatToParts(new Date(targetUtc));
  const valueFor = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value;
  const day = Number(valueFor('day'));
  const year = Number(valueFor('year'));
  const month = valueFor('month');
  const era = valueFor('era') ?? 'H';

  if (!day || !year || !month) {
    throw new Error('Tanggal Hijriah tidak bisa dibaca.');
  }

  return {
    day,
    month,
    year,
    era,
  };
}

function parseTimeToMinutes(time: string): number {
  const [hour, minute] = time.split(':').map(Number);

  if (
    !Number.isInteger(hour) ||
    !Number.isInteger(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    throw new Error('Format jam harus HH:mm.');
  }

  return hour * 60 + minute;
}

function isMinuteInRange(minute: number, start: number, end: number, includeEnd = false): boolean {
  return minute >= start && (includeEnd ? minute <= end : minute < end);
}

function getSaatLimaPeriod(pasaran: PasaranName, minuteOfDay: number): WayahPeriod | null {
  const rangeIndex = SAAT_LIMA_RANGES.findIndex((range) =>
    isMinuteInRange(minuteOfDay, range.start, range.end, range.end === 18 * 60),
  );

  if (rangeIndex < 0) return null;

  const name = SAAT_LIMA_BY_PASARAN[pasaran][rangeIndex];
  const meaning = SAAT_LIMA_MEANINGS[name];
  const range = SAAT_LIMA_RANGES[rangeIndex];

  return {
    ...meaning,
    id: `saat-lima-${name.toLowerCase().replace(/\s+/g, '-')}`,
    range: range.label,
    source: 'Saat Lima',
  };
}

function getSengkalaAlamPeriods(minuteOfDay: number): WayahPeriod[] {
  return SENGKALA_ALAM_PERIODS.filter((period) => isMinuteInRange(minuteOfDay, period.start, period.end)).map(
    (period) => ({
      id: period.id,
      name: period.name,
      level: period.level,
      range: period.range,
      source: 'Sengkala Alam',
      description: period.description,
    }),
  );
}

function getWorstQualityLevel(levels: readonly QualityLevel[]): QualityLevel {
  if (levels.includes('hindari')) return 'hindari';
  if (levels.includes('waspada')) return 'waspada';
  if (levels.includes('baik')) return 'baik';
  return 'netral';
}

export function assessWayah(params: { time: string; pasaran: PasaranName }): WayahAssessment {
  const minuteOfDay = parseTimeToMinutes(params.time);
  const saatLima = getSaatLimaPeriod(params.pasaran, minuteOfDay);
  const alam = getSengkalaAlamPeriods(minuteOfDay);
  const levels = [saatLima?.level, ...alam.map((period) => period.level)].filter(
    (level): level is QualityLevel => Boolean(level),
  );

  return {
    time: params.time,
    pasaran: params.pasaran,
    minuteOfDay,
    saatLima,
    alam,
    overallLevel: getWorstQualityLevel(levels),
  };
}

function sameWeton(weton: WetonInput, day: DayName, pasaran: PasaranName): boolean {
  return weton.day === day && weton.pasaran === pasaran;
}

function wetonLabel(weton: WetonInput): string {
  return `${weton.day} ${weton.pasaran}`;
}

function includesCurrentJavaneseDate(table: Record<JavaneseMonthName, readonly number[]>, date: JavaneseDateInfo) {
  return table[date.month].includes(date.day);
}

function warning(
  id: string,
  name: string,
  level: BadDayWarning['level'],
  scope: string,
  description: string,
): BadDayWarning {
  return {
    id,
    name,
    level,
    scope,
    description,
  };
}

export function assessEventDate(date: string): EventDateAssessment {
  const weton = wetonFromIsoDate(date);
  const javanese = javaneseDateFromIsoDate(date);
  const warnings: BadDayWarning[] = [];
  const wetonText = wetonLabel(weton);

  if (includesCurrentJavaneseDate(SANGARE_TANGGAL, javanese)) {
    warnings.push(
      warning(
        'sangare-tanggal',
        'Sangare Tanggal',
        'hindari',
        `${javanese.day} ${javanese.month}`,
        'Tanggal sangar untuk hajat besar, terutama pernikahan.',
      ),
    );
  }

  if (includesCurrentJavaneseDate(BANGAS_PADEWAN, javanese)) {
    warnings.push(
      warning(
        'bangas-padewan',
        'Bangas Padewan',
        'hindari',
        `${javanese.day} ${javanese.month}`,
        'Tanggal pantangan untuk hajatan karena dianggap panas dan rawan kesusahan.',
      ),
    );
  }

  if (includesCurrentJavaneseDate(NAASING_TANGGAL, javanese)) {
    warnings.push(
      warning(
        'naasing-tanggal',
        'Naasing Tanggal',
        'hindari',
        `${javanese.day} ${javanese.month}`,
        'Tanggal naas bulanan yang lazim dihindari untuk pesta pernikahan dan hajat lain.',
      ),
    );
  }

  if (DINO_OLO_DAYS[javanese.month].includes(weton.day)) {
    warnings.push(
      warning(
        'dino-olo',
        'Dino Olo',
        'waspada',
        `${weton.day} pada bulan ${javanese.month}`,
        'Hari kurang baik menurut kelompok bulan Jawa.',
      ),
    );
  }

  if (SANGARING_SASI_DAYS[javanese.month].includes(weton.day)) {
    warnings.push(
      warning(
        'sangaring-sasi',
        'Sangaring Sasi',
        'waspada',
        `${weton.day} pada bulan ${javanese.month}`,
        'Hari yang dianggap berat dalam bulan tersebut.',
      ),
    );
  }

  if (SUWUNG_ANGGARA_KASIH_MONTHS[javanese.yearName].includes(javanese.month)) {
    warnings.push(
      warning(
        'suwung-anggara-kasih',
        'Suwung Anggara Kasih',
        'waspada',
        `${javanese.month} tahun ${javanese.yearName}`,
        'Bulan ini tidak memiliki Anggara Kasih sehingga sering dianggap suwung untuk punya gawe.',
      ),
    );
  }

  for (const rule of TALIWANGKE_SASI_RULES) {
    if (sameWeton(weton, rule.day, rule.pasaran) && rule.months.includes(javanese.month)) {
      warnings.push(
        warning(
          'taliwangke-sasi',
          'Taliwangke Bulanan',
          'hindari',
          `${wetonText}, bulan ${javanese.month}`,
          'Kombinasi hari-pasaran dan bulan Jawa yang termasuk taliwangke.',
        ),
      );
    }
  }

  for (const rule of TALIWANGKE_WUKU_RULES) {
    if (sameWeton(weton, rule.day, rule.pasaran) && javanese.wuku === rule.wuku) {
      warnings.push(
        warning(
          'taliwangke-wuku',
          `Taliwangke Wuku ${rule.alias}`,
          'hindari',
          `${wetonText}, wuku ${javanese.wuku}`,
          'Dina sengkala dalam siklus 30 wuku.',
        ),
      );
    }
  }

  for (const rule of SAMPARWANGKE_WUKU_RULES) {
    if (sameWeton(weton, rule.day, rule.pasaran) && javanese.wuku === rule.wuku) {
      warnings.push(
        warning(
          'samparwangke-wuku',
          'Samparwangke',
          'hindari',
          `${wetonText}, wuku ${javanese.wuku}`,
          'Hari sengkala dalam siklus wuku yang biasa dihindari untuk keperluan besar.',
        ),
      );
    }
  }

  if (DINA_ALA_WETONS.has(wetonText)) {
    warnings.push(
      warning('dina-ala', 'Dina Ala', 'waspada', wetonText, 'Weton yang termasuk daftar hari kurang baik.'),
    );
  }

  if (DINA_ALA_BANGET_WETONS.has(wetonText)) {
    warnings.push(
      warning(
        'dina-ala-banget',
        'Dina Ala Banget',
        'hindari',
        wetonText,
        'Weton yang termasuk daftar hari buruk sekali.',
      ),
    );
  }

  if (weton.day === 'Minggu' && KALADITE_WUKU.has(javanese.wuku)) {
    warnings.push(
      warning(
        'kaladite',
        'Kaladite',
        'hindari',
        `${weton.day}, wuku ${javanese.wuku}`,
        'Hari angker pada wuku tertentu.',
      ),
    );
  }

  if (weton.day === 'Rabu' && SARIKAGUNG_WUKU.has(javanese.wuku)) {
    warnings.push(
      warning(
        'sarikagung',
        'Sarikagung',
        'hindari',
        `${weton.day}, wuku ${javanese.wuku}`,
        'Pantangan besar pada wuku tertentu.',
      ),
    );
  }

  if (javanese.wuku === 'Galungan' && DHENDHAN_KUKUDAN_DAYS.has(weton.day)) {
    warnings.push(
      warning(
        'dhendhan-kukudan',
        'Dhendhan Kukudan',
        'hindari',
        `${weton.day}, wuku Galungan`,
        'Hari yang dihindari karena berwatak banyak denda dan piutang.',
      ),
    );
  }

  const worstLevel = warnings.some((item) => item.level === 'hindari')
    ? 'hindari'
    : warnings.length > 0
      ? 'waspada'
      : 'baik';

  return {
    date,
    weton,
    javanese,
    warnings,
    worstLevel,
  };
}

export type RecommendedDate = {
  date: string;
  event: WetonInput;
  eventNeptu: number;
  totalNeptu: number;
  javanese: JavaneseDateInfo;
  hijri: HijriDateInfo;
  badDayWarnings: BadDayWarning[];
  result5: PetungResult;
  result8Couple: PetungResult;
};

export function findRecommendedEventDates(params: {
  male: WetonInput;
  female: WetonInput;
  startDate: string;
  rangeDays: number;
  targetRemainder5?: number;
  avoidBadDays?: boolean;
  limit?: number;
}): RecommendedDate[] {
  const target = params.targetRemainder5 ?? 3;
  const limit = params.limit ?? 20;
  const avoidBadDays = params.avoidBadDays ?? true;
  const results: RecommendedDate[] = [];

  for (let index = 0; index < params.rangeDays; index += 1) {
    const date = addDaysIso(params.startDate, index);
    const event = wetonFromIsoDate(date);
    const calculation = calculatePetung({ male: params.male, female: params.female, event });
    const result5 = calculation.eventResults.find((item) => item.divisor === 5);
    const assessment = assessEventDate(date);
    const hijri = hijriDateFromIsoDate(date);

    if (result5 && result5.remainder === target && (!avoidBadDays || assessment.warnings.length === 0)) {
      results.push({
        date,
        event,
        eventNeptu: calculation.eventNeptu,
        totalNeptu: calculation.totalNeptu,
        javanese: assessment.javanese,
        hijri,
        badDayWarnings: assessment.warnings,
        result5,
        result8Couple: calculation.coupleResult8,
      });
    }

    if (results.length >= limit) break;
  }

  return results;
}
