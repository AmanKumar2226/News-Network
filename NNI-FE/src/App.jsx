
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AboutUs from './components/about'
import Home from './components/home'
import AllNews from './components/all-news'
import Contact from './components/contact-us'
import {Route, Routes} from 'react-router-dom'
import Category from './components/category-navbar'
import Sports from './components/sports'
import Entertainment from './components/entertainment'
import General from './components/general'
import Health from './components/health'
import Science from './components/science'
import Business from './components/business'
import Technology from './components/technology'
import Breadcrumb from "./components/breadcrumb";
import Headlines from './components/top-headlines'
import Apple from './components/apple'
import ForgotPassword from './components/forgot-password'
import NNIArticles from './components/NNI-articles';
import Weather from './components/weather';
import NewsDescription from './components/NewsDescription';
import SignUp from './components/forms/SignUp';
import Login from './components/forms/Login'
import NotFound from './components/NotFound'
import Account from './components/Account'
import BackToTopButton from './components/BackToTop'


function App(){
  return (
    <>
    <Navbar />
    <Category/> 
    <Breadcrumb/>
       <Routes>
       <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="all-news" element={<AllNews />} />
          <Route path="login" element={<Login/>}/>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="contact-us" element={<Contact />}/>
          <Route path="sports" element={<Sports />}/>
          <Route path="entertainment" element={<Entertainment />}/>
          <Route path="general" element={<General />}/>
          <Route path="health" element={<Health />}/>
          <Route path="science" element={<Science />}/>
          <Route path="business" element={<Business />}/>
          <Route path="technology" element={<Technology />}/>
          <Route path="headlines" element={<Headlines  />}/>
          <Route path="apple-articles-from-yesterday" element={<Apple  />}/>
          <Route path="forgot-password" element={<ForgotPassword  />}/>
          <Route path="articles-from-us" element={<NNIArticles/>}/>
          <Route path="weather-today" element={<Weather/>}/>
          <Route path="news-description" element={<NewsDescription/>}/>
      </Routes> 
          <BackToTopButton/>
      <Footer />

     
    </>
  )
}

export default App
