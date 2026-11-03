import { about } from '../content.js'

export default function About() {
  return (
    <section id="chi-siamo" className="section">
      <div className="container split">
        <div className="reveal">
          <h2>{about.title}</h2>
          <p className="lead lead--big">{about.lead}</p>
          <p>{about.text}</p>
        </div>
        <figure className="photo photo--tall reveal">
          <img src={about.image.src} alt={about.image.alt} loading="lazy" />
        </figure>
      </div>
    </section>
  )
}
