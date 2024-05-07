import Header from "./components/Header"
import Hero from "./components/Hero"
import Crew from "./components/Crew.jsx";
import Destination from "./components/Destination.jsx"
import Technology from "./components/Technology.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

    <Router>
    <Header/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Destination" element={<Destination/>} />
          <Route path="/Crew" element={<Crew/>} />
          <Route path="/Technology" element={<Technology/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App