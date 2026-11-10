import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import axios from "axios";

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchDoctors()
  },
    [])

  async function fetchDoctors() {
    axios.get("https://doc-back1.onrender.com/doctors").then((res) => {
      setDoctors(res.data);
      console.log(res.data);
    });
  }

  const filterDoctors = doctors.filter((i) => {
    return i.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function deleteDoctor(id) {
    axios.delete(`https://doc-back1.onrender.com/doctors/${id}`).then(res => {
      if (res.status == 200) {
        fetchDoctors()
      }
    })
  }

  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Enter Doctor a name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {
        filterDoctors.length === 0 ? (<>No doctor matches.....</>) :
          (
            <div className="container-fuild">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 m-2">
                {filterDoctors.map((i) => (
                  <div className="col" key={i.id}>
                    <div className="card">
                      <DoctorCard
                        key={i.id}
                        id={i.id}
                        name={i.name}
                        age={i.age}
                        salary={i.salary}
                        gender={i.gender}
                        specialization={i.specialization}
                        deleteDoctor={deleteDoctor}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
      }

    </div>
  )
}
