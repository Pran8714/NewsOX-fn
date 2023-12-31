import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
   
    
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsOX</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" id="w1"  to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="w2"  to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="w3"  to="/">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="w4"  to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="w5"  to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="w6"  to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="w7"  to="/technology">Technology</Link>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
