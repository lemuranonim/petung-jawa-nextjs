export const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'] as const;
export const PASARAN = ['Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon'] as const;

export type DayName = (typeof DAYS)[number];
export type PasaranName = (typeof PASARAN)[number];

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

export type RecommendedDate = {
  date: string;
  event: WetonInput;
  eventNeptu: number;
  totalNeptu: number;
  result5: PetungResult;
  result8Couple: PetungResult;
};

export function findRecommendedEventDates(params: {
  male: WetonInput;
  female: WetonInput;
  startDate: string;
  rangeDays: number;
  targetRemainder5?: number;
  limit?: number;
}): RecommendedDate[] {
  const target = params.targetRemainder5 ?? 3;
  const limit = params.limit ?? 20;
  const results: RecommendedDate[] = [];

  for (let index = 0; index < params.rangeDays; index += 1) {
    const date = addDaysIso(params.startDate, index);
    const event = wetonFromIsoDate(date);
    const calculation = calculatePetung({ male: params.male, female: params.female, event });
    const result5 = calculation.eventResults.find((item) => item.divisor === 5);

    if (result5 && result5.remainder === target) {
      results.push({
        date,
        event,
        eventNeptu: calculation.eventNeptu,
        totalNeptu: calculation.totalNeptu,
        result5,
        result8Couple: calculation.coupleResult8,
      });
    }

    if (results.length >= limit) break;
  }

  return results;
}
