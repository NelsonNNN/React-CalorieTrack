import React from 'react';
import './style.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='getStyle'>
      <ul className='ulist'>
        {pageNumbers.map(number => (
          <li style={{listStyle: 'none'}} key={number} >
            <button className='listStyle' onClick={() => paginate(number)} >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;