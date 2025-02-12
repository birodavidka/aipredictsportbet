import React from 'react'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div className='flex'>
      {/* left */}
      <div className='flex flex-col flex-1 items-center gap-4'>
        <p className='font-extrabold text-4xl'>Lorem, ipsum.</p>
        <p className='font-semibold text-2xl'>Lorem ipsum dolor sit amet.</p>
        <p className='text-gray-500 font-mono text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, magnam.</p>
        <button className='bg-orange-600 text-white py-1 px-2 rounded-lg font-bold'>tovább az AI-hoz</button>
      </div>
      {/* right */}
      <div className='felx flex-1 items-center'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, reprehenderit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore ad saepe eveniet suscipit quae laudantium. Quibusdam maiores alias nesciunt asperiores corrupti, cum repellendus ipsa, ducimus architecto in, sed dolores.</p>
      </div>
    </div>
  )
}

export default Homepage