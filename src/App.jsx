import { TaskProvider } from "./context/TaskContext";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Kanban Task Board</h1>
        <TaskBoard />
      </div>
    </TaskProvider>
  );
}

export default App;
