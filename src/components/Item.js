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
            <li style={{padding:'0.5rem'}}>
                <strong style={{alignSelf:'center', fontSize:'2rem'}}>{props.item.title}
                <a style={{float:'right'}} href="google.com" className="secondary-body"><i className="edit-item fa fa-pencil" onClick={editItem}></i></a>
                </strong><br></br><p style={{padding:'2rem'}}>{props.item.body}</p>
            </li>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onEditItem: PropTypes.func.isRequired
}

export default Item


