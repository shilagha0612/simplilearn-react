import React from 'react'
import '../CSS/Style.css'

const StyleComp = () => {

  return (
    <div>
        <h1>Style Components</h1>
        <p className='direct-Import'>1.Direct Import</p>

      <p style={{backgroundColor:'pink', color:'black'}}>2.Inline Style</p>

      
    </div>
  )
}

export default StyleComp
