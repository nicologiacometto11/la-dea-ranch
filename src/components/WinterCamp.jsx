import { winterCamp as w, site } from '../content.js'

export default function WinterCamp() {
  return (
    <section id="winter-camp" className="section winter">
      <div className="container winter__grid">
        <a className="winter__flyer reveal" href={w.flyer.src} target="_blank" rel="noreferrer">
          <img src={w.flyer.src} alt={w.flyer.alt} loading="lazy" />
        </a>
        <div className="reveal">
          <p className="eyebrow">Campo stagionale per bambini</p>
          <h2>{w.title}</h2>
          <p className="lead">{w.intro}</p>

          <h3>Giornate disponibili</h3>
          <ul className="chips chips--light">
            {w.days.map((d) => <li key={d}>{d}</li>)}
          </ul>

          <h3>Orario</h3>
          <p>{w.hours}</p>

          <h3>Attività</h3>
          <ul className="list">
            {w.activities.map((a) => <li key={a}>{a}</li>)}
          </ul>
          <p className="note">{w.note}</p>

          <a className="btn btn--solid" href={site.phoneHref}>{w.info} · {site.phone}</a>
        </div>
      </div>
    </section>
  )
}
