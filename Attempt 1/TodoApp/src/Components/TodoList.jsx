import { List, Paper } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
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
          />
        ))}
      </List>
    </Paper>
  );
}
