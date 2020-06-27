import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={getStyle}>
      <ul style={ulist}>
        {pageNumbers.map(number => (
          <li key={number} >
            <button style={listStyle} onClick={() => paginate(number)} >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
const getStyle ={
  backgroundColor:'transparent',
  border:'none'
}
const ulist={
  display:'flex',
  flexWrap:'wrap'
}
const listStyle={
  width:'3rem',
  height:'3rem',
  color:'white',
  backgroundColor:'blue',
  textAlign:'center',
  boxShadow:'1px 1px 2px black',
  marginRight:'3px'
}

export default Pagination;