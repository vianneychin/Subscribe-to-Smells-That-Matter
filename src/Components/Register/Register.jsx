import React from 'react'
import { Link } from 'react-router-dom'
import { StyledRegister } from './styledRegister'
import useRegisterForm from '../../hooks/useRegisterForm';

const Register = () => {
  const { inputs, handleInputChange, handleSubmit } = useRegisterForm()
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
      <form onSubmit={handleSubmit}>
        <label>Name*</label>
        <input
          inputs={inputs.name}
          onChange={handleInputChange}
          placeholder="Name"
          name="name"
          type="text"
          autoComplete="off"
        />

        <label>Email*</label>
        <input
          inputs={inputs.email}
          onChange={handleInputChange}
          placeholder="Email"
          name="email"
          type="text"
          autoComplete="off"
        />

        <label>Password*</label>
        <input
          inputs={inputs.password}
          onChange={handleInputChange}
          placeholder="Password"
          name="password"
          type="password"
          autoComplete="off"
        />

        <label>Verify Password*</label>
        <input
          inputs={inputs.verifyPassword}
          onChange={handleInputChange}
          placeholder="Verify Password"
          name="verifyPassword"
          type="password"
          autoComplete="off"
        />

        <button type="submit">Register</button>
      </form>
    </StyledRegister>
  )
}

export default Register