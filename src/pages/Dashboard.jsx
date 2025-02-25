import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import TaskForm from "../components/Tasks/TaskForm";
import TaskColumn from "../components/Tasks/TaskColumn";
import TaskItem from "../components/Tasks/TaskItem";

const Dashboard = () => {
  const [columns, setColumns] = useState([
    { id: "To-Do", tasks: [] },
    { id: "In Progress", tasks: [] },
    { id: "Done", tasks: [] },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [activeTask, setActiveTask] = useState(null);

  // Fetch tasks from the backend
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
    const tasks = response.data;
    const updatedColumns = columns.map((column) => ({
      ...column,
      tasks: tasks.filter((task) => task.category === column.id),
    }));
    setColumns(updatedColumns);
  };

  // Handle drag-and-drop
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event) => {
    const { active } = event;
    const task = columns
      .flatMap((column) => column.tasks)
      .find((task) => task._id === active.id);
    setActiveTask(task);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over) return;

    const activeColumn = columns.find((column) =>
      column.tasks.some((task) => task._id === active.id)
    );
    const overColumn = columns.find((column) =>
      column.tasks.some((task) => task._id === over.id)
    );

    if (active.id === over.id) return;

    if (activeColumn.id === overColumn.id) {
      // Reorder tasks within the same column
      const columnIndex = columns.findIndex(
        (column) => column.id === activeColumn.id
      );
      const updatedTasks = arrayMove(
        activeColumn.tasks,
        activeColumn.tasks.findIndex((task) => task._id === active.id),
        activeColumn.tasks.findIndex((task) => task._id === over.id)
      );
      const updatedColumns = [...columns];
      updatedColumns[columnIndex].tasks = updatedTasks;
      setColumns(updatedColumns);
      await axios.put(`${import.meta.env.VITE_API_URL}/tasks/reorder`, {
        tasks: updatedTasks,
      });
    } else {
      // Move task to a different column
      const activeTask = activeColumn.tasks.find(
        (task) => task._id === active.id
      );
      const updatedTask = { ...activeTask, category: overColumn.id };
      await axios.put(
        `${import.meta.env.VITE_API_URL}/tasks/${active.id}`,
        updatedTask
      );
      fetchTasks();
    }

    setActiveTask(null);
  };

  // Add or edit a task
  const handleSaveTask = async (task) => {
    if (editingTask) {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/tasks/${task._id}`,
        task
      );
    } else {
      await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, task);
    }
    fetchTasks();
    setShowForm(false);
    setEditingTask(null);
  };

  // Delete a task
  const handleDeleteTask = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Task Management System
      </h1>

      {/* Add Task Button */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-6 hover:bg-blue-700 transition duration-300"
      >
        <FaPlus className="inline-block mr-2" />
        Add Task
      </button>

      {/* Task Form Modal */}
      {showForm && (
        <TaskForm
          onSave={handleSaveTask}
          onCancel={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
          task={editingTask}
        />
      )}

      {/* Task Columns */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SortableContext
            items={columns.map((column) => column.id)}
            strategy={horizontalListSortingStrategy}
          >
            {columns.map((column) => (
              <TaskColumn
                key={column.id}
                column={column}
                onEdit={setEditingTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </SortableContext>
        </div>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeTask && (
            <TaskItem
              task={activeTask}
              onEdit={setEditingTask}
              onDelete={handleDeleteTask}
              isDragging
            />
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Dashboard;
