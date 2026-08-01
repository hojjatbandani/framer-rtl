import { Check, Dash } from '@/components/icons';
import { Reveal } from '@/components/motion';
import type { Dictionary } from '@/lib/dictionaries';

/**
 * `yes` / `no` are tokens rather than translated words — they render as marks,
 * so the table stays scannable and the dictionaries stay small.
 */
function Cell({ value }: { value: string }) {
  if (value === 'yes') {
    return (
      <span className="cmp-mark cmp-yes">
        <Check size={15} />
      </span>
    );
  }
  if (value === 'no') {
    return (
      <span className="cmp-mark cmp-no">
        <Dash size={15} />
      </span>
    );
  }
  return <span className="cmp-text">{value}</span>;
}

export function Compare({
  t,
  tiers
}: {
  t: Dictionary['services']['compare'];
  tiers: Dictionary['services']['tiers'];
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            {t.badge}
          </span>
          <h2 className="h-section">{t.title}</h2>
          <p className="lede">{t.subtitle}</p>
        </Reveal>

        <Reveal>
          <div className="cmp-wrap">
            <table className="cmp">
              <caption className="sr-only">{t.title}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.feature}</th>
                  {tiers.items.map((tier) => (
                    <th key={tier.id} scope="col" data-popular={tier.popular}>
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.values.map((value, i) => (
                      <td key={`${row.label}-${i}`} data-popular={tiers.items[i]?.popular}>
                        <Cell value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
