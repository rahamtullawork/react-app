import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddDoctor() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [salary, setSalary] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [specialization, setSpecialization] = useState("")

  function handleSubmit() {
    console.log(name, age, salary, gender, specialization)
    axios.post("https://doc-back1.onrender.com/doctors", { name, age, gender, salary, specialization })
      .then((res) => {
        console.log(res)

        if(res.status == 201){
          alert("Doctor added successfully")
          navigate("/")
        }
      })
  }
  return (
    <div>
      <input type="text" placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)} />
      <br />
      <input type="text" placeholder="Enter Salary"
        onChange={(e) => setSalary(e.target.value)} />
      <br />
      <input type="text" placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)} />
      <br />
      <input type="text" placeholder="Enter Gender"
        onChange={(e) => setGender(e.target.value)} />
      <br />
      <input type="text" placeholder="Enter Specialization"
        onChange={(e) => setSpecialization(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
