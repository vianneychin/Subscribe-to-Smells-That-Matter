import { useState } from 'react'

const useLoginForm = () => {
  const [inputs, setInputs] = useState({})
  const [logged, setLogged] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [name, setName] = useState('')
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:7000/users/login', {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      /* TODO Create a state that will update a message from the backend of the user object */
      const user = await response.json()
      if(user.message) {
        setErrorMessage(user.message)
      } else if (user.user) {
        setName(user.user.name)
      }
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
    inputs,
    errorMessage,
    name
  }
}

export default useLoginForm