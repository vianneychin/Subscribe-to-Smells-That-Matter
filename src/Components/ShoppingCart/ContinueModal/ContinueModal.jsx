import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { StyledContinueModal } from './styledContinueModal'
import YourSubscription from '../../YourSubscription/YourSubscription'

const ContinueModal = ({ setToggle }) => {
  const [subscribed, setSubscribed] = useState(false)
  return (
    <StyledContinueModal>
      <h2>Add this to your subscription?</h2>
      <div>
        <button onClick={() => setToggle(false)}>NO</button>
        <button onClick={() => setSubscribed(true)}>YES</button>
      </div>
      {subscribed ? <Redirect to='/subscribed' /> : null}
    </StyledContinueModal>
  )
}

export default ContinueModal
