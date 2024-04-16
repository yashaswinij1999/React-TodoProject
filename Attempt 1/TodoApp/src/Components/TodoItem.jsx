import Paper from "@mui/material/Paper";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import EditIcon from "@mui/icons-material/Edit";

export default function TodoItem({
  id,
  task,
  completed,
  deleteTodo,
  toggleTodo,
}) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <ListItem>
      <Checkbox
        {...label}
        tabIndex={-1}
        checked={completed}
        onClick={() => {
          toggleTodo(id);
        }}
      />
      <ListItemText
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            deleteTodo(id);
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
