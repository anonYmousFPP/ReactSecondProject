import React, { useState } from 'react'
import "../Components/style.css"
const Header = () => {

  // We are using useState i.e, const[num, setNum] = useState(1)
  
  const[num, setNum] = useState(1);
  function inc(){
    setNum(num+1);
  }
  function dec(){
    setNum(num-1);
  }

  return (
    <>
        <div className='main'>
            <h1 className='heading'>Increament or Decreament</h1>
            <div className='ans'>{num}</div>
            <div className='incDec'>
              <h1 className='inc' onClick={inc} >Increament</h1>
              <h1 className='dec' onClick={dec} >Decreament</h1>
            </div>
          </div>
    </>
  )
}

export default Header
