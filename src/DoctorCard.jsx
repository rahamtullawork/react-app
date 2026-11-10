import React from 'react'
import "./Home.css"


export default function DoctorCard(props) {
  return (
    <div className='card-body h-100'>
      <p className="card-text">Name: {props.name}</p>
      <p className="card-text">Age: {props.salary}</p>
      <p className="card-text">Gender: {props.gender}</p>
      <p className="card-text">Salary: {props.age}</p>
      <p className="card-text">Specialization: {props.specialization}</p>
      <button className='btn btn-danger' onClick={() => props.deleteDoctor(props.id)}>Delete</button>
    </div>
  )
}
