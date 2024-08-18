import{Link} from 'react-router-dom'
import React from 'react';


const Navbar = () => {
  

  

  return (
    <nav className="navbar">
      <div className="navbar-links" style={{ marginLeft: 'auto' }}>
        <button>1hr</button>
        <button>8hr</button>
        <button>24hr</button>
      </div>
    </nav>
  );
};

export default Navbar;

