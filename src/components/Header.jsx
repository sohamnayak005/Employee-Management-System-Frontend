import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-light bg-light'>
                <Link to="/" className='navbar-brand ms-2'>Employee Management System</Link>    
                <Link to="/home" className='navbar-brand ms-2'>Home</Link>
                <Link to="/add-employee" className='navbar-brand ms-2'>Add Employee</Link>
               
            </nav>
        </header>
      </div>
    </>
  )
}

export default Header
