import React from 'react'
import { StyledRegister } from './styledRegister'

const Register = () => {
  return (
    <StyledRegister>
      <div>
        <div>
          <h1>Create an account</h1>
          <h3>
          Already have an account? Sign in.
          </h3>
        </div>
      </div>
      <form>
        <label>Username*</label>
        <input placeholder="Username" type="text" />
        <label>Password*</label>
        <input placeholder="Password" type="password" />
        <label>Verify Password*</label>
        <input placeholder="Verify Password" type="password" />
        <button>Register</button>
      </form>
    </StyledRegister>
  )
}

export default Register