import React from 'react';
import { NavLink} from 'react-router-dom';

class NavBar extends React.Component { 

  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink className='navbar-brand' to='/'>QPasa Gerenciamento</NavLink>
          </li>
          <li className='navSection'>
            <NavLink className='navLink' to='/signIn'>Acessar</NavLink>
            <NavLink className='navLink' to='/signUp'>Sign Up</NavLink>
          </li>
        </ul>      
      </nav>  
    );
  }
}

export default NavBar;