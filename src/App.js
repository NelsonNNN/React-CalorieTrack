import React, {useState, useEffect} from 'react';
import Additem from './components/Additem';
import Items from './components/Items';
import {getFromStorage, storeInStorage} from './components/Storage'
import {http} from './components/easyHttp'

function App() {

  const initialState =() => getFromStorage('data') || []
  const [state, changeState] = useState(initialState)
  const [data, changeData] = useState({name:'', calories:'', id:null})
  
  http.get('http://localhost:3001/data')
  .then(items => {
    if(items.length === 0){
      if(initialState.length !==0){
        initialState.forEach(item =>http.post('http://localhost:3001/data', item)).then(list => console.log(list))
      }
    }
  })

  useEffect(() => {
    storeInStorage('data', state)
  }, [state]);

  const addItem = (item)=> {
    http.post('http://localhost:3001/data', item)
    .then(items =>{const newItems = [...state, items]; changeState(newItems)})
  }

  const onEditItem = (states) => {
    changeData({...data, name:states.name, calories:states.calories, id:states.id})
}
  
  const updateItem = (stuff)=>{
    changeState(state.map((item) => {
      if(stuff.id === item.id){
        http.put(`http://localhost:3001/data/${item.id}`, stuff)
        item = stuff
      }
      return item
    }))
  }
  const deleteItem = (id) =>{
    http.delete(`http://localhost:3001/data/${id}`)
    changeState([...state.filter(todo => todo.id !== id)])
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper blue">
            <div className="container">
                <a href="nelsonnnn.github.io" className="brand-logo">Store The Calories Info on any Food item</a>
            </div>
        </div>
      </nav><br/>
      <Additem addItem={addItem} updateItem={updateItem} deleteItem={deleteItem} data={data} />
      <Items state={state} onEditItem={onEditItem} />
    </div>
  )
}

export default App
