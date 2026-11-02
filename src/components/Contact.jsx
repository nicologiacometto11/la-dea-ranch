import { site } from '../content.js'

export default function Contact() {
  return (
    <section id="contatti" className="section section--alt">
      <div className="container container--narrow">
        <h2>Contatti</h2>
        <ul className="contact-list">
          <li><strong>Dove:</strong> {site.address}</li>
          <li><strong>Telefono:</strong> {site.phone}</li>
          <li><strong>Email:</strong> {site.email}</li>
          <li>
            <a href={site.instagram} target="_blank" rel="noreferrer">Seguici su Instagram</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
