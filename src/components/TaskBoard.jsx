import TaskForm from "./TaskForm";
import TaskColumn from "./TaskColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { useTasks } from "../context/TaskContext";

const columns = [
  { id: "todo", title: "To Do" },
  { id: "doing", title: "Doing" },
  { id: "done", title: "Done" },
];

function TaskBoard() {
  const { tasks, setTasks } = useTasks();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination || destination.droppableId === source.droppableId) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === draggableId ? { ...task, status: destination.droppableId } : task
      )
    );
  };

  return (
    <div>
      <TaskForm />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          {columns.map((col) => (
            <TaskColumn key={col.id} column={col} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default TaskBoard;