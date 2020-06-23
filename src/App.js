import React, {useState, useEffect} from 'react';
import Additem from './components/Additem';
import Items from './components/Items';
import {getFromStorage, storeInStorage} from './components/Storage'
import { uuid } from 'uuidv4';


function App() {

  const initialState =() => getFromStorage('data') || []
  const [state, changeState] = useState(initialState)
  const [data, changeData] = useState({name:'', calories:''})
  

  useEffect(() => {
    storeInStorage('data', state);
  }, [state]);

  const addItem = (item)=> {
    item.id = uuid()
    const newItems = [...state, item]
    changeState(newItems)
  }

  const onEditItem = (states) => {
    changeData({...data, name:states.name, calories:states.calories})
}
  
  const updateItem = (stuff)=>{
    changeState([state.map((item) => {
      if(stuff.id === item.id){
        item = stuff
      }
      return item
    })])
  }
  const deleteItem = (id) =>{
    changeState({...state.filter(todo => todo.id !== id)})
  }

  return (
    <div>
      <Additem addItem={addItem} updateItem={updateItem} deleteItem={deleteItem} data={data} />
      <Items state={state} onEditItem={onEditItem} />
    </div>
  )
}

export default App
