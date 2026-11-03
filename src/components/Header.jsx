import { site, nav, logo } from '../content.js'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand">
          <img src={logo.src} alt="" width="40" height="40" />
          {site.name}
        </a>
        <nav className="header__nav" aria-label="Principale">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
