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

export const BETALJEMUR_SOURCE = 'Kitab Primbon Betaljemur Adammakna';

export const JAVANESE_MONTH_NEPTU: Record<JavaneseMonthName, number> = {
  Suro: 7,
  Sapar: 2,
  Mulud: 3,
  'Bakda Mulud': 5,
  'Jumadil Awal': 6,
  'Jumadil Akhir': 1,
  Rejeb: 2,
  Ruwah: 4,
  Pasa: 5,
  Sawal: 7,
  Sela: 1,
  Besar: 3,
};

export const JAVANESE_YEAR_NEPTU: Record<JavaneseYearName, number> = {
  Alip: 1,
  Ehe: 5,
  Jimawal: 3,
  Je: 7,
  Dal: 4,
  Be: 2,
  Wawu: 6,
  Jimakir: 3,
};

export type TiboMeaning = {
  name: string;
  level: 'baik' | 'netral' | 'waspada' | 'hindari';
  description: string;
};

export type QualityLevel = TiboMeaning['level'];

export type RemainderPairResult = {
  divisor: 9;
  maleRemainder: number;
  femaleRemainder: number;
  meaning: TiboMeaning;
  source: string;
};

export type CoupleDayResult = {
  maleDay: DayName;
  femaleDay: DayName;
  meaning: TiboMeaning;
  source: string;
};

export type BetaljemurMonthAdvice = {
  id: string;
  name: string;
  level: QualityLevel;
  scope: string;
  description: string;
  source: string;
};

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
  1: { name: 'Begja', level: 'baik', description: 'Baik menurut perhitungan suami istri No. 25 Betaljemur.' },
  2: { name: 'Lara', level: 'hindari', description: 'Tidak baik menurut perhitungan suami istri No. 25 Betaljemur.' },
  3: { name: 'Pati', level: 'hindari', description: 'Sangat jelek menurut perhitungan suami istri No. 25 Betaljemur.' },
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

export const BETALJEMUR_COUPLE_REMAINDER_9: Record<string, TiboMeaning> = {
  '1-1': { name: 'Saling mencintai', level: 'baik', description: 'Hubungan dinilai baik dan saling menguatkan.' },
  '1-2': { name: 'Baik', level: 'baik', description: 'Pasangan dinilai cocok menurut sisa 9.' },
  '1-3': { name: 'Kuat, rejeki jauh', level: 'waspada', description: 'Hubungan kuat, tetapi rezeki perlu diupayakan lebih jauh.' },
  '1-4': { name: 'Banyak celaka', level: 'hindari', description: 'Wataknya berat dan rawan banyak kesusahan.' },
  '1-5': { name: 'Bercerai', level: 'hindari', description: 'Rawan berpisah sehingga perlu sangat dipertimbangkan.' },
  '1-6': { name: 'Sulit penghidupan', level: 'waspada', description: 'Penghidupan rumah tangga dinilai tidak ringan.' },
  '1-7': { name: 'Banyak musuh', level: 'waspada', description: 'Rawan tekanan dari luar atau pertentangan.' },
  '1-8': { name: 'Sengsara', level: 'hindari', description: 'Tafsirnya berat untuk ketenteraman rumah tangga.' },
  '1-9': { name: 'Tempat berlindung', level: 'baik', description: 'Pasangan menjadi sandaran dan tempat pulang.' },
  '2-2': { name: 'Selamat, rejeki banyak', level: 'baik', description: 'Baik untuk keselamatan dan kelapangan rezeki.' },
  '2-3': { name: 'Salah satu mendahului', level: 'hindari', description: 'Tafsirnya berat karena rawan kehilangan pasangan.' },
  '2-4': { name: 'Banyak godaan', level: 'waspada', description: 'Hubungan perlu dijaga dari gangguan dan cobaan.' },
  '2-5': { name: 'Banyak celaka', level: 'hindari', description: 'Wataknya berat dan rawan banyak kesusahan.' },
  '2-6': { name: 'Cepat kaya', level: 'baik', description: 'Baik untuk pertumbuhan rezeki keluarga.' },
  '2-7': { name: 'Anak rawan celaka', level: 'hindari', description: 'Tafsir keturunan dinilai berat dalam pakem ini.' },
  '2-8': { name: 'Murah rejeki', level: 'baik', description: 'Rezeki dinilai mudah mengalir.' },
  '2-9': { name: 'Banyak rejeki', level: 'baik', description: 'Baik untuk kelapangan ekonomi keluarga.' },
  '3-3': { name: 'Melarat', level: 'hindari', description: 'Rawan kesulitan ekonomi.' },
  '3-4': { name: 'Banyak celaka', level: 'hindari', description: 'Wataknya berat dan rawan banyak kesusahan.' },
  '3-5': { name: 'Cepat bercerai', level: 'hindari', description: 'Rawan cepat berpisah.' },
  '3-6': { name: 'Mendapat anugerah', level: 'baik', description: 'Baik karena dianggap membawa pemberian atau berkah.' },
  '3-7': { name: 'Banyak celaka', level: 'hindari', description: 'Wataknya berat dan rawan banyak kesusahan.' },
  '3-8': { name: 'Salah satu mendahului', level: 'hindari', description: 'Tafsirnya berat karena rawan kehilangan pasangan.' },
  '3-9': { name: 'Banyak rejeki', level: 'baik', description: 'Baik untuk kelapangan ekonomi keluarga.' },
  '4-4': { name: 'Sering sakit', level: 'waspada', description: 'Perlu perhatian pada kesehatan dan ketahanan keluarga.' },
  '4-5': { name: 'Banyak godaan', level: 'waspada', description: 'Hubungan perlu dijaga dari gangguan dan cobaan.' },
  '4-6': { name: 'Banyak rejeki', level: 'baik', description: 'Baik untuk kelapangan ekonomi keluarga.' },
  '4-7': { name: 'Melarat', level: 'hindari', description: 'Rawan kesulitan ekonomi.' },
  '4-8': { name: 'Banyak rintangan', level: 'waspada', description: 'Perjalanan rumah tangga dinilai banyak hambatan.' },
  '4-9': { name: 'Salah satu kalah', level: 'waspada', description: 'Rawan ketimpangan atau salah satu pihak sering mengalah.' },
  '5-5': { name: 'Keberuntungan terus', level: 'baik', description: 'Baik karena dinilai membawa keberuntungan berulang.' },
  '5-6': { name: 'Murah rejeki', level: 'baik', description: 'Rezeki dinilai mudah mengalir.' },
  '5-7': { name: 'Pencaharian tetap', level: 'baik', description: 'Mata pencaharian dinilai terus tersedia.' },
  '5-8': { name: 'Banyak rintangan', level: 'waspada', description: 'Perjalanan rumah tangga dinilai banyak hambatan.' },
  '5-9': { name: 'Murah rejeki', level: 'baik', description: 'Rezeki dinilai mudah mengalir.' },
  '6-6': { name: 'Banyak celaka', level: 'hindari', description: 'Wataknya berat dan rawan banyak kesusahan.' },
  '6-7': { name: 'Rukun tenteram', level: 'baik', description: 'Baik untuk kedamaian rumah tangga.' },
  '6-8': { name: 'Banyak musuh', level: 'waspada', description: 'Rawan tekanan dari luar atau pertentangan.' },
  '6-9': { name: 'Sengsara', level: 'hindari', description: 'Tafsirnya berat untuk ketenteraman rumah tangga.' },
  '7-7': { name: 'Terkukung', level: 'waspada', description: 'Rawan dominasi dalam rumah tangga; perlu saling mengimbangi.' },
  '7-8': { name: 'Terhalang diri sendiri', level: 'waspada', description: 'Hambatan utama dinilai datang dari sikap atau keputusan sendiri.' },
  '7-9': { name: 'Perjodohan kekal', level: 'baik', description: 'Baik untuk kelanggengan pasangan.' },
  '8-8': { name: 'Dicintai orang', level: 'baik', description: 'Dinilai mendapat simpati dan penerimaan dari sekitar.' },
  '8-9': { name: 'Banyak celaka', level: 'hindari', description: 'Wataknya berat dan rawan banyak kesusahan.' },
  '9-9': { name: 'Susah rejeki', level: 'hindari', description: 'Rawan kesulitan dalam urusan rezeki.' },
};

