import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddNews from "./components/AddNews";
import SideBar from "./components/SideBar";
import Welcome from "./components/Welcome";
import UserList from "./components/UserList";
import News from "./components/News";
import EditNews from "./components/EditNews";

function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/news" element={<News />} />
        <Route path="/edit-news/:id" element={<EditNews />} />
      </Routes>
      </>
  );
}

export default App;
