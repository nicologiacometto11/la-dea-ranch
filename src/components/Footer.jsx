import { site } from '../content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 {site.name} · {site.location}</p>
      </div>
    </footer>
  )
}
