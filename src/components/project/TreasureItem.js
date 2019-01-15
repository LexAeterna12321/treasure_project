import React from "react";
import { Link } from "react-router-dom";
function TreasureItem({ treasure }) {
  return (
    <div className="col s12 m8">
      <div className="card">
        <div className="card-image">
          <img src="img/chest.png" alt="chest" />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <ul>
              <li>{treasure.item1}</li>
              <li>{treasure.item2}</li>
            </ul>
          </div>
          <div className="card-action">
            <Link to={`/treasures/${treasure.id}`}>{treasure.title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreasureItem;
