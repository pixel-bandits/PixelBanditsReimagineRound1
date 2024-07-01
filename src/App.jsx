import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";
import About from "./components/about";
import Footer from "./components/footer";
// about page
function App() {
  return (
    <>
      <About />
      <Footer />
    </>
  );
}

export default App;
