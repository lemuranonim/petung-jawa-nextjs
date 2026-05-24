'use client';

import { useMemo, useState } from 'react';
import {
  assessEventDate,
  assessTravelDeparture,
  assessWayah,
  BadDayWarning,
  BETALJEMUR_COUPLE_REMAINDER_9,
  BETALJEMUR_DAY_PAIR_RESULTS,
  BETALJEMUR_SOURCE,
  BetaljemurMonthAdvice,
  BetaljemurMarriageRemainder3Calculation,
  calculatePetung,
  calculateBetaljemurMarriageRemainder3,
  CoupleDayResult,
  DAY_NEPTU,
  DAYS,
  DayName,
  EventDateAssessment,
  EventRecommendationMode,
  findRecommendedEventDates,
  hijriDateFromIsoDate,
  PASARAN,
  PASARAN_NEPTU,
  PasaranName,
  PETUNG_4_CONTEXTS,
  PETUNG_4_SYSTEMS,
  Petung4Context,
  PetungResult,
  QualityLevel,
  RemainderPairResult,
  TIBO_3,
  TIBO_5_EVENT,
  TIBO_7,
  TIBO_8_COUPLE,
  TiboMeaning,
  TravelDepartureAssessment,
  TravelSlot,
  WayahAssessment,
  WayahPeriod,
  wetonFromIsoDate,
  WetonInput,
} from '@/lib/petung';
import { SEO_PAGE_LINKS } from '@/lib/seo-pages';

function getLocalIsoDate(date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    day: '2-digit',
    month: '2-digit',
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
  }).formatToParts(date);
  const valueFor = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? '';

  return `${valueFor('year')}-${valueFor('month')}-${valueFor('day')}`;
}

const todayIso = getLocalIsoDate();

function isIsoDateString(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function SelectField<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value as T)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export type WetonConfig = {
  useDate: boolean;
  dateStr: string;
  manual: WetonInput;
};

type DetailContext = 'bagi5' | 'bagi7' | 'bagi3' | 'pasangan8' | 'pasangan9' | 'hariLahir';

const DETAIL_CONTEXTS: readonly { id: DetailContext; label: string }[] = [
  { id: 'bagi5', label: 'Bagi 5' },
  { id: 'bagi7', label: 'Bagi 7' },
  { id: 'bagi3', label: 'Bagi 3' },
  { id: 'pasangan8', label: 'Pasangan 8' },
  { id: 'pasangan9', label: 'Pasangan 9' },
  { id: 'hariLahir', label: 'Hari Lahir' },
];

const RECOMMENDATION_MODES: readonly { id: EventRecommendationMode; label: string }[] = [
  { id: 'temuKeluarga', label: 'Temu keluarga' },
  { id: 'lamaran', label: 'Lamaran' },
  { id: 'lamaranKetat', label: 'Lamaran ketat' },
  { id: 'akadNikah', label: 'Akad / nikah' },
  { id: 'tarub', label: 'Tarub' },
];

export function getActiveWeton(config: WetonConfig): WetonInput {
  if (!config.useDate) return config.manual;
  try {
    return wetonFromIsoDate(config.dateStr);
  } catch {
    return config.manual;
  }
}

function WetonPicker({
  title,
  config,
  onChange,
  className = 'panel',
}: {
  title: string;
  config: WetonConfig;
  onChange: (value: WetonConfig) => void;
  className?: string;
}) {
  const activeWeton = getActiveWeton(config);
  const neptu = DAY_NEPTU[activeWeton.day] + PASARAN_NEPTU[activeWeton.pasaran];

  return (
    <section className={className}>
      <div className="panelHeader">
        <h2>{title}</h2>
        <strong className="neptuBadge">
          {activeWeton.day} {activeWeton.pasaran} · Neptu {neptu}
        </strong>
      </div>

      <label className="toggleRow">
        <input
          type="checkbox"
          checked={config.useDate}
          onChange={(event) => onChange({ ...config, useDate: event.target.checked })}
        />
        <span>Pilih dari tanggal Masehi</span>
      </label>

      {config.useDate ? (
        <label className="field">
          <span>Tanggal</span>
          <input
            type="date"
            value={config.dateStr}
            onChange={(event) => onChange({ ...config, dateStr: event.target.value })}
          />
        </label>
      ) : (
        <div className="gridTwo">
          <SelectField<DayName>
            label="Hari"
            value={config.manual.day}
            options={DAYS}
            onChange={(day) => onChange({ ...config, manual: { ...config.manual, day } })}
          />
          <SelectField<PasaranName>
            label="Pasaran"
            value={config.manual.pasaran}
            options={PASARAN}
            onChange={(pasaran) => onChange({ ...config, manual: { ...config.manual, pasaran } })}
          />
        </div>
      )}
    </section>
  );
}

