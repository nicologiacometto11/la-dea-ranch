import { useState } from 'react'
import { site, nav, logo } from '../content.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={close}>
          <img src={logo.src} alt="" width="40" height="40" />
          {site.name}
        </a>
        <button
          className="header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <nav id="menu" className={`header__nav${open ? ' is-open' : ''}`} aria-label="Principale">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={close}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
