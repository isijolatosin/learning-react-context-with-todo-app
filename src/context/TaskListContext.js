import React, { useState, useEffect, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialValue = JSON.parse(window.localStorage.getItem('tasks'));

  const [tasks, setTasks] = useState(initialValue);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title: title, id: uuidv4() }]);
  };

  const deleteTask = (id) => {
    const filterTasks = tasks.filter((task) => task.id !== id);
    setTasks([...filterTasks]);
  };

  const [foundItem, setFoundItem] = useState(null);

  const findTask = (id) => {
    const findTask = tasks.find((task) => task.id === id);
    setFoundItem(findTask);
  };

  const editTask = (title, id) => {
    let newTasksArray = [];

    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    newTasksArray.push(newTasks);
    setTasks(...newTasksArray);
  };

  const clearList = () => {
    setTasks([]);
  };

  return (
    <div>
      <TaskListContext.Provider
        value={{
          tasks,
          addTask,
          deleteTask,
          findTask,
          editTask,
          foundItem,
          clearList,
        }}
      >
        {props.children}
      </TaskListContext.Provider>
    </div>
  );
};

export default TaskListContextProvider;
