import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API_URL = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  // Hold the full toy list in App so every child can share the same data.
  const [toys, setToys] = useState([]);

  // GET all toys once when the page first loads.
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((toyData) => setToys(toyData));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // After a successful POST, add the new toy to state so it shows up immediately.
  function handleAddToy(newToy) {
    setToys((currentToys) => [...currentToys, newToy]);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
