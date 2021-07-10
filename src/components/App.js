import React, { useContext } from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import TaskList from './TaskList';
import TaskListContextProvider from '../context/TaskListContext';
import ThemeButtons from './ThemeButtons';

function App() {
  return (
    <TaskListContextProvider>
      <Container>
        <ThemeButtons />
        <Wrapper>
          <H1>Task Manager</H1>
          <InputField />
          <H3>Task List</H3>
          <TaskList />
        </Wrapper>
      </Container>
    </TaskListContextProvider>
  );
}

export default App;

const H1 = styled.h2`
  color: rgb(110, 110, 110);
  margin: 10px auto 10px;
  width: 60%;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  text-align: center;
`;
const H3 = styled.h3`
  color: rgb(110, 110, 110);
  margin: 100px auto 40px;
  padding-bottom: 5px;
  width: 25%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  text-align: center;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 2px;
  width: 50%;
  padding: 20px;
  padding-bottom: 50px;
  border: 1px solid rgba(128, 128, 128, 0.2);
`;
