import React from 'react'
import PropTypes from 'prop-types'


function Item(props) {
    const initialState = {
        name:props.item.name,
        calories: props.item.calories
    }
    const editItem = (e) =>{
        e.preventDefault()
        props.onEditItem(initialState)
    }
    
    return (
            <li className="collection-item">
                <strong>{props.item.name}: </strong><em>{props.item.calories} Calories</em>
                <a href="google.com" className="secondary-content"><i className="edit-item fa fa-pencil" onClick={editItem}></i></a>
            </li>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onEditItem: PropTypes.func.isRequired
}

export default Item


