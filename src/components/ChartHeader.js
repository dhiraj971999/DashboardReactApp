import React from 'react';

const ChartsHeader = ({ category, title }) => (
  <div className=" mb-10">
    <div>
      <p style={{fontSize:'1.5rem', color:'gray'}}>Chart</p>
      <p style={{fontSize:'2.5rem', fontWeight:'700'}}>{category}</p>
    </div>
    <p style={{fontSize:'1rem', color:'gray', textAlign:'center', margin:'2rem 0' }} className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{title}</p>
  </div>
);

export default ChartsHeader;