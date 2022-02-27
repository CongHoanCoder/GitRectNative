import React, { Component } from 'react';
import { useState } from 'react';
const SubmitForm =  ({contract, accounts, updateTodoList}) => {
    
    const [task, setTask] =useState('') ;

      const addTaskBtn = async () => {
  
       
        await contract.methods.createTask(task).send({ from: accounts[0] });
        //alert(`The name you entered was: ${name}`);
        updateTodoList();
        setTask("");
      }
    return ( 
      <div>
        <div style={{
            display: 'flex',
            flexDirection:'row',
            
            width: "400px",
            margin: "30px auto",
            minHeight: "30px",
            justifyContent: 'space-between'
        }}>
        <input 
          type="text" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{         
            width: "300px",
            justifyContent: 'space-between',
            border: `0.5px dashed gray`,
        }}
        />
        <button onClick={() => addTaskBtn()}>
          ADD TASK
        </button>
        </div>
        

      </div>
        
     );
}
 
export default SubmitForm;