import React, {useState, useEffect} from 'react';
import Additem from './components/Additem';
import Items from './components/Items';
import {getFromStorage, storeInStorage} from './components/Storage'
import {http} from './components/easyHttp'
import Pagination from './components/Pagination';

function App() {

  const initialState =() => getFromStorage('data') || []
  const [state, changeState] = useState(initialState)
  const [data, changeData] = useState({name:'', content:'', id:null})
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(5)

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentState = state.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  http.get('http://localhost:3000/data')
  .then(items => {
    if(items.length === 0){
      if(initialState.length !==0){
        initialState.forEach(item =>http.post('http://localhost:3000/data', item)).then(list => console.log(list))
      }
    }
  })

  useEffect(() => {
    storeInStorage('data', state)
  }, [state]);

  const addItem = (item)=> {
    http.post('http://localhost:3000/data', item)
    .then(items =>{const newItems = [...state, items]; changeState(newItems)})
  }

  const onEditItem = (states) => {
    changeData({...data, name:states.name, content:states.content, id:states.id})
}
  
  const updateItem = (stuff)=>{
    changeState(state.map((item) => {
      if(stuff.id === item.id){
        http.put(`http://localhost:3000/data/${item.id}`, stuff)
        item = stuff
      }
      return item
    }))
  }
  const deleteItem = (id) =>{
    http.delete(`http://localhost:3000/data/${id}`)
    changeState([...state.filter(todo => todo.id !== id)])
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper blue">
            <div className="container">
                <a href="nelsonnnn.github.io" className="brand-logo">Create Blog and Edit</a>
            </div>
        </div>
      </nav><br/>
      <Additem addItem={addItem} updateItem={updateItem} deleteItem={deleteItem} data={data} />
      <Items state={currentState} onEditItem={onEditItem}/>
      <Pagination postsPerPage={postPerPage} totalPosts={state.length} paginate={paginate} />
    </div>
  )
}

export default App
