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
// Pagine placeholder (da implementare successivamente)
// const Home = () => <div className="min-h-screen bg-white text-blue-800 p-8">Home Page</div>;
// const Eventi = () => <div className="min-h-screen bg-white text-blue-800 p-8">Eventi Page</div>;
// const Discipline = () => <div className="min-h-screen bg-white text-blue-800 p-8">Discipline Page</div>;
// const ChiSiamo = () => <div className="min-h-screen bg-white text-blue-800 p-8">Chi Siamo Page</div>;
// const Contatti = () => <div className="min-h-screen bg-white text-blue-800 p-8">Contatti Page</div>;

function App() {
  return (
    <Router>
      {/* <div className="flex flex-col justify-between min-h-screen w-full overflow-x-hidden bg-white"> */}
      <div className="flex flex-col justify-between min-h-screen w-screen bg-white overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventi" element={<Events />} />
            <Route path="/eventi/:id" element={<SingleEvent />} />
            <Route path="/radio" element={<Radios />} />
            <Route path="/about-us" element={<ChiSiamo />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
