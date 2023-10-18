import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
     <nav className='container'>
        <div className='logo'>
            <img src="./images/nike.png" alt="img" />
        </div>

        <ul>
         <li>Home</li>
         <li>About</li>
         <li>Contect</li>
        </ul>
     </nav>
  )
}

export default Navbar