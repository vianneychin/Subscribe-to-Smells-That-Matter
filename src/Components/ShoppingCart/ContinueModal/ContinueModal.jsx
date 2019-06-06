import React from 'react'
import { StyledContinueModal } from './styledContinueModal';

const ContinueModal = () => {
  return (
    <StyledContinueModal>
      <h2>Add this to your subscription?</h2>
      <div>
        <button>NO</button>
        <button>YES</button>
      </div>
    </StyledContinueModal>
  )
}

export default ContinueModal