import React, {useEffect} from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, settodos, edittodo, setedittodo}) => {
 
  const updatetodo = (title, id, completed) =>{
      const newtodo = todos.map((todo) =>
        todo.id === id ? {title, id, completed} : todo
      );
      settodos(newtodo);
      setedittodo("");
  };
  useEffect(() =>{
    if(edittodo){
        setInput(edittodo.title);
    }
    else{
        setInput("");
    }
  }, [setInput, edittodo]);

  const onInputChange = (task) =>{
      setInput(task.target.value);
  };

  const onFormSubmit = (task) =>{
     task.preventDefault();
     if(!edittodo){
        settodos([...todos,{id: uuidv4(), title:input, completed: false}]);
     setInput("");
     }
     else{
        updatetodo(input, edittodo.id, edittodo.completed)
     }
  }
  return (
    <form onSubmit={onFormSubmit}>
        <input 
          type="text" 
          placeholder='Enter ur list..' 
          className='listinput' 
          value={input} required 
          onChange={onInputChange} />
        <button className='addbut' type='submit'>
            {edittodo ? "Update" : "Submit"}
        </button>
    </form>
  );
}

export default Form;
