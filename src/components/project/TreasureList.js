import React from "react";
import TreasureItem from "./TreasureItem";

function TreasureList({ treasures }) {
  return (
    <div className="container">
      <div className="row">
        {treasures ? (
          treasures.map(treasure => {
            return (
              <div className="col s12 m6 l4" key={treasure.id}>
                <TreasureItem treasure={treasure} />
              </div>
            );
          })
        ) : (
          <div className="container ">
            <p> Loading content...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TreasureList;
