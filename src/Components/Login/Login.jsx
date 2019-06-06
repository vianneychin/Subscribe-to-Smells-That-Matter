import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLogin } from './styledLogin'

import useLoginForm from '../../hooks/useLoginForm'

const Login = () => {
  const {handleSubmit, handleLoginForm, inputs} = useLoginForm()
  return (
    <StyledLogin>
      <div>
        <div>
          <h1>Sign in</h1>
          <h3>
            Don't have an account? Create one <Link to="/register">here.</Link>
          </h3>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          email={inputs.email}
          name="email"
          onChange={handleLoginForm}
          placeholder="Email"
          type="text"
          autoComplete="off"
        />

        <label>Password</label>
        <input
          password={inputs.password}
          name="password"
          onChange={handleLoginForm}
          placeholder="Password"
          type="password"
          autoComplete="off"
        />
        <button>Sign in</button>
      </form>
    </StyledLogin>
  )
}

export default Login