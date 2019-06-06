import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { StyledLogin } from './styledLogin'

/* Hook */
import useLoginForm from '../../hooks/useLoginForm'

const Login = () => {
  const { errorMessage, handleSubmit, handleLoginForm, inputs, logged } = useLoginForm()
  return (
    <StyledLogin>
      {
        logged
          ? <Redirect to='/' />
          : <div />
      }
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
        <p> {errorMessage}</p>
        <button>Sign in</button>
      </form>
    </StyledLogin>
  )
}

export default Login