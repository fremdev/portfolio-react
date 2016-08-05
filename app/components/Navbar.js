import React from 'react';
import {Link} from 'react-router';

import '../styles/navbar.scss';

const Navbar = () => (
  <div className="nav">
    <div className="nav__logo"><Link to='/'>Alex Efremov</Link></div>
    <div className="nav__item"><Link to='/portfolio'>Portfolio</Link></div>
    <div className="nav__item"><Link to='/contact'>Contact</Link></div>
  </div>
);

export default Navbar;
