import React, { useEffect, useState } from "react";
import PatientsCard from "./PatientsCard";
import axios from "axios";

export default function Patients() {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchPatients();
    }, []);

    async function fetchPatients() {
        axios.get("https://doc-back1.onrender.com/patients").then((res) => {
            setPatients(res.data);
            console.log(res.data);
        });
    }

    const filteredPatient = patients.filter((i) => {
        return i.name.toLowerCase().includes(searchTerm.toLowerCase());
    })

    return (
        <div>
            <div className="search">
                <input type="text"
                    placeholder="Enter patient name"
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            {
                filteredPatient.length === 0 ? (
                    <>No Patient Found.....</>
                ) : (
                    <div className="card-container">
                        {
                            filteredPatient.map((i) => (
                                <PatientsCard
                                    key={i.id}
                                    name={i.name}
                                    weight={i.weight}
                                    gender={i.gender}
                                    age={i.age}
                                    email={i.email}
                                    disease={i.disease}
                                />
                            ))
                        
                    }

                    </div>
                )
            }

        </div>
    )
}
