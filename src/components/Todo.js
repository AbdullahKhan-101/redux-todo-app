import Button from '@material-ui/core/Button';
import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import {addTodo, deleteTodo, removeTodo} from '../actions/index'
import {useDispatch, useSelector} from 'react-redux'

const Todo = () => {
    const [inputData, setInputData] = useState('')
    const list = useSelector(state => state.TodoReducer.list)
    const dispatch = useDispatch()
    return (
    <div>
        <h1>Todo List Will Goes Here</h1>
        <h2 className="h2">Add Your List Here</h2>
        <div className="input">
        <Input value={inputData} onChange={(e)=>setInputData(e.target.value)} placeholder="Add Items..." inputProps={{ 'aria-label': 'description' }} />
        <AddIcon id="AddIcon" onClick={()=>dispatch(addTodo(inputData), setInputData(''))}/>
        </div>

            {
                list.map((elem)=>{
                    return(
                        
                        <div key={elem.id}>  
                    <ul className="list-group" >
                    <li  className="list-group-item d-flex justify-content-center align-items-center">
                         {elem.data}
                        <span onClick={()=>dispatch(deleteTodo(elem.id))} className="badge badge-primary bg-danger badge-pill">x</span>
                     </li>                    
                     </ul>        
         </div>   
                )
            
            })
            }      
        <div id="vow">
            <button onClick={()=>dispatch(removeTodo())}>clear all</button>
        </div>

     </div>
    )
}

export default Todo
