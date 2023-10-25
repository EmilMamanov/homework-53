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
            <button className="delete-btn" onClick={() => onDelete(task.id)}></button>
        </div>
    );
};

export default Task;
