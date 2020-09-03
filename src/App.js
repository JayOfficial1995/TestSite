import React from "react";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Title from "./components/Title/Title";
import Cards from "./components/Cards/Cards";
import { actorsData } from "./jsonElements/actorsData";

function App() {
  return (
    <section className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="detail-wrapper">
          <Title />
        </section>
        <section className="actors-card-section">
          {actorsData.map((cardData, index) => (
            <Cards
              cardImg={cardData.actorImg}
              name={cardData.actorName}
              relation={cardData.actorRelation}
            />
          ))}
        </section>
      </main>
    </section>
  );
}

export default App;
