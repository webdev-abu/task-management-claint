import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskCard = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  return (
    <motion.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
      className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center cursor-grab"
    >
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>
      <div className="flex gap-2">
        <FaEdit className="text-blue-500 cursor-pointer" />
        <FaTrash className="text-red-500 cursor-pointer" />
      </div>
    </motion.div>
  );
};

export default TaskCard;
