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
    </div>
  )
}

export default Button
