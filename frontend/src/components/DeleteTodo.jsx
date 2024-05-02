const DeleteTodo = ({ todo, getTodos }) => {
  const deleteTodo = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKENDURL}/api/todos/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (res.ok) {
        // console.log('toto deleted!');
        getTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button
        className='btn btn-secondary px-3 h-10 min-h-10 sm:px-4 sm:h-12 sm:min-h-12'
        onClick={() =>
          document.getElementById(`delete-id-${todo?.todo_id}`).showModal()
        }>
        Delete
      </button>
      <dialog id={`delete-id-${todo?.todo_id}`} className='modal'>
        <div className='modal-box'>
          <p className='py-4 text-left'>
            Are you sure you want to delete this Todo?
          </p>
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button
                className='btn btn-accent'
                onClick={() => deleteTodo(todo?.todo_id)}>
                Delete
              </button>
              <button className='btn ml-2'>Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteTodo;
