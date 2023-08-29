import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav_Bar from "./components/Nav_bar";

function App() {
  return (
    <div className="App_css">
      <header className="home_header">
        <Nav_Bar />
      </header>
      <main className="home_main">
        <div className="home_main_left">
          <div className="home_main_left_cont">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <p className="home_main_left_title">SPACE</p>
            <p className="home_main_left_text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="home_main_right">
          <a className="home_main_right_button" href="#">
            EXPLORE
          </a>
        </div>
      </main>
      <Nav_Bar />
    </div>
  );
}

export default App;
