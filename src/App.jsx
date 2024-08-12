import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Project from './components/Project'
import Skills from './components/Skills'
import Award from './components/Award'
import Testimoni from './components/Testimoni'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Project/>
      <Skills/>
      <Award/>
      <Testimoni/>
      <ContactForm/>
      <Footer/>
    </main>
  )
}

export default App
