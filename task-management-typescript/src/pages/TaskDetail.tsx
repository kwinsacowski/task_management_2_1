import React, { useContext, useState, useEffect } from 'react';
import TaskContext from '../components/TaskContext';
import { useNavigate } from 'react-router-dom';

const TaskDetails: React.FC = () => {
  const taskContext = useContext(TaskContext);
  if (!taskContext) throw new Error('TaskContext is undefined');

  const { selectedTask, updateTask, selectTask } = taskContext;
  const navigate = useNavigate();

  const [title, setTitle] = useState(selectedTask?.title || '');
  const [description, setDescription] = useState(selectedTask?.description || '');

  // Update form when selected task changes
  useEffect(() => {
    setTitle(selectedTask?.title || '');
    setDescription(selectedTask?.description || '');
  }, [selectedTask?.id]);

  const handleSave = () => {
    if (!selectedTask) return;
    if (!title.trim()) return;

    updateTask({ ...selectedTask, title, description });
    navigate('/dashboard');
  };

  const handleCancel = () => {
    selectTask(null);
    navigate('/dashboard');
  };

  if (!selectedTask) return <p style={{ textAlign: 'center' }}>No task selected.</p>;

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', backgroundColor: '#fff8f0', borderRadius: '8px', border: '1px solid #d9cbb7', fontFamily: 'Garamond, serif' }}>
      <h3 style={{ color: '#5B4636' }}>Task Details</h3>
      <div style={{ marginBottom: '1rem' }}>
        <label>Title:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Description:</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }} />
      </div>
      <div>
        <button onClick={handleSave} style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#8B5E3C', color: '#fff', border: 'none', borderRadius: '4px' }}>Save</button>
        <button onClick={handleCancel} style={{ padding: '0.5rem 1rem', borderRadius: '4px' }}>Cancel</button>
      </div>
    </div>
  );
};

export default TaskDetails;
