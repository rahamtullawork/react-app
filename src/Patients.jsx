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
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 m-2">
                {
                    patients.map((i) => (
                        <div className="col" key={i.id}>
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-text">Patient Name: {i.name}</p>
                                    <p className="card-text">Patient Age: {i.age}</p>
                                    <p className="card-text">Patient Gender: {i.gender}</p>
                                    <p className="card-text">Patient Disease: {i.disease}</p>
                                    <p className="card-text">Alloted Doctor: {i.doctor.name}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
