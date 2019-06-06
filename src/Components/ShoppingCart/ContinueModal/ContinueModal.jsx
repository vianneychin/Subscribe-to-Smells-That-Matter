import React from 'react'
import { StyledContinueModal } from './styledContinueModal';

const ContinueModal = ({setToggle}) => {
  return (
    <StyledContinueModal>
      <h2>Add this to your subscription?</h2>
      <div>
        <button onClick={() => setToggle(false)}>
          NO
        </button>
        <button>YES</button>
      </div>
    </StyledContinueModal>
  )
}

export default ContinueModal