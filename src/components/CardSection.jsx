export default function CardSection({ id, title, intro, items, alt = false }) {
  return (
    <section id={id} className={`section${alt ? ' section--alt' : ''}`}>
      <div className="container">
        <h2>{title}</h2>
        {intro && <p className="lead">{intro}</p>}
        <div className="cards">
          {items.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
