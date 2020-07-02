import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

function Items(props) {
    if(props.loading){
        return<h2>Loading posts...</h2>
    }

    return (
            <ul style={lists}>
                {props.state.length > 0 ? (<>{props.state.map(item =>(
                <Item key={item.id} item={item} onEditItem={props.onEditItem} />
                ))}</>) : <li>Log not found</li> }
            </ul>
    )
}
const lists = {
    display: 'flex',
    flexDirection: 'column'
}

Items.propTypes = {
    state: PropTypes.array.isRequired
}

export default Items

