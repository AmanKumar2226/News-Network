
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


function App() {

  return (
    <>
    <Navbar />
    <Category /> 
       <Routes>
          <Route path='/' element={<Form />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="all-news" element={<AllNews />} />
          <Route path="login-form" element={<Form />} />
          <Route path="contact-us" element={<Contact />}/>
      </Routes> 
    
      <Footer />

     
    </>
  )
}

export default App
