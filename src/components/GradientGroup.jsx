import * as React from "react";

const GradientGroup = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="cdgc-text-left mt-5 pt-5">
        <h2>Tu resultado es:</h2>
      </div>
      <div className="row g-0 text-center mt-5">
        <div className="col-sm-12 col-md-12 cdgc-gradient"></div>
      </div>
      <div className="row g-0 text-center mt-3">
        <div className="col-sm-3 col-md-2 d-flex justify-content-center">
          <div className="cdgc-cub cdgc-blue">
          </div>
        </div>
        <div className="col-sm-3 col-md-3 d-flex justify-content-center">
          <div className="cdgc-cub cdgc-green">
          </div>
        </div>
        <div className="col-sm-3 col-md-2 d-flex justify-content-center">
          <div className="cdgc-cub cdgc-green-lower ">
          </div>
        </div>
        <div className="col-sm-3 col-md-3 d-flex justify-content-center">
          <div className="cdgc-cub cdgc-yellow">
          </div>
        </div>
        <div className="col-sm-3 col-md-2 d-flex justify-content-center">
          <div className="cdgc-cub cdgc-orange">
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientGroup;
