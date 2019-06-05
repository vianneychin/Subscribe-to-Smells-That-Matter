import React from 'react'
import { Link } from 'react-router-dom'
import { StyledSignIn } from './styledSignIn'
import useForm from '../../hooks/useForm'

const SignIn = () => {
  const { inputs, handleInputChange, handleSubmit } = useForm()
  return (
    <StyledSignIn>
      <div>
        <div>
          <h1>Sign in</h1>
          <h3>
            Don't have an account? Create one <Link to="/register">here.</Link>
          </h3>
        </div>
      </div>
      <form>
        <label>Username</label>
        <input
          inputs={inputs.name}
          onChange={handleInputChange}
          placeholder="Username"
          type="text"
          autoComplete="off"
        />

        <label>Password</label>
        <input
          inputs={inputs.password}
          placeholder="Password"
          type="password"
          autoComplete="off"
        />
        <button>Sign in</button>
      </form>
    </StyledSignIn>
  )
}

export default SignIn