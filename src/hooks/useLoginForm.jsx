import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const useLoginForm = () => {
  const [inputs, setInputs] = useState({})
  const [logged, setLogged] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    let user = localStorage.getItem("user")
    let parsedUser = JSON.parse(user)
    if (parsedUser) {
      setName(parsedUser.name)
      setLogged(true)
    }
  }, [])

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
      const user = await response.json()
      if (user.message) {
        setErrorMessage(user.message)
      } else if (user.user) {
        /* if user is logged in */
        localStorage.setItem("user", JSON.stringify(user.user))
        setName(user.user.name)
        setLogged(true)
      }
    } catch (error) {
      return error
    }
  }
  const checkLogin = () => {
    if (logged) {
      return <Redirect to="/home" />
    }
  }
  const handleLoginForm = (event) => {
    event.persist()
    setInputs(inputs => (
      { ...inputs, [event.target.name]: event.target.value }
    ))
  }
  return {
    handleSubmit,
    handleLoginForm,
    inputs,
    errorMessage,
    name,
    checkLogin,
    logged
  }
}

export default useLoginForm