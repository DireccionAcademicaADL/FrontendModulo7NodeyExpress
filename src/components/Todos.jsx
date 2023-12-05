import Todo from "./Todo";

const Todos = ({ todos, removeTodo, updateTodo }) => {
  if (!todos) return <p>Cargando todos...</p>;

  return (
    <ul className="list-group mt-5">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}

      {todos.length === 0 && (
        <li className="list-group-item">
          <div className="d-flex">
            <h5>No todos found</h5>
          </div>
        </li>
      )}
    </ul>
  );
};

export default Todos;
