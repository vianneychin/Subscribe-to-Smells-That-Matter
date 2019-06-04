import React from 'react'
import { StyledSignIn } from './styledSignIn'

const SignIn = () => {
  return (
    <StyledSignIn>
      <div>
        <div>
          <h1>Sign in</h1>
          <h3>
          Don't have an account? Create one here.
          </h3>
        </div>
      </div>
      <form>
        <label>Username</label>
        <input placeholder="Username" type="text" />
        <label>Password</label>
        <input placeholder="Password" type="password" />
        <button>Sign in</button>
      </form>
    </StyledSignIn>
  )
}

export default SignIn