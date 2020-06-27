import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const firstState = {
        title:'',
        body:'',
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
        changeState({...state, title:props.data.title, body:props.data.body, id:props.data.id})
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
                <input type='text' name='title' placeholder='Add Title' value={state.title} onChange={onType}/>
                <label>Title</label>
            </div>
            <div className="input-field col s6">
                <input type="text" name='body' placeholder='Add body' value={state.body} onChange={onType}/>
                <label>body</label>
            </div>
            <button style={{display:'inline', marginRight:'1rem'}} ref={add} onClick={onSubmit} className="add-btn btn green darken-1">Add Blog</button>
            <button style={{display:'none',marginRight:'1rem'}}  ref={update} onClick={onUpdate} className="update-btn btn  lime darken-1">Update Blog</button>
            <button style={{display:'none',marginRight:'1rem'}}  ref={deleted} onClick={onDelete} className="delete-btn btn  blue-grey darken-4">Delete Blog</button>
        </div>
    )
}

Additem.propTypes = {
    addItem: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Additem

