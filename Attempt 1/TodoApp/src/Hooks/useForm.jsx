import { useState } from "react";

export default function useForm(initialValue) {
  const [state, setState] = useState(initialValue);

  function handleChange(e) {
    setState(e.target.value);
    console.log(e.target.value);
  }

  function reset() {
    setState(initialValue);
  }

  return [state, handleChange, reset];
}
