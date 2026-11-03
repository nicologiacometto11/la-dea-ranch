export default function CardSection({ id, title, intro, items, image, alt = false }) {
  return (
    <section id={id} className={`section${alt ? ' section--alt' : ''}`}>
      <div className="container">
        <div className={image ? 'split split--rev' : undefined}>
          <div className="reveal">
            <h2>{title}</h2>
            {intro && <p className="lead">{intro}</p>}
          </div>
          {image && (
            <figure className="photo reveal">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          )}
        </div>
        <div className="cards">
          {items.map((item, i) => (
            <article key={item.title} className="card reveal" style={{ '--i': i }}>
              <span className="card__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
