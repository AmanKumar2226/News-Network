
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AboutUs from './components/about'
import Home from './components/home'
import AllNews from './components/all-news'
import Contact from './components/contact-us'
import {Route, Routes} from 'react-router-dom'
import Form from './components/form'
import Category from './components/category-navbar'
import Sports from './components/sports'
import Entertainment from './components/entertainment'
import General from './components/general'
import Health from './components/health'
import Science from './components/science'
import Business from './components/business'
import Technology from './components/technology'
import Breadcrumb from "./components/breadcrumb";

function App() {

  return (
    <>
    <Navbar />
    <Category /> 
    <Breadcrumb/>
       <Routes>
          <Route path='form' element={<Form />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="all-news" element={<AllNews />} />
          <Route path="login-form" element={<Form />} />
          <Route path="contact-us" element={<Contact />}/>
          <Route path="sports" element={<Sports />}/>
          <Route path="entertainment" element={<Entertainment />}/>
          <Route path="general" element={<General />}/>
          <Route path="health" element={<Health />}/>
          <Route path="science" element={<Science />}/>
          <Route path="business" element={<Business />}/>
          <Route path="technology" element={<Technology />}/>
      </Routes> 
    
      <Footer />

     
    </>
  )
}

export default App
