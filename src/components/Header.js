import React from 'react';

const Header = ({ category, title }) => (
  <div style={{marginBottom:'2rem'}}>
    <p style={{fontSize:'1.5rem', color:'gray'}}>{category}</p>
    <p style={{fontSize:'2.5rem', fontWeight:'700'}}>{title}</p>
  </div>
);

export default Header;