import React from 'react'

import spinner from './asssets/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img 
        width={180} 
        src={spinner} 
        alt='' />
    </div>
  )
}

export default Spinner
