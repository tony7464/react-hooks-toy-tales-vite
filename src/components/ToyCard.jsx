import React from "react";

const API_URL = "http://localhost:3001/toys";

function ToyCard({ toy, onDonateToy, onUpdateToy }) {
  // PATCH this toy's likes, then send the updated toy back up to App.
  function handleLikeClick() {
    fetch(`${API_URL}/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((response) => response.json())
      .then((updatedToy) => onUpdateToy(updatedToy));
  }

  // DELETE this toy, then tell App to drop it from state.
  function handleDonateClick() {
    fetch(`${API_URL}/${toy.id}`, {
      method: "DELETE",
    }).then(() => onDonateToy(toy.id));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDonateClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
