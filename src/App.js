import { Navbar } from "./components/navbar";
import { Landing } from "./components/landing";
import { Education } from "./components/education";

import "./App.css";

function App() {
  return (
    <div>
      <script src="https://unpkg.com/feather-icons"></script>
      <Navbar />
      <div className="site-layout">
        <div className="center">
          <Landing />
          <Education />
        </div>
      </div>
      <script>feather.replace()</script>
    </div>
  );
}

export default App;
