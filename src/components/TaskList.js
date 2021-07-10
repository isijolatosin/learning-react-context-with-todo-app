import React, { useContext } from 'react';
import styled from 'styled-components';
import { TaskListContext } from '../context/TaskListContext';
import ClearButton from './ClearButton';
import Task from './Task';

function TaskList() {
  const { tasks } = useContext(TaskListContext);

  console.log(tasks);

  return (
    <div>
      {tasks.length === 0 ? (
        <h1>No Data!</h1>
      ) : (
        <Container>
          {tasks.map((task) => (
            <Task title={task.title} id={task.id} key={task.id} />
          ))}
        </Container>
      )}
      {tasks.length !== 0 && <ClearButton />}
    </div>
  );
}

export default TaskList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 300px;
  margin-left: 50px;
  margin-right: 50px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const ContainerZero = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 0px;
  margin-left: 50px;
  margin-right: 50px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
