import { useRef } from 'react';

const TodoInput = ({ getTodos }) => {
  const inputRef = useRef();

  const addTodo = async () => {
    const description = inputRef.current?.value; // das muss hier description heißen weil ich im backend die db query auch so benannt hab
    console.log({ description });

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKENDURL}/api/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });

      if (res.ok) {
        console.log('todo was submitted!');
        getTodos();
        inputRef.current.value = '';
      }
    } catch (error) {
      console.log(error);
    }
  };

  const triggerEvent = (e) => {
    if (e.key === 'Enter' && inputRef.current.value.length > 0) {
      addTodo();
    }
  };

  return (
    <div>
      <h1 className='text-3xl text-center mt-5 tracking-wide'>TODO LIST</h1>
      <div
        className='flex justify-center gap-4 mt-5 px-4
       w-full'>
        <input
          type='text'
          placeholder='Type new todo here'
          className='input input-bordered w-full max-w-sm h-10 sm:h-12'
          ref={inputRef}
          onKeyDown={triggerEvent}
        />
        <button
          onClick={addTodo}
          className='btn btn-primary px-3 h-10 min-h-10 sm:px-4 sm:h-12 sm:min-h-12'>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
