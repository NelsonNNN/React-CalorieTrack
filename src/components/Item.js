import React from 'react'
import PropTypes from 'prop-types'


function Item(props) {
    const initialState = {
        name:props.item.name,
        content: props.item.content,
        id:props.item.id
    }
    const editItem = (e) =>{
        e.preventDefault()
        props.onEditItem(initialState)
    }
    
    return (
            <li className="collection-item">
                <strong>{props.item.name}
                <a href="google.com" className="secondary-content"><i className="edit-item fa fa-pencil" onClick={editItem}></i></a>
                </strong><br></br><p>{props.item.content}</p>
            </li>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onEditItem: PropTypes.func.isRequired
}

export default Item


