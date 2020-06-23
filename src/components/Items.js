import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

function Items(props) {
    return (
            <ul>
                {props.state.length > 0 ? (<>{props.state.map(item =>(
                <Item key={item.id} item={item} onEditItem={props.onEditItem} />
                ))}</>) : <li>Log not found</li> }
            </ul>
    )
}

Items.propTypes = {
    state: PropTypes.array.isRequired
}

export default Items

