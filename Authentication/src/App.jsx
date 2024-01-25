import "./App.css";
import Main from "./components/Main";
import AuthProvider from "./components/context/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </>
  );
}

export default App;
