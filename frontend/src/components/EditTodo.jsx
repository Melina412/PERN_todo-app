import { useRef } from 'react';

const EditTodo = ({ todos, todo, getTodos }) => {
  const editRef = useRef();

  const editTodo = async (id) => {
    console.log({ id });
    const description = editRef.current?.value; // das muss hier description heißen weil ich im backend die db query auch so benannt hab
    console.log({ description });
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKENDURL}/api/todos/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ description }),
        }
      );

      if (res.ok) {
        console.log('todo was edited!');
        getTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        className='btn btn-neutral'
        onClick={() =>
          document.getElementById(`id-${todo?.todo_id}`).showModal()
        }>
        Edit
      </button>
      <dialog id={`id-${todo?.todo_id}`} className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Edit Todo:</h3>
          <input
            type='text'
            className='input input-bordered w-full mt-5'
            defaultValue={todo?.description}
            ref={editRef}
          />
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button
                className='btn btn-secondary'
                onClick={() => editTodo(todo?.todo_id)}>
                Edit
              </button>
              <button className='btn ml-2'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditTodo;
