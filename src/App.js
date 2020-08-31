import React, { useState } from 'react';
import ToDoLists from "./ToDoLists";
import './App.css';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () =>{
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setInputList("");
  };
  const deleteItems = (id) => {
    console.log('delete');
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
};


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>Todo List App</h1>
          <br/>
          <input type="text" placeholder="Add an Item" value={inputList} onChange={itemEvent} /><br/>
            <button onClick={listOfItems}> + </button>
            <ol>
              {/*<li>{inputList}</li>*/}
              {items.map((itemval, index)=> {
                return <ToDoLists 
                key={index}
                id={index}
                text={itemval} 
                onSelect={deleteItems}
                />;
              })}
            </ol>
        </div>
      </div>
    </>
  );
}

export default App;
