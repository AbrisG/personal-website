import { Navbar } from "./components/navbar";
import { Landing } from "./components/landing";
import { Education } from "./components/education";
import { TypingEffect } from "./components/typingeffect";
import { Slideshow } from "./components/slideshow";

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
          <Slideshow />
        </div>
      </div>
    </div>
  );
}

export default App;
