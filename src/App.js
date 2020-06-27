import React, {useState, useEffect} from 'react';
import Additem from './components/Additem';
import Items from './components/Items';
// import {getFromStorage, storeInStorage} from './components/Storage'
import {post, deletes, put, get} from './components/easyHttp'
import Pagination from './components/Pagination';

function App() {

  const initialState = []
  const [state, changeState] = useState(initialState)
  const [data, changeData] = useState({title:'', body:'', id:null})
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(5)

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentState = state.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(()=>{
    get('https://jsonplaceholder.typicode.com/posts')
    .then(items => {
      changeState(items.sort((a,b)=>b.id-a.id))
    })
  },[])

  const addItem = (item)=> {
    post('https://jsonplaceholder.typicode.com/posts', item)
    .then(items =>{const newItems = [...state, items]; changeState(newItems.sort((a,b)=>b.id-a.id));})
  }

  const onEditItem = (states) => {
    changeData({...data, title:states.title, body:states.body, id:states.id})
}
  
  const updateItem = (stuff)=>{
    changeState(state.map((item) => {
      if(stuff.id === item.id){
        put(`https://jsonplaceholder.typicode.com/posts/${item.id}`, stuff)
        item = stuff
      }
      return item
    }))
  }
  const deleteItem = (id) =>{
    deletes(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
