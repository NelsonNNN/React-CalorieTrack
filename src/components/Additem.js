import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const firstState = {
        name:'',
        calories:'',
        id:null
}

function Additem(props) {

    const add = useRef()
    const update = useRef()
    const deleted = useRef()
   
    const [state, changeState] = useState(firstState)

    const onType = (e) =>{
        changeState({...state, [e.target.name]:e.target.value})
    }
    const isFirstRun = useRef(false)
    useEffect(()=>{
        changeState({...state, name:props.data.name, calories:props.data.calories, id:props.data.id})
        if(isFirstRun.current){
            add.current.style.display = "none";
            update.current.style.display = "inline";
            deleted.current.style.display = "inline";
        }else{
            isFirstRun.current = true;
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.data])

    const onSubmit = ()=>{
        props.addItem(state)
        changeState(firstState)
    }

    const onUpdate = ()=>{
        props.updateItem(state)
        changeState(firstState)
        add.current.style.display = "inline";
        update.current.style.display = "none";
        deleted.current.style.display = "none";
    }

    const onDelete = ()=>{
        props.deleteItem(state.id)
        changeState(firstState)
        add.current.style.display = "inline";
        update.current.style.display = "none";
        deleted.current.style.display = "none";
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
            <button style={{display:'inline'}} ref={add} onClick={onSubmit} className="add-btn btn blue darken-3"><i className="fa fa-plus">Add Meal</i></button>
            <button style={{display:'none'}}  ref={update} onClick={onUpdate} className="update-btn btn orange"><i className="fa fa-pencil-square-o">Update Meal</i></button>
            <button style={{display:'none'}}  ref={deleted} onClick={onDelete} className="delete-btn btn red"><i className="fa fa-remove">Delete Meal</i></button>
        </div>
    )
}

Additem.propTypes = {
    addItem: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Additem

