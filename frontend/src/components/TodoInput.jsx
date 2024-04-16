import { useRef } from 'react';

const TodoInput = () => {
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
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className='text-3xl text-center mt-5'>Pern Todo List</h1>
      <div className='flex justify-center mt-5'>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs'
          ref={inputRef}
        />
        <button onClick={addTodo} className='btn btn-primary'>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