export const BETALJEMUR_DAY_PAIR_RESULTS: Record<string, TiboMeaning> = {
  'Minggu-Minggu': { name: 'Sering sakit', level: 'waspada', description: 'Perlu perhatian pada kesehatan dan ketahanan keluarga.' },
  'Minggu-Senin': { name: 'Banyak penyakit', level: 'waspada', description: 'Tafsirnya berat pada sisi kesehatan.' },
  'Minggu-Selasa': { name: 'Miskin', level: 'hindari', description: 'Rawan kesulitan ekonomi.' },
  'Minggu-Rabu': { name: 'Yuwana', level: 'baik', description: 'Selamat dan tetap baik meski ada pembicaraan orang.' },
  'Minggu-Kamis': { name: 'Bertengkar', level: 'waspada', description: 'Rawan perselisihan.' },
  'Minggu-Jumat': { name: 'Yuwana', level: 'baik', description: 'Selamat dan tetap baik meski ada pembicaraan orang.' },
  'Minggu-Sabtu': { name: 'Miskin', level: 'hindari', description: 'Rawan kesulitan ekonomi.' },
  'Senin-Senin': { name: 'Tidak baik', level: 'hindari', description: 'Pasangan hari ini dinilai kurang baik.' },
  'Senin-Selasa': { name: 'Yuwana', level: 'baik', description: 'Selamat dan tetap baik meski ada pembicaraan orang.' },
  'Senin-Rabu': { name: 'Anaknya wanita', level: 'netral', description: 'Tafsirnya lebih berupa penanda keturunan daripada pantangan.' },
  'Senin-Kamis': { name: 'Dicintai orang banyak', level: 'baik', description: 'Baik untuk penerimaan sosial keluarga.' },
  'Senin-Jumat': { name: 'Yuwana', level: 'baik', description: 'Selamat dan tetap baik meski ada pembicaraan orang.' },
  'Senin-Sabtu': { name: 'Berekat', level: 'baik', description: 'Selalu cukup meski pendapatan tidak besar.' },
  'Selasa-Selasa': { name: 'Tidak baik', level: 'hindari', description: 'Pasangan hari ini dinilai kurang baik.' },
  'Selasa-Rabu': { name: 'Kaya', level: 'baik', description: 'Baik untuk kelapangan harta.' },
  'Selasa-Kamis': { name: 'Kaya', level: 'baik', description: 'Baik untuk kelapangan harta.' },
  'Selasa-Jumat': { name: 'Bercerai', level: 'hindari', description: 'Rawan berpisah.' },
  'Selasa-Sabtu': { name: 'Sering bertengkar', level: 'waspada', description: 'Rawan perselisihan berulang.' },
  'Rabu-Rabu': { name: 'Tidak baik', level: 'hindari', description: 'Pasangan hari ini dinilai kurang baik.' },
  'Rabu-Kamis': { name: 'Yuwana', level: 'baik', description: 'Selamat dan tetap baik meski ada pembicaraan orang.' },
  'Rabu-Jumat': { name: 'Yuwana', level: 'baik', description: 'Selamat dan tetap baik meski ada pembicaraan orang.' },
  'Rabu-Sabtu': { name: 'Baik', level: 'baik', description: 'Pasangan hari ini dinilai baik.' },
  'Kamis-Kamis': { name: 'Yuwana', level: 'baik', description: 'Selamat dan tetap baik meski ada pembicaraan orang.' },
  'Kamis-Jumat': { name: 'Yuwana', level: 'baik', description: 'Selamat dan tetap baik meski ada pembicaraan orang.' },
  'Kamis-Sabtu': { name: 'Bercerai', level: 'hindari', description: 'Rawan berpisah.' },
  'Jumat-Jumat': { name: 'Miskin', level: 'hindari', description: 'Rawan kesulitan ekonomi.' },
  'Jumat-Sabtu': { name: 'Celaka', level: 'hindari', description: 'Tafsirnya berat dan rawan kesusahan.' },
  'Sabtu-Sabtu': { name: 'Tidak baik', level: 'hindari', description: 'Pasangan hari ini dinilai kurang baik.' },
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

export type EventRecommendationMode = 'temuKeluarga' | 'lamaran' | 'lamaranKetat' | 'akadNikah' | 'tarub';

export type RecommendationReason = {
  id: string;
  name: string;
  level: QualityLevel;
  scope: string;
  description: string;
};

export type AkadDayAdvice = {
  occurrence: number;
  options: RecommendationReason[];
};

export type TravelSlot = {
  source: 'No.145' | 'No.146';
  name: string;
  range: string;
  level: QualityLevel;
  description: string;
};

export type TravelDepartureAssessment = {
  weton: WetonInput;
  neptu: number;
  tibo: RecommendationReason;
  kalaDirection: string;
  slots145: TravelSlot[];
  slots146Day: TravelSlot[];
};

export type EventDateAssessment = {
  date: string;
  weton: WetonInput;
  javanese: JavaneseDateInfo;
  monthNeptu: number;
  yearNeptu: number;
  monthAdvices: BetaljemurMonthAdvice[];
  warnings: BadDayWarning[];
  worstLevel: Exclude<QualityLevel, 'netral'>;
};

export type WayahPeriod = {
  id: string;
  name: string;
  level: QualityLevel;
  range: string;
  source: 'Saat Lima' | 'Saat Ijab Betaljemur' | 'Sengkala Alam';
  description: string;
};

export type WayahAssessment = {
  time: string;
  pasaran: PasaranName;
  javaneseDay?: number;
  minuteOfDay: number;
  saatLima: WayahPeriod | null;
  ijab: WayahPeriod | null;
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

const SANGARE_KEPERLUAN_PENTING_TANGGAL: Record<JavaneseMonthName, readonly number[]> = {
  Suro: [17, 27, 11, 14],
  Sapar: [12, 22, 1, 20],
  Mulud: [13, 23, 10, 15],
  'Bakda Mulud': [15, 25, 10, 20],
  'Jumadil Awal': [16, 26, 10, 11],
  'Jumadil Akhir': [11, 21, 3, 14],
  Rejeb: [2, 22, 11, 21],
  Ruwah: [14, 24, 19, 28],
  Pasa: [15, 25, 10, 20],
  Sawal: [17, 27, 2, 20],
  Sela: [11, 21, 6, 12],
  Besar: [13, 23, 1, 20],
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

const KUNARPAWARSA_RULES: Record<JavaneseYearName, WetonInput> = {
  Alip: { day: 'Sabtu', pasaran: 'Pahing' },
  Ehe: { day: 'Kamis', pasaran: 'Pahing' },
  Jimawal: { day: 'Senin', pasaran: 'Legi' },
  Je: { day: 'Jumat', pasaran: 'Legi' },
  Dal: { day: 'Rabu', pasaran: 'Kliwon' },
  Be: { day: 'Minggu', pasaran: 'Wage' },
  Wawu: { day: 'Kamis', pasaran: 'Pon' },
  Jimakir: { day: 'Selasa', pasaran: 'Pon' },
};

const SANGARWARSA_RULES: Record<JavaneseYearName, WetonInput> = {
  Alip: { day: 'Jumat', pasaran: 'Legi' },
  Ehe: { day: 'Selasa', pasaran: 'Kliwon' },
  Jimawal: { day: 'Minggu', pasaran: 'Kliwon' },
  Je: { day: 'Kamis', pasaran: 'Wage' },
  Dal: { day: 'Senin', pasaran: 'Pon' },
  Be: { day: 'Sabtu', pasaran: 'Legi' },
  Wawu: { day: 'Rabu', pasaran: 'Pahing' },
  Jimakir: { day: 'Minggu', pasaran: 'Legi' },
};

const BETALJEMUR_YEAR_MONTH_RULES: Record<
  JavaneseYearName,
  { good: readonly JavaneseMonthName[]; bad: readonly JavaneseMonthName[] }
> = {
  Alip: { good: ['Suro'], bad: ['Pasa', 'Sela'] },
  Ehe: { good: ['Sapar', 'Jumadil Akhir', 'Rejeb', 'Ruwah', 'Sawal'], bad: ['Bakda Mulud', 'Pasa', 'Sela', 'Besar'] },
  Jimawal: { good: ['Rejeb', 'Ruwah', 'Sawal'], bad: ['Suro', 'Sapar', 'Mulud', 'Jumadil Awal', 'Besar'] },
  Je: {
    good: ['Bakda Mulud', 'Jumadil Awal', 'Jumadil Akhir', 'Rejeb', 'Ruwah', 'Pasa', 'Besar'],
    bad: ['Suro', 'Sapar', 'Mulud', 'Sawal', 'Sela'],
  },
  Dal: { good: ['Jumadil Akhir', 'Rejeb', 'Pasa', 'Sawal'], bad: ['Sapar', 'Mulud', 'Ruwah', 'Sela'] },
  Be: { good: ['Jumadil Akhir', 'Besar'], bad: ['Suro', 'Sapar', 'Rejeb'] },
  Wawu: { good: ['Sapar', 'Mulud', 'Bakda Mulud', 'Jumadil Awal', 'Pasa'], bad: ['Suro', 'Sawal', 'Sela', 'Besar'] },
  Jimakir: { good: ['Mulud', 'Jumadil Awal', 'Rejeb', 'Ruwah', 'Sawal', 'Besar'], bad: ['Suro', 'Sela'] },
};

const PANTANGAN_BULAN_RULES: Record<
  JavaneseYearName,
  { months: readonly JavaneseMonthName[]; consequence: string }
> = {
  Alip: { months: ['Jumadil Akhir', 'Sela'], consequence: 'rawan sakit atau terkena racun' },
  Ehe: { months: ['Mulud', 'Pasa'], consequence: 'rawan sakit tulang' },
  Jimawal: { months: ['Mulud', 'Besar'], consequence: 'rawan musibah air' },
  Je: { months: ['Suro', 'Sawal'], consequence: 'rawan sakit berat' },
  Dal: { months: ['Ruwah'], consequence: 'rawan demam atau panas' },
  Be: { months: ['Sapar', 'Rejeb'], consequence: 'rawan perkara besar' },
  Wawu: { months: ['Jumadil Awal'], consequence: 'rawan sakit kepala' },
  Jimakir: { months: ['Suro', 'Sela'], consequence: 'rawan gangguan ingatan' },
};

const BETALJEMUR_MONTH_CHARACTER: Record<
  JavaneseMonthName,
  Omit<BetaljemurMonthAdvice, 'id' | 'scope' | 'source'>
> = {
  Suro: {
    name: 'Watak Bulan Suro',
    level: 'hindari',
    description: 'Tidak dianjurkan untuk hajat nikah karena rawan kesukaran dan pertengkaran.',
  },
  Sapar: {
    name: 'Watak Bulan Sapar',
    level: 'waspada',
    description: 'Boleh dipakai, tetapi dinilai rawan kekurangan dan banyak utang.',
  },
  Mulud: {
    name: 'Watak Bulan Mulud',
    level: 'hindari',
    description: 'Tidak dianjurkan untuk hajat nikah karena tafsirnya berat bagi salah satu pasangan.',
  },
  'Bakda Mulud': {
    name: 'Watak Bulan Bakda Mulud',
    level: 'waspada',
    description: 'Boleh dipakai, tetapi rawan menjadi bahan pembicaraan dan celaan.',
  },
  'Jumadil Awal': {
    name: 'Watak Bulan Jumadil Awal',
    level: 'waspada',
    description: 'Boleh dipakai, tetapi rawan tertipu, kehilangan, dan banyak lawan.',
  },
  'Jumadil Akhir': {
    name: 'Watak Bulan Jumadil Akhir',
    level: 'baik',
    description: 'Baik untuk kelapangan harta benda.',
  },
  Rejeb: {
    name: 'Watak Bulan Rejeb',
    level: 'baik',
    description: 'Baik untuk keselamatan dan keturunan.',
  },
  Ruwah: {
    name: 'Watak Bulan Ruwah',
    level: 'baik',
    description: 'Baik untuk keselamatan dan kedamaian.',
  },
  Pasa: {
    name: 'Watak Bulan Pasa',
    level: 'hindari',
    description: 'Tidak dianjurkan karena tafsirnya rawan celaka besar.',
  },
  Sawal: {
    name: 'Watak Bulan Sawal',
    level: 'waspada',
    description: 'Boleh dipakai, tetapi rawan kekurangan dan utang.',
  },
  Sela: {
    name: 'Watak Bulan Sela',
    level: 'hindari',
    description: 'Tidak dianjurkan karena rawan sakit dan pertengkaran.',
  },
  Besar: {
    name: 'Watak Bulan Besar',
    level: 'baik',
    description: 'Baik untuk kelapangan rezeki dan kebahagiaan.',
  },
};

const BETALJEMUR_RAHAYU_DAY_RULES: readonly {
  months: readonly JavaneseMonthName[];
  days: readonly DayName[];
}[] = [
  { months: ['Besar', 'Suro', 'Sapar'], days: ['Rabu', 'Kamis'] },
  { months: ['Mulud', 'Bakda Mulud', 'Jumadil Awal'], days: ['Jumat'] },
  { months: ['Jumadil Akhir', 'Rejeb', 'Ruwah'], days: ['Sabtu', 'Minggu'] },
  { months: ['Pasa', 'Sawal', 'Sela'], days: ['Senin', 'Selasa'] },
];

const BETALJEMUR_SARJU_DAY_RULES: readonly {
  months: readonly JavaneseMonthName[];
  days: readonly DayName[];
}[] = [
  { months: ['Besar', 'Suro', 'Sapar'], days: ['Jumat'] },
  { months: ['Mulud', 'Bakda Mulud', 'Jumadil Awal'], days: ['Sabtu', 'Minggu'] },
  { months: ['Jumadil Akhir', 'Rejeb', 'Ruwah'], days: ['Senin', 'Selasa'] },
  { months: ['Pasa', 'Sawal', 'Sela'], days: ['Rabu', 'Kamis'] },
];

const KEJADIAN_NABI_DATES: Partial<Record<JavaneseMonthName, { day: number; event: string }>> = {
  Suro: { day: 13, event: 'peristiwa Nabi Ibrahim' },
  Mulud: { day: 3, event: 'peristiwa Nabi Adam' },
  'Bakda Mulud': { day: 16, event: 'peristiwa Nabi Yusuf' },
  'Jumadil Awal': { day: 5, event: 'peristiwa Nabi Nuh' },
  Pasa: { day: 21, event: 'peristiwa Nabi Musa' },
  Sela: { day: 24, event: 'peristiwa Nabi Yunus' },
  Besar: { day: 25, event: 'peristiwa Nabi Muhammad' },
};

const AKAD_DAY_GOOD_NAMES = new Set([
  'Harja',
  'Beruntung',
  'Berbahagia',
  'Tercapai maksudnya',
  'Mendapat sahabat',
  'Banyak senang',
  'Mendapat kesenangan',
  'Makmur',
  'Senang',
  'Minta dihormat',
]);

const AKAD_DAY_NEUTRAL_NAMES = new Set(['Mendapat sahabat', 'Minta dihormat', 'Sering dikerumungi orang']);

const AKAD_DAY_TABLES: readonly Record<DayName, readonly string[]>[] = [
  {
    Jumat: ['Harja', 'Musuh Allah', 'Pati', 'Beruntung', 'Mendapat sahabat'],
    Sabtu: ['Serba tak tercapai', 'Musuh Allah', 'Besar nafsunya', 'Harja', 'Beruntung'],
    Minggu: ['Serba tak tercapai', 'Harja', 'Pati', 'Berbahagia', 'Berdosa besar'],
    Senin: ['Musuh Allah', 'Harja', 'Sering mendapatkan hal yang tidak menyenangkan', 'Beruntung', 'Aral Melintang'],
    Selasa: ['Serba tak tercapai', 'Musuh Allah', 'Berdosa besar', 'Harja', 'Aral Melintang'],
    Rabu: ['Serba tak tercapai', 'Harja', 'Pati', 'Senang', 'Sering mendapatkan hal yang tidak menyenangkan'],
    Kamis: ['Serba tak tercapai', 'Musuh Allah', 'Harja', 'Minta dihormat', 'Berdosa besar'],
  },
  {
    Jumat: ['Harja', 'Musuh Allah', 'Pati', 'Tercapai maksudnya', 'Harja'],
    Sabtu: ['Musuh Allah', 'Serba tak tercapai', 'Banyak senang', 'Beruntung', 'Harja'],
    Minggu: ['Serba tak tercapai', 'Harja', 'Musuh Allah', 'Beruntung', 'Harja'],
    Senin: ['Serba tak tercapai', 'Harja', 'Banyak senang', 'Musuh Allah', 'Mendapat kesenangan'],
    Selasa: ['Serba tak tercapai', 'Banyak senang', 'Sering mendapatkan hal yang tidak menyenangkan', 'Harja', 'Makmur'],
    Rabu: ['Banyak senang', 'Harja', 'Pati', 'Harja', 'Musuh Allah'],
    Kamis: ['Serba tak tercapai', 'Musuh Allah', 'Harja', 'Mendapat sahabat', 'Pati'],
  },
  {
    Jumat: ['Harja', 'Musuh Allah', 'Rintangan Besar', 'Pati', 'Harja'],
    Sabtu: ['Musuh Allah', 'Serba tak tercapai', 'Murka', 'Harja', 'Harja'],
    Minggu: ['Serba tak tercapai', 'Harja', 'Susah', 'Harja', 'Harja'],
    Senin: ['Serba tak tercapai', 'Harja', 'Susah', 'Harja', 'Musuh Allah'],
    Selasa: ['Musuh Allah', 'Serba tak tercapai', 'Sering mendapatkan hal yang tidak menyenangkan', 'Harja', 'Pati'],
    Rabu: ['Kikir', 'Harja', 'Pati', 'Harja', 'Musuh Allah'],
    Kamis: ['Serba tak tercapai', 'Musuh Allah', 'Harja', 'Sering dikerumungi orang', 'Musuh Allah'],
  },
];

const TARUB_NEPTU_MEANINGS: Record<number, RecommendationReason> = {
  7: {
    id: 'tarub-neptu',
    name: 'Aman tenteram',
    level: 'baik',
    scope: 'Neptu 7',
    description: 'No.39: baik untuk memasang tarub.',
  },
  8: {
    id: 'tarub-neptu',
    name: 'Siluman pria',
    level: 'hindari',
    scope: 'Neptu 8',
    description: 'No.39: tidak baik untuk memasang tarub.',
  },
  9: {
    id: 'tarub-neptu',
    name: 'Dodok Atung',
    level: 'hindari',
    scope: 'Neptu 9',
    description: 'No.39: tidak baik untuk memasang tarub.',
  },
  10: {
    id: 'tarub-neptu',
    name: 'Temen dan Luhur',
    level: 'baik',
    scope: 'Neptu 10',
    description: 'No.39: baik untuk memasang tarub.',
  },
  11: {
    id: 'tarub-neptu',
    name: 'Siluman wanita',
    level: 'hindari',
    scope: 'Neptu 11',
    description: 'No.39: tidak baik untuk memasang tarub.',
  },
  12: {
    id: 'tarub-neptu',
    name: 'Bencana',
    level: 'hindari',
    scope: 'Neptu 12',
    description: 'No.39: tidak baik untuk memasang tarub.',
  },
  13: {
    id: 'tarub-neptu',
    name: 'Aman tenteram',
    level: 'baik',
    scope: 'Neptu 13',
    description: 'No.39: baik untuk memasang tarub.',
  },
  14: {
    id: 'tarub-neptu',
    name: 'Siluman pria',
    level: 'hindari',
    scope: 'Neptu 14',
    description: 'No.39: tidak baik untuk memasang tarub.',
  },
  15: {
    id: 'tarub-neptu',
    name: 'Dodok Atung',
    level: 'hindari',
    scope: 'Neptu 15',
    description: 'No.39: tidak baik untuk memasang tarub.',
  },
  16: {
    id: 'tarub-neptu',
    name: 'Temen dan Luhur',
    level: 'baik',
    scope: 'Neptu 16',
    description: 'No.39: baik untuk memasang tarub.',
  },
  17: {
    id: 'tarub-neptu',
    name: 'Siluman wanita',
    level: 'hindari',
    scope: 'Neptu 17',
    description: 'No.39: tidak baik untuk memasang tarub.',
  },
  18: {
    id: 'tarub-neptu',
    name: 'Bencana',
    level: 'hindari',
    scope: 'Neptu 18',
    description: 'No.39: tidak baik untuk memasang tarub.',
  },
};

const TARUB_GOOD_DATES_NO40 = new Set([4, 9, 14, 19, 24, 29]);
const TARUB_GOOD_DATES_NO41 = new Set([3, 4, 10, 11, 17, 18, 24, 25]);

const TRAVEL_NO141: Record<number, { tibo: string; level: QualityLevel; kalaDirection: string; description: string }> = {
  7: {
    tibo: 'Watu',
    level: 'waspada',
    kalaDirection: 'Barat Daya',
    description: 'Kurang utama untuk bepergian jauh menurut No.141.',
  },
  8: {
    tibo: 'Gajah',
    level: 'baik',
    kalaDirection: 'Barat Daya',
    description: 'Baik untuk bepergian jauh menurut No.141.',
  },
  9: {
    tibo: 'Baya',
    level: 'hindari',
    kalaDirection: 'Barat Laut',
    description: 'Tidak baik untuk bepergian jauh menurut No.141.',
  },
  10: {
    tibo: 'Ratu',
    level: 'baik',
    kalaDirection: 'Timur Laut',
    description: 'Baik untuk bepergian jauh menurut No.141.',
  },
  11: {
    tibo: 'Suku',
    level: 'waspada',
    kalaDirection: 'Timur',
    description: 'Kurang utama untuk bepergian jauh menurut No.141.',
  },
  12: {
    tibo: 'Watu',
    level: 'waspada',
    kalaDirection: 'Tenggara',
    description: 'Kurang utama untuk bepergian jauh menurut No.141.',
  },
  13: {
    tibo: 'Gajah',
    level: 'baik',
    kalaDirection: 'Barat Daya',
    description: 'Baik untuk bepergian jauh menurut No.141.',
  },
  14: {
    tibo: 'Baya',
    level: 'hindari',
    kalaDirection: 'Barat Laut',
    description: 'Tidak baik untuk bepergian jauh menurut No.141.',
  },
  15: {
    tibo: 'Ratu',
    level: 'baik',
    kalaDirection: 'Timur',
    description: 'Baik untuk bepergian jauh menurut No.141.',
  },
  16: {
    tibo: 'Suku',
    level: 'waspada',
    kalaDirection: 'Timur',
    description: 'Kurang utama untuk bepergian jauh menurut No.141.',
  },
  17: {
    tibo: 'Watu',
    level: 'waspada',
    kalaDirection: 'Tenggara',
    description: 'Kurang utama untuk bepergian jauh menurut No.141.',
  },
  18: {
    tibo: 'Gajah',
    level: 'baik',
    kalaDirection: 'Barat Laut',
    description: 'Baik untuk bepergian jauh menurut No.141.',
  },
};

const TRAVEL_NO145_SLOTS: Record<number, readonly Omit<TravelSlot, 'source' | 'level'>[]> = {
  7: [{ name: 'Lingsir kulon', range: '14.00 - 16.30', description: 'Saat baik No.145 untuk neptu 7.' }],
  8: [
    { name: 'Pagi', range: '06.00 - 08.00', description: 'Saat baik No.145 untuk neptu 8.' },
    { name: 'Lingsir wetan', range: '08.00 - 10.00', description: 'Saat baik No.145 untuk neptu 8.' },
    { name: 'Tengange', range: '11.00 - 12.00', description: 'Saat baik No.145 untuk neptu 8.' },
  ],
  9: [{ name: 'Tengange', range: '11.00 - 12.00', description: 'Saat baik No.145 untuk neptu 9.' }],
  10: [
    { name: 'Pagi', range: '06.00 - 08.00', description: 'Saat baik No.145 untuk neptu 10.' },
    { name: 'Sore', range: '15.00 - 18.00', description: 'Saat baik No.145 untuk neptu 10.' },
  ],
  11: [
    { name: 'Lingsir wetan', range: '08.00 - 10.00', description: 'Saat baik No.145 untuk neptu 11.' },
    { name: 'Tengange', range: '11.00 - 12.00', description: 'Saat baik No.145 untuk neptu 11.' },
  ],
  12: [
    { name: 'Pagi', range: '06.00 - 08.00', description: 'Saat baik No.145 untuk neptu 12.' },
    { name: 'Sore', range: '15.00 - 18.00', description: 'Saat baik No.145 untuk neptu 12.' },
  ],
  13: [
    { name: 'Pagi', range: '06.00 - 08.00', description: 'Saat baik No.145 untuk neptu 13.' },
    { name: 'Tengange', range: '11.00 - 12.00', description: 'Saat baik No.145 untuk neptu 13.' },
  ],
  14: [
    { name: 'Lingsir wetan', range: '08.00 - 10.00', description: 'Saat baik No.145 untuk neptu 14.' },
    { name: 'Tengange', range: '11.00 - 12.00', description: 'Saat baik No.145 untuk neptu 14.' },
  ],
  15: [
    { name: 'Pagi', range: '06.00 - 08.00', description: 'Saat baik No.145 untuk neptu 15.' },
    { name: 'Sore', range: '15.00 - 18.00', description: 'Saat baik No.145 untuk neptu 15.' },
  ],
  16: [{ name: 'Lingsir wetan', range: '08.00 - 10.00', description: 'Saat baik No.145 untuk neptu 16.' }],
  17: [
    { name: 'Lingsir kulon', range: '14.00 - 16.30', description: 'Saat baik No.145 untuk neptu 17.' },
    { name: 'Sore', range: '15.00 - 18.00', description: 'Saat baik No.145 untuk neptu 17.' },
  ],
  18: [
    { name: 'Pagi', range: '06.00 - 08.00', description: 'Saat baik No.145 untuk neptu 18.' },
    { name: 'Lingsir wetan', range: '08.00 - 10.00', description: 'Saat baik No.145 untuk neptu 18.' },
  ],
};

const TRAVEL_NO146_DAY_TABLE: Record<number, readonly string[]> = {
  7: ['Sampar', 'Srilungguh', 'Pacak', 'Pacak', 'Ayu'],
  8: ['Sampar', 'Srilungguh', 'Kala penganten', 'Ayu', 'Ayu'],
  9: ['Sampar', 'Ayu', 'Sampar', 'Kala penganten', 'Srigumelar'],
  10: ['Sampar', 'Srilungguh', 'Srilungguh', 'Pacak', 'Ayu'],
  11: ['Kalaluweng', 'Pacak', 'Ayu', 'Sampar', 'Srilungguh'],
  12: ['Srigumelar', 'Kala penganten', 'Sampar', 'Ayu', 'Srilungguh'],
  13: ['Pacak', 'Ayu', 'Sampar', 'Srilungguh', 'Srilungguh'],
  14: ['Ayu', 'Sampar', 'Srilungguh', 'Srigumelar', 'Kala penganten'],
  15: ['Ayu', 'Sampar', 'Srilungguh', 'Srigumelar', 'Pacak'],
  16: ['Srigumelar', 'Ayu', 'Ayu', 'Sampar', 'Pacak'],
  17: ['Ayu', 'Sampar', 'Kala penganten', 'Srigumelar', 'Srigumelar'],
  18: ['Srigumelar', 'Pacak', 'Pacak', 'Ayu', 'Sampar'],
};

const TRAVEL_NO146_DAY_RANGES = [
  { name: 'Pagi', range: '06.00 - 08.00' },
  { name: 'Wisang garu', range: '08.00 - 11.00' },
  { name: 'Bedug', range: '11.00 - 13.00' },
  { name: 'Lingsir', range: '13.00 - 15.00' },
  { name: 'Sore', range: '15.00 - 18.00' },
] as const;

const TRAVEL_GOOD_SLOT_NAMES = new Set(['Ayu', 'Srilungguh', 'Srigumelar']);

const SAAT_LIMA_RANGES = [
  { start: 6 * 60, end: 8 * 60 + 24, label: '06.00 - 08.23' },
  { start: 8 * 60 + 24, end: 10 * 60 + 48, label: '08.24 - 10.47' },
  { start: 10 * 60 + 48, end: 13 * 60 + 12, label: '10.48 - 13.11' },
  { start: 13 * 60 + 12, end: 15 * 60 + 36, label: '13.12 - 15.35' },
  { start: 15 * 60 + 36, end: 18 * 60, label: '15.36 - 17.59' },
] as const;

const SAAT_LIMA_BY_PASARAN: Record<PasaranName, readonly string[]> = {
  Legi: ['Pitutur', 'Rejeki', 'Slamet', 'Pangkalan', 'Pacak Wesi'],
  Pahing: ['Rejeki', 'Slamet', 'Pangkalan', 'Pacak Wesi', 'Pitutur'],
  Pon: ['Slamet', 'Pangkalan', 'Pacak Wesi', 'Pitutur', 'Rejeki'],
  Wage: ['Pangkalan', 'Pacak Wesi', 'Pitutur', 'Rejeki', 'Slamet'],
  Kliwon: ['Pacak Wesi', 'Pitutur', 'Rejeki', 'Slamet', 'Pangkalan'],
};

const SAAT_LIMA_MEANINGS: Record<string, Omit<WayahPeriod, 'id' | 'range' | 'source'>> = {
  Rejeki: {
    name: 'Rejeki',
    level: 'baik',
    description: 'Baik untuk berdagang, mencari modal, menagih, membuka usaha, atau menutup transaksi.',
  },
  Slamet: {
    name: 'Slamet',
    level: 'baik',
    description: 'Baik untuk akad, lamaran, perjalanan, pindahan, dan urusan yang membutuhkan rahayu.',
  },
  Pitutur: {
    name: 'Pitutur',
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

const SAAT_IJAB_DATE_NAMES: readonly (readonly string[])[] = [
  ['Ahmad', 'Jibrail', 'Ibrahim', 'Yusup', 'Israil'],
  ['Jibrail', 'Ibrahim', 'Yusup', 'Israil', 'Ahmad'],
  ['Ibrahim', 'Yusup', 'Israil', 'Ahmad', 'Jibrail'],
  ['Yusup', 'Israil', 'Ahmad', 'Jibrail', 'Ibrahim'],
  ['Israil', 'Ahmad', 'Jibrail', 'Ibrahim', 'Yusup'],
];

const SAAT_IJAB_TIBO_MEANINGS: Record<string, Omit<WayahPeriod, 'id' | 'range' | 'source'>> = {
  Slamet: {
    name: 'Slamet',
    level: 'baik',
    description: 'Saat terbaik untuk ijab menurut Betaljemur.',
  },
  Rejeki: {
    name: 'Rejeki',
    level: 'baik',
    description: 'Saat cukup baik untuk ijab, terutama jika Slamet tidak tersedia.',
  },
  Pitutur: {
    name: 'Pitutur',
    level: 'hindari',
    description: 'Untuk ijab dinilai kurang baik; Betaljemur menganjurkan memilih Slamet atau Rejeki.',
  },
  'Pacak Wesi': {
    name: 'Pacak Wesi',
    level: 'hindari',
    description: 'Untuk ijab dinilai kurang baik; Betaljemur menganjurkan memilih Slamet atau Rejeki.',
  },
  Pangkalan: {
    name: 'Pangkalan',
    level: 'hindari',
    description: 'Untuk ijab dinilai kurang baik dan sebaiknya dihindari.',
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
  coupleResult9: RemainderPairResult;
  coupleDayResult: CoupleDayResult;
};

export type BetaljemurBirthNeptuBreakdown = {
  date: string;
  weton: WetonInput;
  javanese: JavaneseDateInfo;
  dayNeptu: number;
  pasaranNeptu: number;
  monthNeptu: number;
  dateNeptu: number;
  yearNeptu: number;
  totalNeptu: number;
};

export type BetaljemurMarriageRemainder3Calculation = {
  male: BetaljemurBirthNeptuBreakdown;
  female: BetaljemurBirthNeptuBreakdown;
  totalNeptu: number;
  result: PetungResult;
  source: string;
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

function remainderPairKey(left: number, right: number): string {
  return [left, right].sort((a, b) => a - b).join('-');
}

function dayPairKey(left: DayName, right: DayName): string {
  return [left, right].sort((a, b) => DAYS.indexOf(a) - DAYS.indexOf(b)).join('-');
}

export function resultForCoupleRemainder9(maleNeptu: number, femaleNeptu: number): RemainderPairResult {
  const maleRemainder = normalizeModulo(maleNeptu, 9);
  const femaleRemainder = normalizeModulo(femaleNeptu, 9);
  const meaning = BETALJEMUR_COUPLE_REMAINDER_9[remainderPairKey(maleRemainder, femaleRemainder)];

  return {
    divisor: 9,
    maleRemainder,
    femaleRemainder,
    meaning,
    source: BETALJEMUR_SOURCE,
  };
}

export function resultForCoupleDays(maleDay: DayName, femaleDay: DayName): CoupleDayResult {
  return {
    maleDay,
    femaleDay,
    meaning: BETALJEMUR_DAY_PAIR_RESULTS[dayPairKey(maleDay, femaleDay)],
    source: BETALJEMUR_SOURCE,
  };
}

export function assessTravelDeparture(weton: WetonInput): TravelDepartureAssessment {
  const neptu = wetonNeptu(weton);
  const no141 = TRAVEL_NO141[neptu];
  const slots145: TravelSlot[] = (TRAVEL_NO145_SLOTS[neptu] ?? []).map((slot) => ({
    ...slot,
    source: 'No.145',
    level: 'baik',
  }));
  const slots146Day: TravelSlot[] = (TRAVEL_NO146_DAY_TABLE[neptu] ?? [])
    .map((name, index) => ({
      source: 'No.146' as const,
      name,
      range: TRAVEL_NO146_DAY_RANGES[index].range,
      level: TRAVEL_GOOD_SLOT_NAMES.has(name) ? ('baik' as const) : ('hindari' as const),
      description: `${TRAVEL_NO146_DAY_RANGES[index].name}: ${name}.`,
    }))
    .filter((slot) => slot.level === 'baik');

  return {
    weton,
    neptu,
    tibo: recommendationReason(
      'lelungan-no141',
      no141.tibo,
      no141.level,
      `Neptu ${neptu}`,
      no141.description,
    ),
    kalaDirection: no141.kalaDirection,
    slots145,
    slots146Day,
  };
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
    coupleResult9: resultForCoupleRemainder9(maleNeptu, femaleNeptu),
    coupleDayResult: resultForCoupleDays(params.male.day, params.female.day),
  };
}

function birthNeptuBreakdownFromIsoDate(date: string): BetaljemurBirthNeptuBreakdown {
  const weton = wetonFromIsoDate(date);
  const javanese = javaneseDateFromIsoDate(date);
  const dayNeptu = DAY_NEPTU[weton.day];
  const pasaranNeptu = PASARAN_NEPTU[weton.pasaran];
  const monthNeptu = JAVANESE_MONTH_NEPTU[javanese.month];
  const dateNeptu = javanese.day;
  const yearNeptu = JAVANESE_YEAR_NEPTU[javanese.yearName];

  return {
    date,
    weton,
    javanese,
    dayNeptu,
    pasaranNeptu,
    monthNeptu,
    dateNeptu,
    yearNeptu,
    totalNeptu: dayNeptu + pasaranNeptu + monthNeptu + dateNeptu + yearNeptu,
  };
}

export function calculateBetaljemurMarriageRemainder3(params: {
  maleDate: string;
  femaleDate: string;
}): BetaljemurMarriageRemainder3Calculation {
  const male = birthNeptuBreakdownFromIsoDate(params.maleDate);
  const female = birthNeptuBreakdownFromIsoDate(params.femaleDate);
  const totalNeptu = male.totalNeptu + female.totalNeptu;

  return {
    male,
    female,
    totalNeptu,
    result: resultForTable(totalNeptu, 3, TIBO_3),
    source: `${BETALJEMUR_SOURCE} No. 25`,
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

function getSaatIjabPeriod(params: {
  pasaran: PasaranName;
  javaneseDay?: number;
  minuteOfDay: number;
}): WayahPeriod | null {
  if (!params.javaneseDay) return null;

  const rangeIndex = SAAT_LIMA_RANGES.findIndex((range) =>
    isMinuteInRange(params.minuteOfDay, range.start, range.end, range.end === 18 * 60),
  );

  if (rangeIndex < 0) return null;

  const dateGroupIndex = positiveModulo(params.javaneseDay - 1, 5);
  const dateName = SAAT_IJAB_DATE_NAMES[dateGroupIndex][rangeIndex];
  const tibo = SAAT_LIMA_BY_PASARAN[params.pasaran][rangeIndex];
  const meaning = SAAT_IJAB_TIBO_MEANINGS[tibo];
  const range = SAAT_LIMA_RANGES[rangeIndex];

  return {
    ...meaning,
    id: `saat-ijab-${dateName.toLowerCase()}-${tibo.toLowerCase().replace(/\s+/g, '-')}`,
    name: `${dateName} ${meaning.name}`,
    range: range.label,
    source: 'Saat Ijab Betaljemur',
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

export function assessWayah(params: { time: string; pasaran: PasaranName; javaneseDay?: number }): WayahAssessment {
  const minuteOfDay = parseTimeToMinutes(params.time);
  const saatLima = getSaatLimaPeriod(params.pasaran, minuteOfDay);
  const ijab = getSaatIjabPeriod({
    pasaran: params.pasaran,
    javaneseDay: params.javaneseDay,
    minuteOfDay,
  });
  const alam = getSengkalaAlamPeriods(minuteOfDay);
  const levels = [ijab?.level ?? saatLima?.level, ...alam.map((period) => period.level)].filter(
    (level): level is QualityLevel => Boolean(level),
  );

  return {
    time: params.time,
    pasaran: params.pasaran,
    javaneseDay: params.javaneseDay,
    minuteOfDay,
    saatLima,
    ijab,
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

function recommendationReason(
  id: string,
  name: string,
  level: QualityLevel,
  scope: string,
  description: string,
): RecommendationReason {
  return {
    id,
    name,
    level,
    scope,
    description,
  };
}

function monthAdvice(
  id: string,
  name: string,
  level: QualityLevel,
  scope: string,
  description: string,
): BetaljemurMonthAdvice {
  return {
    id,
    name,
    level,
    scope,
    description,
    source: BETALJEMUR_SOURCE,
  };
}

function isWarningAdvice(advice: BetaljemurMonthAdvice): advice is BetaljemurMonthAdvice & {
  level: BadDayWarning['level'];
} {
  return advice.level === 'waspada' || advice.level === 'hindari';
}

function warningFromAdvice(advice: BetaljemurMonthAdvice): BadDayWarning {
  return warning(advice.id, advice.name, advice.level as BadDayWarning['level'], advice.scope, advice.description);
}

function getBetaljemurMonthAdvices(weton: WetonInput, javanese: JavaneseDateInfo): BetaljemurMonthAdvice[] {
  const advices: BetaljemurMonthAdvice[] = [];
  const monthCharacter = BETALJEMUR_MONTH_CHARACTER[javanese.month];
  const scope = `${javanese.month} tahun ${javanese.yearName}`;

  advices.push(
    monthAdvice(
      'betaljemur-month-character',
      monthCharacter.name,
      monthCharacter.level,
      javanese.month,
      monthCharacter.description,
    ),
  );

  const yearMonthRule = BETALJEMUR_YEAR_MONTH_RULES[javanese.yearName];
  if (yearMonthRule.good.includes(javanese.month)) {
    advices.push(
      monthAdvice(
        'betaljemur-good-month',
        'Bulan Baik Betaljemur',
        'baik',
        scope,
        'Bulan ini termasuk daftar bulan baik untuk hajat nikah menurut tahun Jawa.',
      ),
    );
  }

  if (yearMonthRule.bad.includes(javanese.month)) {
    advices.push(
      monthAdvice(
        'betaljemur-bad-month',
        'Bulan Tidak Baik Betaljemur',
        'hindari',
        scope,
        'Bulan ini termasuk daftar bulan yang tidak baik untuk hajat nikah menurut tahun Jawa.',
      ),
    );
  }

  const pantangan = PANTANGAN_BULAN_RULES[javanese.yearName];
  if (pantangan.months.includes(javanese.month)) {
    advices.push(
      monthAdvice(
        'betaljemur-pantangan-bulan',
        'Pantangan Bulan Betaljemur',
        'hindari',
        scope,
        `Bulan ini dipantangkan dalam tahun ${javanese.yearName}; tafsirnya ${pantangan.consequence}.`,
      ),
    );
  }

  if (BETALJEMUR_RAHAYU_DAY_RULES.some((rule) => rule.months.includes(javanese.month) && rule.days.includes(weton.day))) {
    advices.push(
      monthAdvice(
        'betaljemur-bulan-rahayu',
        'Bulan Rahayu',
        'baik',
        `${weton.day} pada bulan ${javanese.month}`,
        'Kombinasi hari dan bulan ini termasuk Rahayu untuk mengerjakan keperluan penting.',
      ),
    );
  }

  if (BETALJEMUR_SARJU_DAY_RULES.some((rule) => rule.months.includes(javanese.month) && rule.days.includes(weton.day))) {
    advices.push(
      monthAdvice(
        'betaljemur-bulan-sarju',
        'Bulan Sarju',
        'netral',
        `${weton.day} pada bulan ${javanese.month}`,
        'Kombinasi hari dan bulan ini termasuk Sarju, yaitu tingkat sedang.',
      ),
    );
  }

  return advices;
}

export function assessEventDate(date: string): EventDateAssessment {
  const weton = wetonFromIsoDate(date);
  const javanese = javaneseDateFromIsoDate(date);
  const monthAdvices = getBetaljemurMonthAdvices(weton, javanese);
  const warnings: BadDayWarning[] = [];
  const wetonText = wetonLabel(weton);

  for (const advice of monthAdvices) {
    if (isWarningAdvice(advice)) {
      warnings.push(warningFromAdvice(advice));
    }
  }

  const sangarKeperluanPenting = getSangarKeperluanPentingWarning(javanese);
  if (sangarKeperluanPenting) {
    warnings.push(sangarKeperluanPenting);
  }

  if (javanese.month === 'Besar' && (javanese.day === 29 || javanese.day === 30)) {
    const rule = KUNARPAWARSA_RULES[javanese.yearName];
    warnings.push(
      warning(
        'kunarpawarsa',
        'Kunarpawarsa',
        'hindari',
        `${javanese.day} Besar tahun ${javanese.yearName}`,
        `Tanggal akhir Besar termasuk tahun bencana; pakemnya jatuh pada ${wetonLabel(rule)}.`,
      ),
    );
  }

  if (javanese.month === 'Suro' && javanese.day === 3) {
    const rule = SANGARWARSA_RULES[javanese.yearName];
    warnings.push(
      warning(
        'sangarwarsa',
        'Sangarwarsa',
        'hindari',
        `3 Suro tahun ${javanese.yearName}`,
        `Tiga hari setelah tahun baru Jawa termasuk hari sangar; pakemnya jatuh pada ${wetonLabel(rule)}.`,
      ),
    );
  }

  const nabiDate = KEJADIAN_NABI_DATES[javanese.month];
  if (nabiDate?.day === javanese.day) {
    warnings.push(
      warning(
        'kejadian-nabi',
        'Kejadian Nabi',
        'hindari',
        `${javanese.day} ${javanese.month}`,
        `Tanggal ini masuk daftar peristiwa ${nabiDate.event} yang dihindari untuk hajat nikah.`,
      ),
    );
  }

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
    monthNeptu: JAVANESE_MONTH_NEPTU[javanese.month],
    yearNeptu: JAVANESE_YEAR_NEPTU[javanese.yearName],
    monthAdvices,
    warnings,
    worstLevel,
  };
}

export type RecommendedDate = {
  date: string;
  event: WetonInput;
  eventNeptu: number;
  mode: EventRecommendationMode;
  javanese: JavaneseDateInfo;
  hijri: HijriDateInfo;
  scoreLevel: QualityLevel;
  reasons: RecommendationReason[];
  badDayWarnings: BadDayWarning[];
  akadDayAdvice: AkadDayAdvice | null;
  bestSaatIjab: WayahPeriod | null;
  travel: TravelDepartureAssessment;
};

function getSangarKeperluanPentingWarning(javanese: JavaneseDateInfo): BadDayWarning | null {
  if (!includesCurrentJavaneseDate(SANGARE_KEPERLUAN_PENTING_TANGGAL, javanese)) return null;

  return warning(
    'sangar-keperluan-penting',
    'Tanggal Sangar No.14',
    'hindari',
    `${javanese.day} ${javanese.month}`,
    'Tanggal sangar untuk segala keperluan penting menurut No.14.',
  );
}

function levelForAkadDayName(name: string): QualityLevel {
  if (AKAD_DAY_GOOD_NAMES.has(name)) return 'baik';
  if (AKAD_DAY_NEUTRAL_NAMES.has(name)) return 'netral';
  return 'hindari';
}

export function assessAkadDay(date: string): AkadDayAdvice {
  const weton = wetonFromIsoDate(date);
  const javanese = javaneseDateFromIsoDate(date);
  const occurrence = Math.min(Math.floor((javanese.day - 1) / 7) + 1, 5);

  return {
    occurrence,
    options: AKAD_DAY_TABLES.map((table, index) => {
      const name = table[weton.day][occurrence - 1];

      return recommendationReason(
        `akad-day-${index + 1}`,
        `No.34 jenis ${index + 1}: ${name}`,
        levelForAkadDayName(name),
        `${weton.day} ke-${occurrence} bulan ${javanese.month}`,
        'Penilaian hari akad berdasarkan urutan kemunculan hari dalam bulan Jawa.',
      );
    }),
  };
}

function hasGoodAkadDay(advice: AkadDayAdvice): boolean {
  return advice.options.some((option) => option.level === 'baik');
}

export function findBestSaatIjab(params: { pasaran: PasaranName; javaneseDay: number }): WayahPeriod | null {
  const periods = SAAT_LIMA_RANGES.map((range) =>
    getSaatIjabPeriod({
      pasaran: params.pasaran,
      javaneseDay: params.javaneseDay,
      minuteOfDay: range.start,
    }),
  ).filter((period): period is WayahPeriod => period !== null && period.level === 'baik');

  return periods.find((period) => period.name.includes('Slamet')) ?? periods[0] ?? null;
}

function getImportantNeedReasons(assessment: EventDateAssessment): RecommendationReason[] {
  return assessment.monthAdvices
    .filter((advice) => advice.id === 'betaljemur-bulan-rahayu' || advice.id === 'betaljemur-bulan-sarju')
    .map((advice) =>
      recommendationReason(advice.id, advice.name, advice.level, advice.scope, `${advice.description} (${advice.source})`),
    );
}

function getMarriageMonthReasons(assessment: EventDateAssessment): RecommendationReason[] {
  return assessment.monthAdvices
    .filter(
      (advice) =>
        advice.level === 'baik' &&
        (advice.id === 'betaljemur-month-character' ||
          advice.id === 'betaljemur-good-month' ||
          advice.id === 'betaljemur-bulan-rahayu'),
    )
    .map((advice) =>
      recommendationReason(advice.id, advice.name, advice.level, advice.scope, `${advice.description} (${advice.source})`),
    );
}

function getTarubReasons(assessment: EventDateAssessment): RecommendationReason[] {
  const reasons: RecommendationReason[] = [];
  const tarubNeptu = TARUB_NEPTU_MEANINGS[wetonNeptu(assessment.weton)];

  if (tarubNeptu) reasons.push(tarubNeptu);

  if (TARUB_GOOD_DATES_NO40.has(assessment.javanese.day)) {
    reasons.push(
      recommendationReason(
        'tarub-date-no40',
        'Tanggal tarub No.40',
        'baik',
        `${assessment.javanese.day} ${assessment.javanese.month}`,
        'Masuk kelompok tanggal baik No.40: selamat dan banyak rezeki.',
      ),
    );
  }

  if (TARUB_GOOD_DATES_NO41.has(assessment.javanese.day)) {
    reasons.push(
      recommendationReason(
        'tarub-date-no41',
        'Tanggal tarub No.41',
        'baik',
        `${assessment.javanese.day} ${assessment.javanese.month}`,
        'Masuk kelompok tanggal baik No.41: rahayu atau tenteram.',
      ),
    );
  }

  return reasons;
}

function recommendationWorstLevel(warnings: readonly BadDayWarning[], reasons: readonly RecommendationReason[]): QualityLevel {
  if (warnings.some((item) => item.level === 'hindari') || reasons.some((item) => item.level === 'hindari')) {
    return 'hindari';
  }
  if (warnings.length > 0 || reasons.some((item) => item.level === 'waspada')) return 'waspada';
  if (reasons.some((item) => item.level === 'baik')) return 'baik';
  return 'netral';
}

export function findRecommendedEventDates(params: {
  startDate: string;
  rangeDays: number;
  mode?: EventRecommendationMode;
  limit?: number;
}): RecommendedDate[] {
  const limit = params.limit ?? 20;
  const mode = params.mode ?? 'akadNikah';
  const results: RecommendedDate[] = [];

  for (let index = 0; index < params.rangeDays; index += 1) {
    const date = addDaysIso(params.startDate, index);
    const assessment = assessEventDate(date);
    const no14Warning = getSangarKeperluanPentingWarning(assessment.javanese);
    const importantReasons = getImportantNeedReasons(assessment);
    const marriageMonthReasons = getMarriageMonthReasons(assessment);
    const akadDayAdvice = assessAkadDay(date);
    const goodAkadDayReasons = akadDayAdvice.options.filter((option) => option.level === 'baik');
    const bestSaatIjab = findBestSaatIjab({
      pasaran: assessment.weton.pasaran,
      javaneseDay: assessment.javanese.day,
    });
    const travel = assessTravelDeparture(assessment.weton);
    const tarubReasons = getTarubReasons(assessment);
    const warnings = no14Warning ? [no14Warning] : [];
    let reasons: RecommendationReason[] = [];
    let include = false;

    if (mode === 'temuKeluarga' || mode === 'lamaran') {
      reasons = importantReasons;
      include = !no14Warning && reasons.length > 0;
    } else if (mode === 'lamaranKetat') {
      reasons = [...importantReasons, ...marriageMonthReasons, ...goodAkadDayReasons];
      include = !no14Warning && assessment.warnings.length === 0 && importantReasons.length > 0 && hasGoodAkadDay(akadDayAdvice);
    } else if (mode === 'tarub') {
      reasons = tarubReasons;
      include =
        !no14Warning &&
        tarubReasons.some((reason) => reason.id === 'tarub-neptu' && reason.level === 'baik') &&
        tarubReasons.some((reason) => reason.id === 'tarub-date-no40' || reason.id === 'tarub-date-no41') &&
        Boolean(bestSaatIjab);
    } else {
      reasons = [...marriageMonthReasons, ...goodAkadDayReasons];
      if (bestSaatIjab) {
        reasons.push(
          recommendationReason(
            'saat-ijab',
            bestSaatIjab.name,
            bestSaatIjab.level,
            bestSaatIjab.range,
            bestSaatIjab.description,
          ),
        );
      }
      include = assessment.warnings.length === 0 && marriageMonthReasons.length > 0 && hasGoodAkadDay(akadDayAdvice) && Boolean(bestSaatIjab);
    }

    if (!include) continue;

    const hijri = hijriDateFromIsoDate(date);
    const badDayWarnings = [...warnings, ...(mode === 'temuKeluarga' || mode === 'lamaran' || mode === 'tarub' ? [] : assessment.warnings)];

    results.push({
      date,
      event: assessment.weton,
      eventNeptu: wetonNeptu(assessment.weton),
      mode,
      javanese: assessment.javanese,
      hijri,
      scoreLevel: recommendationWorstLevel(badDayWarnings, [...reasons, travel.tibo]),
      reasons,
      badDayWarnings,
      akadDayAdvice: mode === 'akadNikah' || mode === 'lamaranKetat' ? akadDayAdvice : null,
      bestSaatIjab,
      travel,
    });

    if (results.length >= limit) break;
  }

  return results;
}
