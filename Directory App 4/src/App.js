import "./App.css";
import Main from "./Components/Main/Main";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RetrieveInfo from "./Components/RetrieveInfo/RetrieveInfo";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/retrieve" element={<RetrieveInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
