import React from "react";
import "./Home.css"

export default function PatientsCard(props) {
  return (
    <div className="card">
      <p>Name:{props.name}</p>
      <p>Weight: {props.weight}</p>
      <p>Gender:{props.gender}</p>
      <p>Age:{props.age}</p>
      <p>Email:{props.email}</p>
      <p>Disease: {props.disease}</p>
    </div>
  );
}
