import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskColumn from "./TaskColumn";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Task 1",
      description: "This is task 1",
      category: "To-Do",
    },
    {
      id: "2",
      title: "Task 2",
      description: "This is task 2",
      category: "In Progress",
    },
    {
      id: "3",
      title: "Task 3",
      description: "This is task 3",
      category: "Done",
    },
  ]);

  const categories = ["To-Do", "In Progress", "Done"];

  return (
    <div className="flex gap-4 p-5">
      {categories.map((category) => (
        <TaskColumn
          key={category}
          category={category}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
