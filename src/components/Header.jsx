import { site, nav } from '../content.js'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand">{site.name}</a>
        <nav className="header__nav" aria-label="Principale">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
