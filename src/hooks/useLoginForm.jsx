import React, { useState } from 'react'

const useLoginForm = (register) => {
  const [inputs, setInputs] = useState({})
  const [logged, setLogged] = useState(false)
  const handleSubmit = async event => {
    console.log(inputs, '<----- login form inputs')
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:7000/users/login', {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response, '<--- this is response from login form')
      const user = await response.json()
      console.log(user)
    } catch (error) {
      return error
    }
  }

  const handleLoginForm = (event) => {
    event.persist()
    setInputs( inputs => (
      {...inputs, [event.target.name] : event.target.value}
    ))
  }
  return {
    handleSubmit,
    handleLoginForm,
    inputs
  }
}

export default useLoginForm