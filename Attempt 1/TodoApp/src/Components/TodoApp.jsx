import * as React from "react";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  const data = [
    { id: 1, task: "buy milk", completed: true },
    { id: 2, task: "buy groceries", completed: false },
    { id: 3, task: "clean the floor", completed: false },
  ];

  const [todos, setTodos] = React.useState(data);

  function addTodo(newTodo) {
    setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
  }

  function deleteTodo(id) {
    const updatedTodo = todos.filter((el) => el.id !== id);
    setTodos(updatedTodo);
  }

  function toggleTodo(todoId) {
    const toggled = todos.map((el) =>
      el.id === todoId ? { ...el, completed: !el.completed } : el
    );
    console.log(toggled);
    setTodos(toggled);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent={"center"} style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
