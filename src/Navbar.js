import React from 'react'

function Navbar() {
  return (
    <nav className="navbar background">
    <ul className="nav-list">
        <div class="logo"><img src="img.jpg.jpg" alt="logo"/></div>
        <li><a href="#home">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/onlinesellart">Online sell Art</a></li>
        <li><a href="/contact">Contact Us</a></li>
    </ul>
    <div class="rightNav">
        <input type="text" name="search" id="search"/>
        <button class="btn btn-sm">Search</button>
    </div>
</nav>
  )
}

export default Navbar