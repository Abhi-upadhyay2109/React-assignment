import { useState } from 'react'
import TodoList from './Todolist';
import './App.css'


function Todo() {

const [inputvalue , setinputvalue] = useState("");
const [todolist , settodolist] = useState([]);


function addvalue(e){
  setinputvalue(e.target.value);
}

function addtodo(){
  let obj ={
    id: Date.now() + Math.random(),
    todo:inputvalue,
    status:Math.random() < 0.8
  }

  let newlist =[...todolist,obj]
  settodolist(newlist);
}

function togglestatus(id){
  const updatestatus = todolist.map((task)=>{
    if(task.id===id){
      return{...task,status:!task.status}
    }
    return task
  })

  settodolist(updatestatus);

}

  return(
    <>
    <div className='main'>
    <h2>Todo App</h2>
    <div className='child'>
      <input type="text" onChange={addvalue}/>
      <button onClick={addtodo}>ADD </button>
    </div>
    <div>
      <TodoList tasks={todolist} ontogglestatus={togglestatus} />
    </div>

    </div>
    
       
    </>
  )
}

export default Todo