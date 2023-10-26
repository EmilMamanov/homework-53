import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([
        { id: '1', text: 'Оформить предзаказ Tekken 8' },
        { id: '2', text: 'Дождаться выхода игры' },
        { id: '3', text: 'Определиться с любимым персонажем' }
    ]);
    const [taskCount, setTaskCount] = useState(4);

    const addTask = (text: string) => {
        const newTask = { id: taskCount.toString(), text };
        setTaskCount(taskCount + 1);
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        const updatedTasksWithNumbers = updatedTasks.map((task, index) => ({
            ...task,
            id: (index + 1).toString(),
        }));
        setTasks(updatedTasksWithNumbers);
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <AddTaskForm onAddTask={addTask} />
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={deleteTask} />
            ))}
        </div>
    );
}

export default App;
