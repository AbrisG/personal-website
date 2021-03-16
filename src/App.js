import { Navbar } from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div>
      <script src="https://unpkg.com/feather-icons"></script>
      <Navbar />
      <div className="filler"></div>
      <script>feather.replace()</script>
    </div>
  );
}

export default App;
