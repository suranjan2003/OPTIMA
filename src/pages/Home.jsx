import React from 'react'
import Spons from './Spons'
import Gallery from './Gallery';

const Home = () => {
    let x=0;
  return (
    <div className="relative bg-[#170453] flex flex-col">
        {x === 1 ? <Spons /> : <Gallery />}
    </div>
  )
}

export default Home