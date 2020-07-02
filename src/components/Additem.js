import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import './style.css'

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
            <div className='inputDiv'>
                <label className='label'>Title</label>
                <input className='inputField' type='text' name='title' placeholder='Add Title' value={state.title} onChange={onType}/>
            </div>
            <div className='inputDiv'>
                <label className='label'>Content</label>
                <textarea className='inputField content' type="text" name='body' placeholder='Add body' value={state.body} onChange={onType}/>
            </div>
            <button className='button' style={{display:'inline', background:'#40ff00'}} ref={add} onClick={onSubmit}>Add Blog</button>
            <button className='button' style={{display:'none', background:'#ffbf00'}}  ref={update} onClick={onUpdate}>Update Blog</button>
            <button className='button' style={{display:'none', background:'#e61919'}}  ref={deleted} onClick={onDelete}>Delete Blog</button>
        </div>
    )
}

Additem.propTypes = {
    addItem: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Additem

