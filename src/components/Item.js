import React from 'react'
import PropTypes from 'prop-types'


function Item(props) {
    const initialState = {
        title:props.item.title,
        body: props.item.body,
        id:props.item.id
    }
    const editItem = (e) =>{
        e.preventDefault()
        props.onEditItem(initialState)
    }
    
    return (
            <li className="collection-item">
                <strong>{props.item.title}
                <a href="google.com" className="secondary-body"><i className="edit-item fa fa-pencil" onClick={editItem}></i></a>
                </strong><br></br><p>{props.item.body}</p>
            </li>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onEditItem: PropTypes.func.isRequired
}

export default Item


