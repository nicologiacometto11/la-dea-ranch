import { site } from '../content.js'

// Barra fissa in basso, solo su telefono: chiamare o arrivare al ranch con un tocco
export default function CallBar() {
  return (
    <div className="callbar">
      <a className="callbar__btn callbar__btn--main" href={site.phoneHref}>Chiama</a>
      <a className="callbar__btn" href={site.mapsUrl} target="_blank" rel="noreferrer">Come arrivare</a>
    </div>
  )
}
