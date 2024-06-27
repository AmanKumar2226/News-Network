
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AboutUs from './Pages/about'
import Home from './Pages/home'
import AllNews from './Pages/all-news'
import Contact from './Pages/contact-us'
import {Route, Routes} from 'react-router-dom'
import Category from './components/category-navbar'
import Sports from './Pages/sports'
import Entertainment from './Pages/entertainment'
import General from './Pages/general'
import Health from './Pages/health'
import Science from './Pages/science'
import Business from './Pages/business'
import Technology from './Pages/technology'
import Breadcrumb from "./components/breadcrumb";
import Headlines from './Pages/top-headlines'
import Apple from './Pages/apple'
import ForgotPassword from './Pages/forgot-password'
import NNIArticles from './Pages/NNI-articles';
import Weather from './components/weather';
import NewsDescription from './Pages/NewsDescription';
import SignUp from './Pages/forms/SignUp';
import Login from './Pages/forms/Login'
import NotFound from './components/NotFound'
import Account from './Pages/Account'
import BackToTopButton from './utils/BackToTop'
import ThemeSwitcher from './utils/ThemeSwitcher'

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
          <ThemeSwitcher/>
          <BackToTopButton/>
      <Footer />

      
    </>
  )
}

export default App
