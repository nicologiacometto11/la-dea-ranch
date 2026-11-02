import { gallery } from '../content.js'

export default function Gallery() {
  return (
    <section id="galleria" className="section">
      <div className="container">
        <h2>Galleria</h2>
        {gallery.length === 0 ? (
          <p className="lead">Foto in arrivo.</p>
        ) : (
          <div className="gallery">
            {gallery.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
