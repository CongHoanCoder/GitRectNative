import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import TodoListContract from "./contracts/TodoList.json";
import getWeb3 from "./getWeb3";

import "./App.css";
import Todos from "./Todos";
import SubmitForm from "./SubmitForm";

class App extends Component {
state = { storageValue: 0, web3: null, accounts: null, contract: null };

 state = {name: ''};
 state = {todos: []};
 clearTodoList = () => {
   this.setState({todos: []} )
 };
 updateTodoList = async () => {

  this.clearTodoList();
const response =  this.state.contract.methods.taskCount().call().then((result)=>{
        return result;
       }).then( async (data)=> {
           console.log(data);
           for (let index = 1; index < data+ 1 ; index++) {
            const response = await this.state.contract.methods.tasks(index).call();
            console.log(response);
          (response.id != 0 && response.id != null ) ?  this.addTodo({id :response.id,content: response.content, completed: response.completed}) : console.log("nothing");
           
               
           }
        
     });
 }
 deleteTodo = (id) => {
  const todos = this.state.todos.filter(todo => {
    return todo.id !== id
  });
   this.setState({
     todos
   });
}
addTodo = (todo) => {
  
  let todos = [...this.state.todos, todo];
   this.setState({
     todos
  });
}
taskComplete =(id)=>{

console.log(id);
   const response =  this.state.contract.methods.toggleCompleted(id).send({ from: this.state.accounts[0] }).then((result)=>{
    return result;
   }).then( async (data)=> {
   this.updateTodoList();
  });
};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      //const deployedNetwork = SimpleStorageContract.networks[networkId];
      const deployedNetwork = TodoListContract.networks[networkId];
      const instance = new web3.eth.Contract(
        TodoListContract.abi,
        TodoListContract && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;


  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent : 'center'
         }}>
          <div style={{
          backgroundColor:'lightblue', 
          width: 200,
          height:1,
          alignSelf: 'center'

         }}>  </div>
        <h3> todo<text 
         style={{
           color:'lightblue',
           fontSize: 25
          }}>List</text>  </h3>
          <div style={{
          backgroundColor:'lightblue', 
          width: 200,
          height:1,
          alignSelf: 'center'

         }}>  </div>
        </div>
      
       <SubmitForm contract = {this.state.contract} accounts = {this.state.accounts} addTodo = {this.addTodo} todos = {this.state.todos} updateTodoList = {this.updateTodoList}/>
      
        <Todos todos = {this.state.todos} clearTodoList= {this.clearTodoList} deleteTodo= {this.deleteTodo} contract = {this.state.contract} accounts = {this.state.accounts} addTodo = {this.addTodo} updateTodoList = {this.updateTodoList} taskComplete = {this.taskComplete}/> 
      </div>
    );
  }
}

export default App;
