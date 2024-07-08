import AddNews from "./components/AddNews"
import SideBar from "./components/SideBar"
import { Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import UserList from "./components/UserList"
import News from "./components/News"

function App() {
  return (
    <>

      <SideBar/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/add-news" element={<AddNews/>} />
        <Route path="/users" element={<UserList/>} />
        <Route path="/news" element={<News/>} />
      </Routes>
      
    </>
  )
}

export default App
