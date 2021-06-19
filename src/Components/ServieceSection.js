import React from "react";

function ServieceSection() {
  let img =
    "https://images.unsplash.com/photo-1621570273800-1b50b0173a97?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80";
  return (
    <div className="serviece-section">
      <div className="serviece">
        <img src={img} alt="" />
        <h1 className="serviece-title">web design</h1>
        <p className="serviece-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut deserunt
          tempora nemo blanditiis fugit perferendis quo, expedita incidunt
         
        </p>
      </div>
    </div>
  );
}

export default ServieceSection;
