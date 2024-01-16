import "./App.css";
import Contact from "./components/Contact/Contact";
import Foods from "./components/Foods/Foods";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Restraunts from "./components/Restruants/Restraunts";
import Quote from "./components/Quotes/Quote.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MealInfo from "./components/Foods/MealInfo.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/restraunts" element={<Restraunts />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/foods/:id" element={<MealInfo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
