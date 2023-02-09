import React,{useState, useEffect} from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

const App = () =>{

    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput]= useState("");
    const [todos, settodos] = useState(initialState);
    const [edittodo, setedittodo] = useState(null);
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return(
        <div className="appcon">
          <div className="appgo">
            <Header />
            <div>
              <Form 
                input={input}
                setInput={setInput}
                todos={todos}
                settodos={settodos}
                edittodo={edittodo}
                setedittodo={setedittodo}
              />
            </div>
            <div>
                <TodoList todos={todos} settodos={settodos} setedittodo={setedittodo}/>
            </div>
          </div>
        </div>
    );
}

export default App; 