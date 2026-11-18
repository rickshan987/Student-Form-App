
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [age, setAge] = useState("");

  function handleChange(e) {
    if (e.target.name === "name")
      setName(e.target.value);
    else if (e.target.name === "dept")
      setDept(e.target.value);
    else
      setAge(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Welcome " + name + "!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Form</h2>

      <label>Enter your name:</label>

      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <label>Enter your dept:</label>

      <input
        type="text"
        name="dept"
        value={dept}
        onChange={handleChange}
      />
       <label>Enter your age:</label>

      <input
        type="text"
        name="age"
        value={age}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
