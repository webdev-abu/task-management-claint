import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskItem from "./TaskItem";

const TaskColumn = ({ column, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{column.id}</h2>
      <SortableContext
        items={column.tasks.map((task) => task._id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4">
          {column.tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default TaskColumn;
