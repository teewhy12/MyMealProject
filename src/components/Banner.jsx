import React from "react";

const Banner = () => {
  return (
    <div className="banner container d-flex justify-content-center justify-content-between align-items-center">
      <div className="text-start">
        <p className="display-5 text-white">Healthy Foods</p>
        <h1 className="text-white fw-light">Explore Different Meals</h1>
        <button className="btn btn-success text-white">See More Below</button>
      </div>
    </div>
  );
};

export default Banner;
