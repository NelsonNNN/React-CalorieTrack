import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through': 'none'
        }
    }
    render() {
        const{ id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>{" "}
                    {title}
                    <button onClick={this.props.deleteItem.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

const btnStyle ={
    background:'red',
    color:'yellow',
    border: 'none',
    padding:'2px 5px',
    borderRadius:'50%',
    marginLeft:'9px',
    float:'right'
}
export default TodoItem
