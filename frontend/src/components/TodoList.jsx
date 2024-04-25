import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';

const TodoList = ({ todos, getTodos }) => {
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
                  <DeleteTodo todo={todo} getTodos={getTodos} />
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
