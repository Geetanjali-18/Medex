import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Appointment from './Components/Appointment';
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ClientSection from './Components/ClientSection';
// import ClientSectionBillings from './Components/ClientSectionBillings';
import ClientSectionBilling from './Components/ClientSectionBilling';
import Prescription from './Components/Prescription';
import Sidebar from './Components/Sidebar';
import Booking from './Components/Booking';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Service from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Chatbot from './Components/ChatBot';
// import Appointment from './Components/Appointment';

function App() {
  return (
    <>
      <BrowserRouter>
        <Chatbot />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/appointment" element={<Appointment />} />
          <Route exact path="/client" element={<ClientSection />} />
          <Route exact path="/clientbill" element={<ClientSectionBilling />} />
          <Route exact path="/prescription" element={<Prescription />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
