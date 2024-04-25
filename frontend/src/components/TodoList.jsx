import EditTodo from './EditTodo';

const TodoList = ({ todos, getTodos }) => {
  const deleteTodo = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKENDURL}/api/todos/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (res.ok) {
        console.log('toto deleted!');
        getTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='mt-5'>
      <div className='overflow-x-auto max-w-3xl my-0 mx-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {todos?.map((todo, key) => (
              <tr key={todo?.todo_id}>
                <th>{todo?.todo_id}</th>
                <td>{todo?.description}</td>
                <td className='text-left'>
                  <EditTodo todo={todo} getTodos={getTodos} />
                </td>
                <td className='text-left'>
                  {/* <button
                    className='btn btn-accent'
                    onClick={() => deleteTodo(todo?.todo_id)}>
                    Delete
                  </button> */}

                  <button
                    className='btn btn-secondary'
                    onClick={() =>
                      document
                        .getElementById(`delete-id-${todo?.todo_id}`)
                        .showModal()
                    }>
                    Delete
                  </button>
                  <dialog id={`delete-id-${todo?.todo_id}`} className='modal'>
                    <div className='modal-box'>
                      <p className='py-4'>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TodoList;
