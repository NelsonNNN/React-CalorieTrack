import React from 'react';
import {Link} from 'react-router-dom'

function Title(){
    return (
        <header style={titleStyle}>
            <h1>TodoList</h1>
            <Link style={link} to='/'>Home</Link>|<Link style={link} to='/about'>About</Link>
        </header>
    )
}

const titleStyle = {
    background: 'blue',
    color:'yellow',
    textAlign:'center',
    padding:'9px'
}
const link = {
    textDecoration:'none',
    color:'white'
}

export default Title