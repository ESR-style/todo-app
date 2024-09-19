import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ task, deleteTask }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                <FaTrash />
            </button>
        </div>
    );
};

export default TodoItem;