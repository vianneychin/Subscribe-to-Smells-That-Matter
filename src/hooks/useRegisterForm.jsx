import { useState } from 'react'

const useRegisterForm = register => {
  const [inputs, setInputs] = useState({})
  const handleSubmit = async event => {
    console.log(inputs, '<---- register form inputs')
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:7000/users/register', {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const user = await response.json()
      console.log(user)
    } catch (error) {
      return error
    }
  }
  const handleInputChange = (event) => {
    /* event.persist() is async */
    event.persist()
    setInputs(inputs => (
      {...inputs, [event.target.name]: event.target.value}
      ))
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}

export default useRegisterForm