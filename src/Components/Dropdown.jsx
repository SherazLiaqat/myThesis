import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
export default function BasicExample() {
  return (
    <>
<nav className="nav1">

<label for="touch"><span>Please Select The Country</span></label>               
<input type="checkbox" id="touch"/> 

<ul class="slide" style={{color:'white',textDecoration:"none"}}>
  <li ><Link to="/pakistanGuidline">Pakistan</Link></li> 
  <li><Link to="/MalasiyaGuidline">Malaysia</Link></li>
  <li><Link to="/pakistanGuidline">Saudi Arabia</Link></li>
  
</ul>

</nav> 
    </>
  );
}


