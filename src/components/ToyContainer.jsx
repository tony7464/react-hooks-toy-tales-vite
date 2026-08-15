import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonateToy, onUpdateToy }) {
  return (
    <div id="toy-collection">
      {/* Each toy object from App state becomes one ToyCard. */}
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDonateToy={onDonateToy}
          onUpdateToy={onUpdateToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
