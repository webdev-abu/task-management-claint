import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/tasks`; // Change to your backend URL

// ✅ Get all tasks
export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

// ✅ Add a new task
export const addTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    return null;
  }
};

// ✅ Update an existing task
export const updateTask = async (taskId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${taskId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    return null;
  }
};

// ✅ Delete a task
export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_URL}/${taskId}`);
    return true;
  } catch (error) {
    console.error("Error deleting task:", error);
    return false;
  }
};

// ✅ Reorder tasks within the same category (optional)
export const reorderTasks = async (updatedTasks) => {
  try {
    const response = await axios.put(`${API_URL}/reorder`, {
      tasks: updatedTasks,
    });
    return response.data;
  } catch (error) {
    console.error("Error reordering tasks:", error);
    return null;
  }
};
