import  { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const { setTasks } = useTasks();
  const [form, setForm] = useState({ title: "", description: "", status: "todo" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, { ...form, id: uuid() }]);
    setForm({ title: "", description: "", status: "todo" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Task Title"
        className="p-2 border rounded w-full"
        required
      />
      <input
        type="text"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        placeholder="Task Description"
        className="p-2 border rounded w-full"
      />
      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
        className="p-2 border rounded"
      >
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        + Add
      </button>
    </form>
  );
}

export default TaskForm;
