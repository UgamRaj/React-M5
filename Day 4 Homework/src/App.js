import "./App.css";
import Card from "./components/Card";
import Movies from "./movie.json";

function App() {
  return (
    <div className="App">
      <Card movies={Movies} />
    </div>
  );
}

export default App;
