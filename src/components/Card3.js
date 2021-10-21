import React from "react";

function Card3() {
  return (
    <div>
      <div className="card text-center">
        <div className="overflow">
          <img
            src="https://www.sktperfectdemo.com/demos/sktgym/wp-content/themes/gym-pro/images/team-img3.jpg"
            alt="image 1"
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title text-warning">Mr. XYZ</h4>
          <p className="card-text text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            nisi sed nesciunt fugiat accusantium minus. Placeat eos laborum
            repellendus voluptatem.
          </p>
          <a href="/" className="btn btn-outline-success">
            Go Anywhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card3;
