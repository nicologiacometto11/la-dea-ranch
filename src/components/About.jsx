import { about } from '../content.js'

export default function About() {
  return (
    <section id="chi-siamo" className="section">
      <div className="container container--narrow reveal">
        <h2>{about.title}</h2>
        <p className="lead lead--big">{about.lead}</p>
        <p>{about.text}</p>
      </div>
    </section>
  )
}
