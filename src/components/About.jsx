import { about } from '../content.js'

export default function About() {
  return (
    <section id="chi-siamo" className="section">
      <div className="container container--narrow">
        <h2>{about.title}</h2>
        <p>{about.text}</p>
      </div>
    </section>
  )
}
