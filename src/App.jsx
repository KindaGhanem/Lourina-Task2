import './App.css'
import Navbar from './component/NavBar/Navbar'
import LkHero from './component/LkHero/LkHero'
import Description from './component/Description/Description'
import Vedio from './component/Vedio/Vedio'
import Offer from './component/Offer/Offer'
import Cards from './component/Cards/Cards'
import ContactUs from './component/ContactUs/ContactUs'
import Footer from './component/Footer/Footer'



function App() {

  return (
    <>
    <Navbar />
    <LkHero/>
    <Description />
    <Vedio />
    <Offer />
    <Cards />
    <ContactUs />
    <Footer />
    </>
  )
}

export default App