function ResultCard({
  result,
  primary = false,
  label,
}: {
  result: PetungResult;
  primary?: boolean;
  label?: string;
}) {
  return (
    <article className={`resultCard ${primary ? 'primary' : ''} ${result.meaning.level}`}>
      <div className="resultTop">
        <span>{label ?? `Bagi ${result.divisor}`}</span>
        <strong>Sisa {result.remainder}</strong>
      </div>
      <h3>{result.meaning.name}</h3>
      <p>{result.meaning.description}</p>
    </article>
  );
}

function RemainderPairCard({ result }: { result: RemainderPairResult }) {
  return (
    <article className={`resultCard ${result.meaning.level}`}>
      <div className="resultTop">
        <span>Sisa 9 pasangan</span>
        <strong>
          {result.maleRemainder} & {result.femaleRemainder}
        </strong>
      </div>
      <h3>{result.meaning.name}</h3>
      <p>{result.meaning.description}</p>
    </article>
  );
}

function CoupleDayResultCard({ result }: { result: CoupleDayResult }) {
  return (
    <article className={`resultCard ${result.meaning.level}`}>
      <div className="resultTop">
        <span>Hari lahir pasangan</span>
        <strong>
          {result.maleDay} & {result.femaleDay}
        </strong>
      </div>
      <h3>{result.meaning.name}</h3>
      <p>{result.meaning.description}</p>
    </article>
  );
}

function BetaljemurRemainder3Card({
  calculation,
  primary = false,
}: {
  calculation: BetaljemurMarriageRemainder3Calculation | null;
  primary?: boolean;
}) {
  if (!calculation) {
    return (
      <article className={`resultCard ${primary ? 'primary' : ''} netral`}>
        <div className="resultTop">
          <span>Bagi 3 Betaljemur No.25</span>
          <strong>Butuh tanggal</strong>
        </div>
        <h3>Lengkapi tanggal lahir</h3>
        <p>Hitungan No. 25 memakai neptu hari, pasaran, bulan Jawa, tanggal Jawa, dan tahun Jawa kedua calon.</p>
      </article>
    );
  }

  return (
    <article className={`resultCard ${primary ? 'primary' : ''} ${calculation.result.meaning.level}`}>
      <div className="resultTop">
        <span>Bagi 3 Betaljemur No.25</span>
        <strong>Sisa {calculation.result.remainder}</strong>
      </div>
      <h3>{calculation.result.meaning.name}</h3>
      <p>{calculation.result.meaning.description}</p>
      <p className="resultMeta">
        Total {calculation.totalNeptu} = laki-laki {calculation.male.totalNeptu} + perempuan{' '}
        {calculation.female.totalNeptu}.
      </p>
    </article>
  );
}

