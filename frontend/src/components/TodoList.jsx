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
                  <button
                    className='btn btn-accent'
                    onClick={() => deleteTodo(todo?.todo_id)}>
                    Delete
                  </button>
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
