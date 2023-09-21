import "../App.css"

const DisplayTodos = ({ todoList, deleteTodo }) => {
  return (
    <>
      <ul className="list-group">
        Todo List:
        <hr></hr>
        {todoList.map((todo , i) => (
          <li className="list-group-item" key={todo}>
            {todo}
            <span>
              <i
                className="bi bi-trash3"
                onClick={() => {
                  deleteTodo(i);
                  console.log("Clicked");
                }}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DisplayTodos;
