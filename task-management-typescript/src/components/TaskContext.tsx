import React, { createContext, useState, ReactNode } from 'react';
import type { Task } from '../types/types';



// Define the context type
interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updated: Task) => void;
  deleteTask: (id: number) => void;
  selectedTask: Task | null;
  selectTask: (task: Task | null) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

// TaskProvider component
export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const addTask = (task: Task) => setTasks(prev => [...prev, task]);

  const updateTask = (updated: Task) => {
    setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)));
    if (selectedTask?.id === updated.id) setSelectedTask(updated);
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id));
    if (selectedTask?.id === id) setSelectedTask(null);
  };

  const selectTask = (task: Task | null) => setSelectedTask(task);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, selectedTask, selectTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
