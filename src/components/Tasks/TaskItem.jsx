import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, onEdit, onDelete, isDragging }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task._id });
  // console.log(task._id);
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-gray-50 p-4 rounded-lg shadow-sm cursor-move"
    >
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{task.description}</p>
      <p className="text-xs text-gray-500 mt-2">
        Created: {new Date(task.timestamp).toLocaleString()}
      </p>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-600 hover:text-blue-700"
        >
          <FaEdit size={22} />
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="text-red-600 hover:text-red-700"
        >
          <FaTrash size={22} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
