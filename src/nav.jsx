import react from "react";
import reactDOM from "react-dom";
import './nav.css'

function Navbar(){
 return(
     <p>
  <span id="name">
    Vineet Somani
  </span>
     </p>
 )
}
function Navbar2(){
    return(
        <div className={"btn-nav"}>
        <div className={"btn-nav-main"}>
            <button className={"btn"}><h2>Home</h2></button>
            <button className={"btn"}><h2>About</h2></button>
            <button className={"btn"}><h2>Portfolio</h2></button>
        </div>
        <div className={"special"}>
            <button className={"btn2"}><h2>Let's Discuss</h2></button>
        </div>
        </div>


    )
}
export {Navbar,Navbar2};