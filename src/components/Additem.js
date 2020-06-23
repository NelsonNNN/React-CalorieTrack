import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const firstState = {
        name:'',
        calories:'',
}

function Additem(props) {
   
    const [state, changeState] = useState(firstState)

    const onType = (e) =>{
        changeState({...state, [e.target.name]:e.target.value})
    }
    useEffect(()=>{
        changeState({...state, name:props.data.name, calories:props.data.calories, id:props.data.id})
    }, [props.data])

    const onSubmit = ()=>{
        props.addItem(state)
        changeState(firstState)
    }

    const onUpdate = ()=>{
        props.updateItem(state)
        changeState(firstState)
    }

    const onDelete = ()=>{
        props.deleteItem(state)
        changeState(firstState)
    }
    

    return (
        <div>
            <div className="input-field col s6">
                <input className='food-name' type='text' name='name' placeholder='Add FoodItem' value={state.name} onChange={onType}/>
                <label>Meal</label>
            </div>
            <div className="input-field col s6">
                <input className={'calories-name'} type='number' name='calories' placeholder='Add Calories' value={state.calories} onChange={onType}/>
                <label>Calories</label>
            </div>
            <button onClick={onSubmit} className="add-btn btn blue darken-3"><i className="fa fa-plus">Add Meal</i></button>
            <button onClick={onUpdate} className="update-btn btn orange"><i className="fa fa-pencil-square-o">Update Meal</i></button>
            <button onClick={onDelete} className="delete-btn btn red"><i className="fa fa-remove">Delete Meal</i></button>
        </div>
    )
}

Additem.propTypes = {
    addItem: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Additem

