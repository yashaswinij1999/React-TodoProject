import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import useForm from "../Hooks/useForm";

export default function TodoForm({ addTodo }) {
  const [state, handleChange, reset] = useForm("");

  const handleSubmit = function (e) {
    e.preventDefault();
    addTodo(state);
    reset();
  };

  return (
    <>
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }} elevation={6}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            variant="standard"
            value={state}
            onChange={handleChange}
            label="add Todo"
            fullWidth
          />
        </form>
      </Paper>
    </>
  );
}
