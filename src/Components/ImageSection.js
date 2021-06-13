import React from "react";

function ImageSection() {
  return (
    <div className="imagesection">
      <div className="img">
        <img
          src="https://images.pexels.com/photos/6740776/pexels-photo-6740776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
        />
      </div>
      <div className="about-info">
        <h4>
          Iam <span> Manshad </span>
        </h4>
        <p className="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
          itaque? Explicabo quos vero beatae ratione ipsa, tenetur maxime
          console;
        </p>
        <div className="about-details">
          <div className="name-details">
            <p>Full Name : <span>Manshad</span></p>
            <p>Age : <span>50</span></p>
            <p>Nationality : <span>Indian</span></p>
            <p>Languages : <span>English</span></p>
         </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
