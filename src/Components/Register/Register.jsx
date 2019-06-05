import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledRegister } from './styledRegister'

const Register = () => {
  const [values, setValues] = useState({})

  const handleChange = (e) => {
    e.preventDefault()
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <StyledRegister>
      <div>
        <div>
          <h1>Create an account</h1>
          <h3>
            Already have an account? <Link to="/login">Sign in.</Link>
          </h3>
        </div>
      </div>
      <form>
        <label>Name*</label>
        <input
          placeholder="Name"
          name="name"
          type="text"
          value="values.name"
          onChange={handleChange()}
        />

        <label>Email*</label>
        <input
          placeholder="Email"
          name="email"
          type="text"
          value="values.email"
          onChange={handleChange()}
        />

        <label>Password*</label>
        <input
          placeholder="Password"
          name="password"
          type="password"
          value="values.password"
        />

        <label>Verify Password*</label>
        <input
          placeholder="Verify Password"
          name="verifyPassword"
          value="values.verifyPassword"
          type="password"
        />

        <button>Register</button>
      </form>
    </StyledRegister>
  )
}

export default Register