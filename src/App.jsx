import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import CardSection from './components/CardSection.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { horseCenter, farm } from './content.js'

export default function App() {
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
        />
        <CardSection
          id="azienda-agricola"
          title={farm.title}
          intro={farm.intro}
          items={farm.products}
          alt
        />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
