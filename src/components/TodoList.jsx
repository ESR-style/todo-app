import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, deleteTask }) => {
    return (
        <div className="mt-6">
            {tasks.length ? (
                tasks.map((task) => (
                    <TodoItem 
                        key={task.id} 
                        task={task} 
                        deleteTask={deleteTask}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500">No tasks available</p>
            )}
        </div>
    );
};

export default TodoList;