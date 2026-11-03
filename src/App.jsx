import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import CardSection from './components/CardSection.jsx'
import WinterCamp from './components/WinterCamp.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { horseCenter, farm } from './content.js'

// Fa comparire con una dissolvenza gli elementi .reveal quando entrano nello schermo
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CardSection
          id="centro-ippico"
          title={horseCenter.title}
          intro={horseCenter.intro}
          items={horseCenter.services}
          image={horseCenter.image}
          alt
        />
        <CardSection
          id="azienda-agricola"
          title={farm.title}
          intro={farm.intro}
          items={farm.products}
        />
        <WinterCamp />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