function TiboResultTable({ table }: { table: Record<number, TiboMeaning> }) {
  return (
    <div className="tableWrap compactTable">
      <table>
        <thead>
          <tr>
            <th>Sisa</th>
            <th>Tibo</th>
            <th>Makna</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(table)
            .sort(([left], [right]) => Number(left) - Number(right))
            .map(([remainder, meaning]) => (
              <tr key={remainder}>
                <td>{remainder}</td>
                <td>{meaning.name}</td>
                <td>{meaning.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

function Remainder9ResultTable() {
  return (
    <div className="tableWrap compactTable">
      <table>
        <thead>
          <tr>
            <th>Sisa</th>
            <th>Tibo</th>
            <th>Makna</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(BETALJEMUR_COUPLE_REMAINDER_9).map(([remainders, meaning]) => (
            <tr key={remainders}>
              <td>{remainders.replace('-', ' & ')}</td>
              <td>{meaning.name}</td>
              <td>{meaning.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CoupleDayResultTable() {
  return (
    <div className="tableWrap compactTable">
      <table>
        <thead>
          <tr>
            <th>Hari</th>
            <th>Tibo</th>
            <th>Makna</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(BETALJEMUR_DAY_PAIR_RESULTS).map(([days, meaning]) => (
            <tr key={days}>
              <td>{days.replace('-', ' & ')}</td>
              <td>{meaning.name}</td>
              <td>{meaning.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatJavaneseDate(assessment: EventDateAssessment): string {
  const { javanese } = assessment;
  return `${javanese.day} ${javanese.month} ${javanese.year} ${javanese.yearName}`;
}

function formatHijriDate(date: string): string {
  const hijri = hijriDateFromIsoDate(date);
  return `${hijri.day} ${hijri.month} ${hijri.year} ${hijri.era}`;
}

function formatMasehiDate(date: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

function WarningPill({ warning }: { warning: BadDayWarning }) {
  return <span className={`warningPill ${warning.level}`}>{warning.name}</span>;
}

function MonthAdviceItem({ advice }: { advice: BetaljemurMonthAdvice }) {
  return (
    <article className={`warningItem ${advice.level}`}>
      <div>
        <span className={`warningPill ${advice.level}`}>{advice.name}</span>
        <strong>{advice.scope}</strong>
      </div>
      <p>{advice.description}</p>
    </article>
  );
}

function WayahPill({ period }: { period: WayahPeriod }) {
  return <span className={`warningPill ${period.level}`}>{period.name}</span>;
}

function formatLevel(level: QualityLevel): string {
  if (level === 'baik') return 'baik';
  if (level === 'hindari') return 'hindari';
  if (level === 'waspada') return 'waspada';
  return 'netral';
}

function formatReasonList(items: readonly { name: string }[], fallback: string): string {
  if (items.length === 0) return fallback;
  return items.map((item) => item.name).join(', ');
}

function formatSlotList(slots: readonly TravelSlot[], fallback = '-'): string {
  if (slots.length === 0) return fallback;
  return slots.map((slot) => `${slot.range} · ${slot.name}`).join(', ');
}

function WayahItem({ period }: { period: WayahPeriod }) {
  return (
    <article className={`warningItem ${period.level}`}>
      <div>
        <WayahPill period={period} />
        <strong>
          {period.source} · {period.range}
        </strong>
      </div>
      <p>{period.description}</p>
    </article>
  );
}

function WayahAssessmentPanel({
  assessment,
  time,
  onTimeChange,
}: {
  assessment: WayahAssessment;
  time: string;
  onTimeChange: (value: string) => void;
}) {
  return (
    <section className={`panel wayahPanel ${assessment.overallLevel}`}>
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Wayah acara</p>
          <h2>Cek Saat Ijab & Sengkala Alam</h2>
        </div>
        <strong className={`statusBadge ${assessment.overallLevel}`}>{formatLevel(assessment.overallLevel)}</strong>
      </div>

      <div className="wayahGrid">
        <div className="calendarSnapshotGrid">
          <label className="field calendarSnapshot">
            <span>Jam acara</span>
            <input type="time" value={time} onChange={(event) => onTimeChange(event.target.value)} />
          </label>
          <div className="calendarSnapshot">
            <span>Pasaran</span>
            <strong>{assessment.pasaran}</strong>
            <p>Dasar pekan ijab Betaljemur</p>
          </div>
          {assessment.javaneseDay ? (
            <div className="calendarSnapshot">
              <span>Tanggal Jawa</span>
              <strong>{assessment.javaneseDay}</strong>
              <p>Dasar urutan tanggal ijab</p>
            </div>
          ) : null}
        </div>

        <div className="warningList">
          {assessment.ijab ? (
            <WayahItem period={assessment.ijab} />
          ) : assessment.saatLima ? (
            <WayahItem period={assessment.saatLima} />
          ) : (
            <article className="warningItem netral">
              <div>
                <span className="warningPill netral">di luar Saat Ijab</span>
                <strong>18.00 - 06.00</strong>
              </div>
              <p>Malam hari tidak memakai siklus Saat Ijab Betaljemur; ceknya mengikuti Sengkala Alam.</p>
            </article>
          )}

          {assessment.alam.map((period) => (
            <WayahItem key={period.id} period={period} />
          ))}

          {!assessment.saatLima && assessment.alam.length === 0 ? (
            <article className="warningItem netral">
              <div>
                <span className="warningPill netral">netral</span>
                <strong>Tidak masuk sengkala alam utama</strong>
              </div>
              <p>Jam ini tidak terkena Surup, Bedhug, Lingsir Wengi, atau Sepi Kirang.</p>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function TravelDeparturePanel({ assessment }: { assessment: TravelDepartureAssessment }) {
  return (
    <section className={`panel travelPanel ${assessment.tibo.level}`}>
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Keberangkatan rombongan</p>
          <h2>Cek Lelungan No.141, 145, 146</h2>
        </div>
        <strong className={`statusBadge ${assessment.tibo.level}`}>{formatLevel(assessment.tibo.level)}</strong>
      </div>

      <div className="wayahGrid">
        <div className="calendarSnapshotGrid">
          <div className="calendarSnapshot">
            <span>Neptu berangkat</span>
            <strong>{assessment.neptu}</strong>
            <p>
              {assessment.weton.day} {assessment.weton.pasaran}
            </p>
          </div>
          <div className="calendarSnapshot">
            <span>Arah Kala</span>
            <strong>{assessment.kalaDirection}</strong>
            <p>Sebaiknya tidak menuju arah ini saat berangkat jauh.</p>
          </div>
        </div>

        <div className="warningList">
          <article className={`warningItem ${assessment.tibo.level}`}>
            <div>
              <span className={`warningPill ${assessment.tibo.level}`}>{assessment.tibo.name}</span>
              <strong>{assessment.tibo.scope}</strong>
            </div>
            <p>{assessment.tibo.description}</p>
          </article>
          <article className="warningItem baik">
            <div>
              <span className="warningPill baik">No.145</span>
              <strong>Waktu berangkat baik</strong>
            </div>
            <p>{formatSlotList(assessment.slots145, 'Tidak ada slot No.145 pada neptu ini.')}</p>
          </article>
          <article className="warningItem baik">
            <div>
              <span className="warningPill baik">No.146</span>
              <strong>Slot siang baik</strong>
            </div>
            <p>{formatSlotList(assessment.slots146Day, 'Tidak ada slot siang baik pada neptu ini.')}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function BadDayAssessmentPanel({
  assessment,
  canAssess,
}: {
  assessment: EventDateAssessment | null;
  canAssess: boolean;
}) {
  const supportingMonthAdvices =
    assessment?.monthAdvices.filter((advice) => advice.level === 'baik' || advice.level === 'netral') ?? [];

  return (
    <section className={`panel badDayPanel ${assessment?.worstLevel ?? 'netral'}`}>
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Dina/tanggal kurang baik</p>
          <h2>Cek 3 kalender & pantangan</h2>
        </div>
        {assessment ? (
          <strong className={`statusBadge ${assessment.worstLevel}`}>{assessment.worstLevel}</strong>
        ) : null}
      </div>

      {!canAssess ? (
        <p className="emptyState">
          Aktifkan pilihan tanggal Masehi pada Hari Acara untuk mengecek bulan Jawa, tanggal Jawa, dan wuku.
        </p>
      ) : assessment ? (
        <div className="badDayGrid">
          <div className="calendarSnapshotGrid">
            <div className="calendarSnapshot">
              <span>Masehi</span>
              <strong>{formatMasehiDate(assessment.date)}</strong>
              <p>
                {assessment.weton.day} {assessment.weton.pasaran}
              </p>
            </div>
            <div className="calendarSnapshot">
              <span>Hijriah</span>
              <strong>{formatHijriDate(assessment.date)}</strong>
              <p>Kalender Hijriah</p>
            </div>
            <div className="calendarSnapshot">
              <span>Jawa</span>
              <strong>{formatJavaneseDate(assessment)}</strong>
              <p>Wuku {assessment.javanese.wuku}</p>
            </div>
            <div className="calendarSnapshot">
              <span>Neptu Betaljemur</span>
              <strong>
                Bulan {assessment.monthNeptu} · Tahun {assessment.yearNeptu}
              </strong>
              <p>{BETALJEMUR_SOURCE}</p>
            </div>
          </div>

          <div className="warningList">
            {assessment.warnings.length > 0 ? (
              assessment.warnings.map((warning, index) => (
                <article key={`${warning.id}-${index}`} className={`warningItem ${warning.level}`}>
                  <div>
                    <WarningPill warning={warning} />
                    <strong>{warning.scope}</strong>
                  </div>
                  <p>{warning.description}</p>
                </article>
              ))
            ) : (
              <article className="warningItem baik">
                <div>
                  <span className="warningPill baik">bersih</span>
                  <strong>Tidak terkena daftar pantangan</strong>
                </div>
                <p>
                  Tanggal ini tidak masuk penanda sangar, bangas, suwung, taliwangke, samparwangke, atau
                  daftar dina ala.
                </p>
              </article>
            )}

            {supportingMonthAdvices.length > 0 ? (
              <>
                <p className="listLabel">Acuan bulan dari Betaljemur</p>
                {supportingMonthAdvices.map((advice, index) => (
                  <MonthAdviceItem key={`${advice.id}-${index}`} advice={advice} />
                ))}
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <p className="emptyState">Tanggal belum bisa dibaca. Periksa format tanggal acara.</p>
      )}
    </section>
  );
}

function Petung4ResultTable({ context }: { context: Petung4Context }) {
  const system = PETUNG_4_SYSTEMS[context];

  return (
    <div className="tableWrap compactTable">
      <table>
        <thead>
          <tr>
            <th>Sisa</th>
            <th>Tibo</th>
            <th>Makna</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(system.results).map(([remainder, meaning]) => (
            <tr key={remainder}>
              <td>{remainder}</td>
              <td>{meaning.name}</td>
              <td>{meaning.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DetailResultCard({
  context,
  calculation,
  marriageRemainder3,
}: {
  context: DetailContext;
  calculation: ReturnType<typeof calculatePetung>;
  marriageRemainder3: BetaljemurMarriageRemainder3Calculation | null;
}) {
  if (context === 'pasangan9') return <RemainderPairCard result={calculation.coupleResult9} />;
  if (context === 'hariLahir') return <CoupleDayResultCard result={calculation.coupleDayResult} />;
  if (context === 'pasangan8') return <ResultCard result={calculation.coupleResult8} primary label="Pasangan bagi 8" />;
  if (context === 'bagi3') return <BetaljemurRemainder3Card calculation={marriageRemainder3} primary />;

  const divisor = context === 'bagi5' ? 5 : 7;
  const result = calculation.eventResults.find((item) => item.divisor === divisor);

  return result ? <ResultCard result={result} primary label={`Hari acara bagi ${divisor}`} /> : null;
}

function DetailResultTable({ context }: { context: DetailContext }) {
  if (context === 'bagi5') return <TiboResultTable table={TIBO_5_EVENT} />;
  if (context === 'bagi7') return <TiboResultTable table={TIBO_7} />;
  if (context === 'bagi3') return <TiboResultTable table={TIBO_3} />;
  if (context === 'pasangan8') return <TiboResultTable table={TIBO_8_COUPLE} />;
  if (context === 'pasangan9') return <Remainder9ResultTable />;
  return <CoupleDayResultTable />;
}

export default function Home() {
  const [male, setMale] = useState<WetonConfig>({
    useDate: true,
    dateStr: '1995-01-01',
    manual: { day: 'Rabu', pasaran: 'Pon' },
  });
  const [female, setFemale] = useState<WetonConfig>({
    useDate: true,
    dateStr: '1995-01-01',
    manual: { day: 'Jumat', pasaran: 'Kliwon' },
  });
  const [eventConfig, setEventConfig] = useState<WetonConfig>({
    useDate: true,
    dateStr: todayIso,
    manual: { day: 'Minggu', pasaran: 'Legi' },
  });
  const [eventTime, setEventTime] = useState('10:00');
  const [startDate, setStartDate] = useState(todayIso);
  const [rangeDays, setRangeDays] = useState(120);
  const [recommendationMode, setRecommendationMode] = useState<EventRecommendationMode>('akadNikah');
  const [petung4Context, setPetung4Context] = useState<Petung4Context>('salakiRabi');
  const [detailContext, setDetailContext] = useState<DetailContext>('bagi5');

  const maleWeton = useMemo(() => getActiveWeton(male), [male]);
  const femaleWeton = useMemo(() => getActiveWeton(female), [female]);
  const eventWeton = useMemo(() => getActiveWeton(eventConfig), [eventConfig]);
  const travelAssessment = useMemo(() => assessTravelDeparture(eventWeton), [eventWeton]);
  const calculation = useMemo(
    () => calculatePetung({ male: maleWeton, female: femaleWeton, event: eventWeton }),
    [maleWeton, femaleWeton, eventWeton],
  );
  const marriageRemainder3 = useMemo(() => {
    if (!male.useDate || !female.useDate) return null;

    try {
      return calculateBetaljemurMarriageRemainder3({
        maleDate: male.dateStr,
        femaleDate: female.dateStr,
      });
    } catch {
      return null;
    }
  }, [female.dateStr, female.useDate, male.dateStr, male.useDate]);
  const eventAssessment = useMemo(() => {
    if (!eventConfig.useDate) return null;

    try {
      return assessEventDate(eventConfig.dateStr);
    } catch {
      return null;
    }
  }, [eventConfig.dateStr, eventConfig.useDate]);
  const wayahAssessment = useMemo(
    () =>
      assessWayah({
        time: eventTime,
        pasaran: eventWeton.pasaran,
        javaneseDay: eventAssessment?.javanese.day,
      }),
    [eventAssessment?.javanese.day, eventTime, eventWeton.pasaran],
  );

  const recommendations = useMemo(() => {
    if (!isIsoDateString(startDate)) return [];

    try {
      return findRecommendedEventDates({
        startDate,
        rangeDays,
        mode: recommendationMode,
        limit: 12,
      });
    } catch {
      return [];
    }
  }, [rangeDays, recommendationMode, startDate]);

  const primaryEventResult = calculation.eventResults.find((item) => item.divisor === 5);
  const activePetung4System = PETUNG_4_SYSTEMS[petung4Context];
  const activePetung4Result = calculation.petung4[petung4Context];
  const activePetung4Total = petung4Context === 'salakiRabi' ? calculation.coupleNeptu : calculation.eventNeptu;

  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">Preset Tulungagung / Jawa Mataraman</p>
          <h1>Petung Hari Lamaran & Pernikahan</h1>
        </div>
        <div className="heroSeal">
          <span>{eventWeton.day}</span>
          <strong>{eventWeton.pasaran}</strong>
        </div>
      </section>

      <section className="workspaceGrid">
        <div className="controlStack">
          <section className="inputGrid">
            <WetonPicker title="Weton Laki-laki" config={male} onChange={setMale} />
            <WetonPicker title="Weton Perempuan" config={female} onChange={setFemale} />
          </section>

          <WetonPicker
            title="Hari Acara"
            className="panel eventPanel"
            config={eventConfig}
            onChange={setEventConfig}
          />
        </div>

        <div className="insightStack">
          <BadDayAssessmentPanel assessment={eventAssessment} canAssess={eventConfig.useDate} />
          <WayahAssessmentPanel assessment={wayahAssessment} time={eventTime} onTimeChange={setEventTime} />
          <TravelDeparturePanel assessment={travelAssessment} />
        </div>
      </section>

      <section className="decisionGrid">
        <section className="summary panel">
          <h2>Ringkasan Hitungan</h2>
          <div className="formulaGrid">
            <div>
              <span>Neptu laki-laki</span>
              <strong>{calculation.maleNeptu}</strong>
            </div>
            <div>
              <span>Neptu perempuan</span>
              <strong>{calculation.femaleNeptu}</strong>
            </div>
            <div>
              <span>x = pasangan</span>
              <strong>{calculation.coupleNeptu}</strong>
            </div>
            <div>
              <span>y = hari acara</span>
              <strong>{calculation.eventNeptu}</strong>
            </div>
            <div className="totalBox">
              <span>z = x + y</span>
              <strong>{calculation.totalNeptu}</strong>
            </div>
          </div>
        </section>

        <section className="resultSection">
          <div>
            <p className="eyebrow">Bacaan tambahan</p>
            <h2>Pembagi 5 pasangan dan acara</h2>
          </div>
          {primaryEventResult ? <ResultCard result={primaryEventResult} primary /> : null}
        </section>
      </section>

      <section className="panel petung4Panel">
        <div className="panelHeader">
          <div>
            <p className="eyebrow">Pembagi 4</p>
            <h2>Konteks menentukan urutan</h2>
          </div>
          <div className="segmented" aria-label="Pilih konteks pembagi 4">
            {PETUNG_4_CONTEXTS.map((context) => {
              const system = PETUNG_4_SYSTEMS[context];
              const isActive = context === petung4Context;

              return (
                <button
                  key={context}
                  type="button"
                  className={isActive ? 'active' : ''}
                  aria-pressed={isActive}
                  onClick={() => setPetung4Context(context)}
                >
                  {system.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="petung4Grid">
          <div>
            <p className="contextLabel">{activePetung4System.name}</p>
            <ResultCard
              result={activePetung4Result}
              primary
              label={`${activePetung4System.basisLabel} ${activePetung4Total}`}
            />
            <p className="formulaText">Dasar: {activePetung4System.formula} dibagi 4.</p>
          </div>
          <Petung4ResultTable context={petung4Context} />
        </div>
      </section>

      <section className="cardsGrid">
        <ResultCard result={calculation.coupleResult8} primary label="Pasangan bagi 8" />
        <RemainderPairCard result={calculation.coupleResult9} />
        <CoupleDayResultCard result={calculation.coupleDayResult} />
        {calculation.eventResults
          .filter((item) => item.divisor !== 5 && item.divisor !== 3)
          .map((result) => (
            <ResultCard key={result.divisor} result={result} />
          ))}
        <BetaljemurRemainder3Card calculation={marriageRemainder3} />
      </section>

      <section className="panel detailPanel">
        <div className="panelHeader">
          <div>
            <p className="eyebrow">Detail pembagian lain</p>
            <h2>Tabel tibo lengkap</h2>
          </div>
          <div className="segmented" aria-label="Pilih detail pembagian">
            {DETAIL_CONTEXTS.map((context) => {
              const isActive = context.id === detailContext;

              return (
                <button
                  key={context.id}
                  type="button"
                  className={isActive ? 'active' : ''}
                  aria-pressed={isActive}
                  onClick={() => setDetailContext(context.id)}
                >
                  {context.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="petung4Grid">
          <div>
            <DetailResultCard
              context={detailContext}
              calculation={calculation}
              marriageRemainder3={marriageRemainder3}
            />
            <p className="formulaText">
              {detailContext === 'pasangan9'
                ? 'Dasar: neptu weton laki-laki dan perempuan masing-masing dibagi 9, lalu sisanya dipasangkan.'
                : detailContext === 'hariLahir'
                  ? 'Dasar: hari lahir laki-laki dan perempuan dicocokkan menurut tabel suami istri Betaljemur.'
                  : detailContext === 'pasangan8'
                    ? 'Dasar: total neptu pasangan dibagi 8.'
                    : detailContext === 'bagi3'
                      ? 'Dasar No. 25: jumlah neptu hari, pasaran, bulan Jawa, tanggal Jawa, dan tahun Jawa kedua calon, lalu dibagi 3.'
                      : 'Dasar: total z = neptu pasangan + neptu hari acara dibagi sesuai tabel.'}
            </p>
          </div>
          <DetailResultTable context={detailContext} />
        </div>
      </section>

      <section className="panel recommendationPanel">
        <div className="panelHeader">
          <div>
            <p className="eyebrow">Pencari hari baik</p>
            <h2>Rekomendasi menurut jenis acara</h2>
          </div>
        </div>

        <div className="segmented recommendationMode" aria-label="Pilih jenis acara rekomendasi">
          {RECOMMENDATION_MODES.map((mode) => {
            const isActive = mode.id === recommendationMode;

            return (
              <button
                key={mode.id}
                type="button"
                className={isActive ? 'active' : ''}
                aria-pressed={isActive}
                onClick={() => setRecommendationMode(mode.id)}
              >
                {mode.label}
              </button>
            );
          })}
        </div>

        <div className="gridTwo compact">
          <label className="field">
            <span>Mulai tanggal</span>
            <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
          </label>
          <label className="field">
            <span>Rentang hari</span>
            <input
              min="7"
              max="730"
              type="number"
              value={rangeDays}
              onChange={(event) => setRangeDays(Number(event.target.value))}
            />
          </label>
        </div>

        {recommendations.length > 0 ? (
          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Hijriah</th>
                  <th>Tanggal Jawa</th>
                  <th>Weton acara</th>
                  <th>Status</th>
                  <th>Acuan baik</th>
                  <th>Jam ijab/tarub</th>
                  <th>Lelungan</th>
                  <th>Jam berangkat</th>
                  <th>Catatan</th>
                </tr>
              </thead>
              <tbody>
                {recommendations.map((item) => (
                  <tr key={item.date}>
                    <td>{item.date}</td>
                    <td>
                      {item.hijri.day} {item.hijri.month} {item.hijri.year} {item.hijri.era}
                    </td>
                    <td>
                      {item.javanese.day} {item.javanese.month} {item.javanese.year}
                    </td>
                    <td>
                      {item.event.day} {item.event.pasaran}
                    </td>
                    <td>
                      <span className={`warningPill ${item.scoreLevel}`}>{formatLevel(item.scoreLevel)}</span>
                    </td>
                    <td>{formatReasonList(item.reasons, 'Lolos filter kitab')}</td>
                    <td>
                      {item.bestSaatIjab
                        ? `${item.bestSaatIjab.range} · ${item.bestSaatIjab.name}`
                        : recommendationMode === 'akadNikah' || recommendationMode === 'tarub'
                          ? 'Belum ada saat Slamet/Rejeki'
                          : '-'}
                    </td>
                    <td>
                      {item.travel.tibo.name} · hindari {item.travel.kalaDirection}
                    </td>
                    <td>{formatSlotList(item.travel.slots145, formatSlotList(item.travel.slots146Day))}</td>
                    <td>
                      {item.badDayWarnings.length > 0
                        ? item.badDayWarnings.map((warning) => warning.name).join(', ')
                        : recommendationMode === 'akadNikah'
                          ? `Lolos filter No.11-34; ${item.akadDayAdvice ? `hari ke-${item.akadDayAdvice.occurrence}` : 'hari baik'}`
                          : 'Lolos filter sesuai jenis acara'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="emptyState">Belum ada tanggal yang lolos filter kitab pada rentang ini.</p>
        )}
      </section>

      <section className="panel seoHub">
        <div className="panelHeader">
          <div>
            <p className="eyebrow">Panduan petung</p>
            <h2>Topik yang sering dicari</h2>
          </div>
        </div>
        <div className="seoLinkGrid">
          {SEO_PAGE_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="seoLinkCard">
              <span>{item.eyebrow}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="note">
        <h2>Catatan pakem</h2>
        <p>
          Acuan utama kini memakai {BETALJEMUR_SOURCE}: neptu hari, pasaran, bulan, tahun, pembagi 4
          salaki rabi, pembagi 9 pasangan, hari lahir pasangan, bulan baik/tidak baik, Kunarpa/Sangarwarsa,
          Anggarakasih, Taliwangke, Samparwangke, tanggal sangar, Bangas Padewan, dan tanggal naas. Pakem
          lokal tetap bisa berbeda menurut keluarga atau daerah.
        </p>
      </section>
    </main>
  );
}
