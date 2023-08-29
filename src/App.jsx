import "./App.css";
import "animate.css/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./components/HomeSections/Home";
// import AboutMain from "./components/AboutMain";
// import { Fragment } from "react";
// import Contact from "./components/HomeSections/Contact";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Fragment><AboutMain /><Contact/></Fragment>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
