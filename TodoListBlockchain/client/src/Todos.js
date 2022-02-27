import React, { useEffect } from 'react';

const Todos =  ({todos, clearTodoList,deleteTodo,contract, accounts, addTodo, updateTodoList, taskComplete}) => {
    console.log("todos form");
    useEffect( async ()=>{
        updateTodoList();
    },[]);
    
  
    
    const TodoComponent = {
        width: "300px",
        margin: "20px auto",
        backgroundColor: "coral",
        minHeight: "15px",
        boxSizing: "border-box",
        border: `2px dashed red`,
        opacity: 0.5,
        justifyContent: 'between'
        
       }
      
console.log(todos);
  const todoList = todos.length ? (
    todos.map(todo => { 
      return (
        !todo.completed ? ( <div className="collection-item" key={todo.id} style={{
          display: 'flex',
          flexDirection:'row',
          
          width: "400px",
          margin: "30px auto",
          backgroundColor: "white",
          minHeight: "30px",
          border: `2px dashed coral`,
          opacity: 0.6,
          justifyContent: 'space-between',
          alignContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
          padding: 10
      }}>
        
          <div> 
             <span  >{todo.content}</span>   
          </div>
          <div>  
            <input onChange={() => taskComplete(todo.id)} type='checkbox'></input>
          </div>
      </div>) : console.log("Completed")
       
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;