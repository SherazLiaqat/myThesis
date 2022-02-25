import React from 'react'

export default function DropDown() {
  return (
      <> <nav className="nav">
      <h2>Please Select the Country</h2>
      <input className="input" id="toggle" type="checkbox" />
      <ul>
        <li>
          <Link to="/about">Pakistan</Link>
        </li>
        <li>
          <Link to="/MalasiyaGuidline">Malaysia</Link>
        </li>
        <li>
          <Link to="/saudiArabiaGuidline">Saudi Arabia</Link>
        </li>
        
      </ul>
    </nav></>
   
  )
}
