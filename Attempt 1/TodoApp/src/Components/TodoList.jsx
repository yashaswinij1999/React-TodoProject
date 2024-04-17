import { Divider, List, Paper } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  if (todos.length > 0) {
    return (
      <Paper>
        <List>
          {todos.map((el, i) => (
            <>
              <TodoItem
                id={el.id}
                task={el.task}
                key={el.id}
                completed={el.completed}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  } else {
    <Paper>
      <List>"No items to list"</List>
    </Paper>;
  }
}
