import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';

const TodoList = ({ todos, getTodos }) => {
  return (
    <section className='mt-5'>
      <div className='overflow-x-auto w-full max-w-3xl my-0 mx-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {todos?.map((todo, key) => (
              <tr key={todo?.todo_id}>
                {/* <th>{todo?.todo_id}</th> */}
                <td>{todo?.description}</td>
                <td className='text-right pr-2 sm:max-w-16'>
                  <EditTodo todo={todo} getTodos={getTodos} />
                </td>
                <td className='text-right pl-2 sm:max-w-16'>
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
