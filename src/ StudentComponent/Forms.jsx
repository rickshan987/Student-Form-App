
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Name: " + name + "\nDepartment: " + dept + "\nAge: " + age);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Details</h2>

      <label>Name:</label>
      <input type="text" value={name}
        onChange={(e) => setName(e.target.value)} />

      <br /><br />

      <label>Department:</label>
      <input type="text" value={dept}
        onChange={(e) => setDept(e.target.value)} />

      <br /><br />

      <label>Age:</label>
      <input type="number" value={age}
        onChange={(e) => setAge(e.target.value)} />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
