import { hero, site } from '../content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">{site.location}</p>
        <h1>{hero.title}</h1>
        <p className="hero__sub">{hero.subtitle}</p>
        <a className="btn" href={hero.cta.href}>{hero.cta.label}</a>
      </div>
    </section>
  )
}
