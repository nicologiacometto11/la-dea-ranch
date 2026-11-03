export default function CardSection({ id, title, intro, items, alt = false }) {
  return (
    <section id={id} className={`section${alt ? ' section--alt' : ''}`}>
      <div className="container">
        <div className="reveal">
          <h2>{title}</h2>
          {intro && <p className="lead">{intro}</p>}
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
