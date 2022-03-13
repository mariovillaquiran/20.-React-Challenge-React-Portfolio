import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
      <Portfolio />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
