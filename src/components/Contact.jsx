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
            <p>{site.phone}</p>
            <a className="btn btn--solid" href={site.phoneHref}>Chiama ora</a>
          </article>
          <article className="card reveal" style={{ '--i': 2 }}>
            <h3>Seguici</h3>
            <p>Foto, novità e iniziative sul nostro profilo Instagram.</p>
            <a className="btn btn--solid" href={site.instagram} target="_blank" rel="noreferrer">@ladearanch</a>
          </article>
        </div>
        {site.email && <p className="lead">Email: <a href={`mailto:${site.email}`}>{site.email}</a></p>}
      </div>
    </section>
  )
}
