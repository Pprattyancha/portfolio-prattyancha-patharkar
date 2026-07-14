import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Review from './pages/Review';
import Project from './pages/Project';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/projects" element={<Project />} />
      </Routes>

    </>

  )
}

export default App;
