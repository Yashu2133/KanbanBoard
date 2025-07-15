import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import { useTasks } from "../context/TaskContext";

function TaskColumn({ column }) {
  const { tasks } = useTasks();
  const columnTasks = tasks.filter((task) => task.status === column.id);

  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <h2 className="text-lg font-semibold mb-2">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="min-h-[200px]"
          >
            {columnTasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TaskColumn;