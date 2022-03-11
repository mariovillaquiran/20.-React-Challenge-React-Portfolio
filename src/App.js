import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Homepage />
      <NavBar />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
