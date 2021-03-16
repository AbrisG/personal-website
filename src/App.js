import { Navbar } from "./components/navbar";
import { Landing } from "./components/landing";
import "./App.css";

function App() {
  return (
    <div>
      <script src="https://unpkg.com/feather-icons"></script>
      <Navbar />
      <div className="site-layout">
        <div className="center">
          <Landing />
        </div>
      </div>
      <script>feather.replace()</script>
    </div>
  );
}

export default App;
