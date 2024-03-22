
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AboutUs from './components/about'
import Home from './components/home'
import AllNews from './components/all-news'
import Contact from './components/contact-us'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="all-news" element={<AllNews />} />
        </Route>
        <Route path="/" element={<Footer/>}>
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
     <Footer />

     {/* <Fetch /> */}
    </>
  )
}

export default App
