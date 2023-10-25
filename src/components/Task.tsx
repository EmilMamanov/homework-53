import React from 'react';
import '../App.css';

interface TaskProps {
    task: {
        id: string;
        text: string;
    };
    onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
    return (
        <div className="Task">
            <span>{task.id}. {task.text}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default Task;
