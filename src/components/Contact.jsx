import { site } from '../content.js'

export default function Contact() {
  return (
    <section id="contatti" className="section section--alt">
      <div className="container">
        <h2 className="reveal">Contatti</h2>
        <div className="cards">
          <article className="card reveal">
            <h3>Dove siamo</h3>
            <p>{site.address}<br />{site.city}</p>
            <a className="btn btn--solid" href={site.mapsUrl} target="_blank" rel="noreferrer">Apri su Maps</a>
          </article>
          <article className="card reveal" style={{ '--i': 1 }}>
            <h3>Chiamaci</h3>
            <p>{site.phone}<br />{site.email}</p>
            <div className="btn-row">
              <a className="btn btn--solid" href={site.phoneHref}>Chiama ora</a>
              <a className="btn btn--solid" href={`mailto:${site.email}`}>Scrivi una mail</a>
            </div>
          </article>
          <article className="card reveal" style={{ '--i': 2 }}>
            <h3>Seguici</h3>
            <p>Foto, novità e iniziative sui nostri profili social.</p>
            <div className="btn-row">
              <a className="btn btn--solid" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a className="btn btn--solid" href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
