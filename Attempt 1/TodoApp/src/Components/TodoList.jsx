import { List, Paper } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((el) => (
          <TodoItem
            id={el.id}
            task={el.task}
            key={el.id}
            completed={el.completed}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        ))}
      </List>
    </Paper>
  );
}
