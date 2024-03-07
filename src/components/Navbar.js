import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
function Navbar(props){
  let color='';
  if(props.mode==='dark'){
    color='light'
    document.body.style.backgroundColor='#00001a'
    document.body.style.color='white'
    
  }
  else{
    color='dark'
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
    
  }
    return (
        <>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Text-utils">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/Text-utils/about">About</Link>
        </li>
        
        
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggle}/>
  <label className={`form-check-label text-${color}`} for="flexSwitchCheckDefault">{props.mode}</label>
</div>
    </div>
  </div>
</nav>
        </>
    )
}

Navbar.propTypes={
    title:PropTypes.string,
  }
  Navbar.defaultProps={
    title:'Name'
  }

export default Navbar

