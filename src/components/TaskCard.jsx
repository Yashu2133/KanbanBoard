import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useTasks } from "../context/TaskContext";

function TaskCard({ task, index }) {
  const { setTasks } = useTasks();
  const [show, setShow] = useState(false);

  const remove = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="bg-gray-50 p-3 rounded border mb-2"
        >
          <div className="flex justify-between items-center">
            <p className="font-medium">{task.title}</p>
            <button onClick={remove} className="text-sm text-red-500">X</button>
          </div>
          {show && <p className="text-sm text-gray-600 mt-1">{task.description}</p>}
          <button
            onClick={() => setShow(!show)}
            className="text-xs text-blue-500 mt-1"
          >
            {show ? "Hide" : "View"} Details
          </button>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;