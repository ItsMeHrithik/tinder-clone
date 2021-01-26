import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";


function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_1130598318_411195.jpg",
    },
    {
      name: "Jeff Bezos",
      url:
        "https://content.fortune.com/wp-content/uploads/2020/02/GettyImages-1078542150.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
           <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
                <h3>{person.name}</h3>
            </div>
        
        
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
