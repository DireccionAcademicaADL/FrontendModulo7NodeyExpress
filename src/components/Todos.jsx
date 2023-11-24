import Todo from "./Todo";

export const Todos = ({ todos, removeTodo, updateTodo }) => {
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
