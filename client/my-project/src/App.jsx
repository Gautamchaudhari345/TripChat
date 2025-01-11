
import "animate.css"; 
import HomePages from "./pages/HomePages";
import Contact from './pages/Contact'
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Route, Routes } from "react-router-dom";
import ToursList from "./pages/Tours/ToursList";
import TourDescriptionPage from "./pages/Tours/TourDescriptionPage";
import Profile from "./pages/Profile";
import CreateTour from "./pages/Tours/CreateTour";
import AdminDashboard from "./pages/Tours/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages/>} ></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
        <Route path="/signin" element={<Login/>} ></Route>
        <Route path="/tours" element={<ToursList/>} ></Route>
        <Route path="/user/profile" element={<Profile/>}></Route>
        <Route path="/tours/discription" element={<TourDescriptionPage/>} ></Route>
        <Route path="/tours/create" element={<CreateTour/>} ></Route>
        <Route path="/admin/dashboard" element={<AdminDashboard/>} ></Route>
      </Routes>
    </>
      
  );
}

export default App;
