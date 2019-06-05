import React, { useState } from 'react'

const useForm = register => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = event => {
    if (event) {
      event.preventDefault()
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

export default useForm