import { useState } from 'react';

const EditTodo = ({ todo, getTodos }) => {
  // const editRef = useRef(); // muss hier doch einen state nehmen um den input bei cancel wieder auf der vorherigen wert zurücksetzen zu können
  const [description, setDescription] = useState(todo?.description);

  const editTodo = async (id) => {
    console.log({ id });
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button
                className='btn btn-secondary'
                onClick={() => editTodo(todo?.todo_id)}>
                Edit
              </button>
              <button
                className='btn ml-2'
                onClick={() => setDescription(todo?.description)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditTodo;
