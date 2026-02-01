import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskContext from '../components/TaskContext';
import type { Task } from '../types/types';



const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const taskContext = useContext(TaskContext);

  if (!taskContext) throw new Error('TaskContext is undefined');

  const { tasks, addTask, deleteTask, selectTask } = taskContext;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (!title.trim()) {
    setError('Task title is required');
    return;
  }

    const newTask: Task = { id: Date.now(), title, description };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setError('');
};

  const handleViewDetails = (task: Task) => {
    selectTask(task);
    navigate(`/dashboard/task/${task.id}`);
  };

  return (
    <div className="dashboard-container" style={{ fontFamily: 'Garamond, serif', padding: '2rem', backgroundColor: '#fdf6e3', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#5B4636' }}>Cozy Cottage Task Dashboard</h2>

      <div style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', backgroundColor: '#fff8f0' }}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', fontFamily: 'Garamond, serif' }}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', fontFamily: 'Garamond, serif' }}
        />
        {error && (<p style={{ color: 'darkred', marginTop: '0.5rem' }}>{error}</p>)}
        <button onClick={handleAddTask} style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#8B5E3C', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Add Task
        </button>
      </div>

      <div>
        {tasks.map(task => (
          <div key={task.id} style={{ border: '1px solid #d9cbb7', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', backgroundColor: '#fff8f0' }}>
            <h4 style={{ color: '#5B4636' }}>{task.title}</h4>
            <p>{task.description}</p>
            <button onClick={() => handleViewDetails(task)} style={{ marginRight: '0.5rem', padding: '0.25rem 0.5rem' }}>View Details</button>
            <button onClick={() => deleteTask(task.id)} style={{ padding: '0.25rem 0.5rem' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
