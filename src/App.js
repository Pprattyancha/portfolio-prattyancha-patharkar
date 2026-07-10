import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Experience from './pages/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />

    </>

  )
}

export default App;
