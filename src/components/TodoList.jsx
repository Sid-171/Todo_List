import React from 'react'

const TodoList = ({todos, settodos, setedittodo}) => {
  
  const handleComplete = (todo) =>{
       settodos(
        todos.map((item) =>{
          if(item.id === todo.id){
            return{...item, completed: !item.completed}
          }
          else{
            return item;
          }
            /*item.id === todo.id ? {...item, completed: !item.completed} : item*/
  })
       )
  }  

  const handleEdit = ({id}) => {
      const findtodo = todos.find((todo) => todo.id === id);
      setedittodo(findtodo);
  }  
  const handleDelete = ({id}) =>{
     settodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map( (todo) =>(
        <li className='todo_list' key={todo.id}>
            <input 
            type="text"
            value={todo.title} 
            className={'list ${todo.completed ? "complete" : ""}'} 
            onChange={(task) => task.preventDefault()}>
            </input>
            <div className='buttondec'>
                <button className='complete' onClick={() => handleComplete(todo)}>
                    <em className='abc-com'><img src='https://i.postimg.cc/5tr4Q61R/tick1.png' width="15px" height="15px" ></img></em>
                </button>
                <button className='edit' onClick={() => handleEdit(todo)}>
                    <em className='abc-edit'><img src='https://i.postimg.cc/L8H6rcNN/edit1.png' width="15px" height="15px"></img></em>
                </button>
                <button className='delete' onClick={() => handleDelete(todo)}>
                    <em className='abc-del'><img src='https://i.postimg.cc/V6SNKXDw/delete1.png' width="15px" height="15px"></img></em>
                </button>
            </div>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
