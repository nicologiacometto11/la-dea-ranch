import { hero, logo } from '../content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <img className="hero__logo" src={logo.src} alt={logo.alt} width="220" height="220" />
        <div className="hero__text">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero__sub">{hero.subtitle}</p>
          <div className="hero__ctas">
            {hero.ctas.map((c) => (
              <a key={c.label} className={c.primary ? 'btn' : 'btn btn--ghost'} href={c.href}>{c.label}</a>
            ))}
          </div>
          <ul className="chips">
            {hero.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
      </div>
      <svg className="hero__wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,90 1440,30 L1440,80 L0,80 Z" />
      </svg>
    </section>
  )
}
