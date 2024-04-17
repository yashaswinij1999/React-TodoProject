import { TextField } from "@mui/material";
import useForm from "../Hooks/useForm";

export default function EditForm({ id, task, editTodo, toggleEditForm }) {
  const [state, handleChange, reset] = useForm(task);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, state);
          reset();
          toggleEditForm();
        }}
        style={{ margin: "1rem" }}
      >
        <TextField
          value={state}
          onChange={handleChange}
          fullWidth={true}
          autoFocus={true}
        />
      </form>
    </>
  );
}
