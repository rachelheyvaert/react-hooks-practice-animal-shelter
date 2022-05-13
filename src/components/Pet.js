import React from "react";

function Pet({petObj, onAdoptPet}) {


  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
        {petObj.name} 
          <br></br>
          {petObj.gender}
        </span>
        <div className="meta">
          <span className="date">{petObj.type}</span>
        </div>
        <div className="description">
          <p>Age: {petObj.age}</p>
          <p>Weight: {petObj.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {petObj.isAdopted ? (
        <button className="ui disabled button">Already adopted</button>
        ) : (
        <button onClick={onAdoptPet} className="ui primary button">Adopt pet</button>
        )}
        </div>
    </div>
  );
}

export default Pet;
