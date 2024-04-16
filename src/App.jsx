import { useState } from "react";
import "./App.css";
// import './color.css'
// import './normalize.css'
import { Header, Hero, Service } from "./components/index";
import ConatinerService from "./components/ConatinerService/ConatinerService";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="page-scroll">
        <div className="barba-wrapper" data-barba="wrapper">
          <main data-barba="container">
            <div className="container">
              <div className="page-wrapper">
                <Header />
                <Hero />
                <ConatinerService title="Services" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
