import React from "react"
import { TypeAnimation } from 'react-type-animation';

export default function Banner(){
    return (
         <div 
         id="home"
          className="section container mx-auto max-w-[1200px] px-3 items-center"
          >
            <div className="w-full"> 
            <div className="block text-center font-secondary font-black text-[30px]">
              Hello, Perkenalkan saya adalah
              <div>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'ARIEL KUSUMA WARDANA',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'SMKN 6 JEMBER',
        1000,
        '12 RPL 1',
        1000,

      ]}
      wrapper="span"
      speed={50}
      className="ml-3 text-secondary"
      repeat={Infinity}
    />
             </div>
            </div>
          </div>
        </div>
    )
}
