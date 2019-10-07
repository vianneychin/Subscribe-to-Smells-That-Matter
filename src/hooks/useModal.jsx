import { useState } from 'react'

const UseModal = () => {
  const [toggle, setToggle] = useState(false)
  return { toggle, setToggle }
}

export default UseModal
