import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  console.log({ todos });

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKENDURL}/api/todos`);
      if (res.ok) {
        const data = await res.json();
        setTodos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TodoInput todos={todos} getTodos={getTodos} />
      <TodoList todos={todos} getTodos={getTodos} />
    </>
  );
}

export default App;
