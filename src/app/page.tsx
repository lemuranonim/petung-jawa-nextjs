'use client';

import { useMemo, useState } from 'react';
import {
  calculatePetung,
  DAY_NEPTU,
  DAYS,
  DayName,
  findRecommendedEventDates,
  PASARAN,
  PASARAN_NEPTU,
  PasaranName,
  PETUNG_4_CONTEXTS,
  PETUNG_4_SYSTEMS,
  Petung4Context,
  PetungResult,
  wetonFromIsoDate,
  WetonInput,
} from '@/lib/petung';

function getLocalIsoDate(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const todayIso = getLocalIsoDate();

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
  const [startDate, setStartDate] = useState(todayIso);
  const [rangeDays, setRangeDays] = useState(120);
  const [petung4Context, setPetung4Context] = useState<Petung4Context>('salakiRabi');

  const maleWeton = useMemo(() => getActiveWeton(male), [male]);
  const femaleWeton = useMemo(() => getActiveWeton(female), [female]);
  const eventWeton = useMemo(() => getActiveWeton(eventConfig), [eventConfig]);

  const calculation = useMemo(
    () => calculatePetung({ male: maleWeton, female: femaleWeton, event: eventWeton }),
    [maleWeton, femaleWeton, eventWeton],
  );

  const recommendations = useMemo(
    () =>
      findRecommendedEventDates({
        male: maleWeton,
        female: femaleWeton,
        startDate,
        rangeDays,
        targetRemainder5: 3,
        limit: 12,
      }),
    [maleWeton, femaleWeton, rangeDays, startDate],
  );

  const primaryEventResult = calculation.eventResults.find((item) => item.divisor === 5);
  const activePetung4System = PETUNG_4_SYSTEMS[petung4Context];
  const activePetung4Result = calculation.petung4[petung4Context];
  const activePetung4Total = petung4Context === 'salakiRabi' ? calculation.coupleNeptu : calculation.eventNeptu;

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Preset Tulungagung / Jawa Mataraman</p>
        <h1>Petung Hari Lamaran & Pernikahan</h1>
        <p>
          Hitung weton pasangan dan hari acara. Pembagi 4 dipisahkan antara pakem Salaki Rabi dan pakem
          lelungan/golek hasil supaya urutan tibo tidak bercampur.
        </p>
      </section>

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
          <p className="eyebrow">Acuan hari acara</p>
          <h2>Hasil utama pembagi 5</h2>
        </div>
        {primaryEventResult ? <ResultCard result={primaryEventResult} primary /> : null}
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
        {calculation.eventResults
          .filter((item) => item.divisor !== 5)
          .map((result) => (
            <ResultCard key={result.divisor} result={result} />
          ))}
      </section>

      <section className="panel recommendationPanel">
        <div className="panelHeader">
          <div>
            <p className="eyebrow">Pencari hari baik</p>
            <h2>Rekomendasi tanggal sisa 3 / pembagi 5</h2>
          </div>
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
                  <th>Weton acara</th>
                  <th>Neptu acara</th>
                  <th>Total z</th>
                  <th>Hasil</th>
                </tr>
              </thead>
              <tbody>
                {recommendations.map((item) => (
                  <tr key={item.date}>
                    <td>{item.date}</td>
                    <td>
                      {item.event.day} {item.event.pasaran}
                    </td>
                    <td>{item.eventNeptu}</td>
                    <td>{item.totalNeptu}</td>
                    <td>
                      Sisa {item.result5.remainder} · {item.result5.meaning.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="emptyState">Belum ada tanggal yang masuk sisa 3 pada rentang ini.</p>
        )}
      </section>

      <section className="note">
        <h2>Catatan pakem</h2>
        <p>
          Pembagi 4 jodoh memakai Gentho, Gembili, Sri, Punggel dari neptu pasangan. Pembagi 4 hari,
          lelungan, atau golek hasil memakai Kliyeg/Riyeg, Mentheg/Menthek, Jotho, Kemil dari neptu hari.
        </p>
      </section>
    </main>
  );
}
