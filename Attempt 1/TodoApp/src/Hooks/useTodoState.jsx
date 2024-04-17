import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function useTodoState(initialValue) {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
    },
    deleteTodo: (id) => {
      const updatedTodo = todos.filter((el) => el.id !== id);
      setTodos(updatedTodo);
    },
    toggleTodo: (todoId) => {
      const toggled = todos.map((el) =>
        el.id === todoId ? { ...el, completed: !el.completed } : el
      );
      setTodos(toggled);
    },
    editTodo: (id, newTodo) => {
      const editTodo = todos.map((el) =>
        el.id === id ? { ...todos, task: newTodo } : el
      );
      setTodos(editTodo);
    },
  };
}
