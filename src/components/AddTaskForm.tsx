import React, { useState } from 'react';
import '../App.css';

interface AddTaskFormProps {
    onAddTask: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
    const [currentTask, setCurrentTask] = useState('');

    const handleAddTask = () => {
        if (currentTask) {
            onAddTask(currentTask);
            setCurrentTask('');
        }
    };

    return (
        <div className="task-input-container">
            <input
                type="text"
                className="task-input"
                placeholder="Add a task..."
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
            />
            <button className="add-btn" onClick={() => handleAddTask()}></button>
        </div>
    );
};

export default AddTaskForm;
