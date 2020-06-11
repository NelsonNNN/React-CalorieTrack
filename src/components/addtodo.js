import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state={
        title:''
    }
    onType=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type='text' name='title' placeholder='Add Todo' style={{flex:'10', padding:'9px'}} value={this.state.title} onChange={this.onType}/>
                <input type='submit' value='submit' className='btn' style={{flex: '1'}} />
            </form>
        )
    }
}

AddTodo.propTypes={
    addTodo: PropTypes.func.isRequired,
}
export default AddTodo
