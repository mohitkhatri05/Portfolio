import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'       
import { useRef } from 'react'
const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <div className='mt-80 flex justify-center items-center'>
            <button className={`btn ${containerClass} ` }>
      {isBeam && (
        <span className="relative  flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
      {/* <button className="relative overflow-hidden px-6 py-3 rounded-xl bg-indigo-600 text-white text-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300 group">
      <span className="relative z-10">Let’s Talk</span>
      <span className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[beam_2s_infinite] z-0"></span>
      </button> */}
    </div>
  )
}

export default Button
