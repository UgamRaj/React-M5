import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <>
      <main>
        <SideBar />
        <div className="main-content">
          <NavBar />
        </div>
      </main>
    </>
  );
}

export default App;
