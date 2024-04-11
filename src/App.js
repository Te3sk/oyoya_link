import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

function App() {
  return (
    <div className="relative flex flex-col bg-black">
      {/* header */}
      <Header/>
      {/* central */}
      <MainBody/>
      {/* bottom */}
      <Footer/>
    </div>
  );
}

export default App;
