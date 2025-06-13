import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components imports
import Header from './components/Header';
import Footer from './components/Footer';
// Pages imports
import Home from './pages/Home';
import Events from './pages/Events';
import SingleEvent from './pages/SingleEvent';
import Radios from './pages/Radios';
import ChiSiamo from './pages/ChiSiamo';
import Contatti from './pages/Contatti';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between min-h-screen w-screen md:w-[98.958vw] 2xl:w-[99.243vw] bg-white overflow-x-hidden">
        <Header />
        <div className='bg-oyoya-purple/10'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventi" element={<Events />} />
            <Route path="/eventi/:id" element={<SingleEvent />} />
            <Route path="/radio" element={<Radios />} />
            <Route path="/about-us" element={<ChiSiamo />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
