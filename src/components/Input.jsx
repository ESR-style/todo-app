import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Input = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center mt-6">
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add a new task" 
                className="border border-gray-300 p-2 rounded-lg w-full sm:w-64 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button type="submit" className="bg-red-500 text-white p-4 rounded-full hover:bg-red-700 flex items-center justify-center sm:ml-4">
                <FaPlus />
            </button>
        </form>
    );
};

export default Input;