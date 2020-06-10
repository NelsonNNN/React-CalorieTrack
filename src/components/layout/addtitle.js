import React from 'react';

function Title(){
    return (
        <header style={titleStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const titleStyle = {
    backround: 'grey',
    color:'yellow',
    textAlign:'center',
    padding:'9px'
}

export default Title