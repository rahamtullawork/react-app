import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault();
        axios.post("https://doc-back1.onrender.com/login", { email, password }).then(res => {
            console.log(res)
            if (res.status == 200) {
                navigate("/")
            }
        }).catch(err => {
            console.log(err?.response?.data.message)
            console.log(email,password)
        })
    }

    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                <div className='col-12 col-md-6'>
                    <form onSubmit={handleLogin} className='form-control px-4 py-3'>
                        <div className='mb-3 fs-3'>Patient Login</div>
                        <div className='mb-3'>
                            <input className='form-control' type="email" placeholder='Enter your email id'
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='mb-3'>
                            <input className='form-control' type="password" placeholder='Enter your password'
                                onChange={(e) => setPassword(e.target.value)} />

                        </div>

                        <div className="d-grid mb-2">
                            <button className='btn btn-success btn-lg'>Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
