import React from 'react'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div className='flex w-full'>
      {/* left */}
      <div className='flex-1'>
        left
      </div>
      {/* right */}
      <div className='flex-1'>right</div>
    </div>
  )
}

export default Homepage