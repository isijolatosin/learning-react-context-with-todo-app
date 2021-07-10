import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import { IconButton } from '@material-ui/core';
import { TaskListContext } from '../context/TaskListContext';

const InputField = () => {
  const [input, setInput] = useState('');

  const { addTask, foundItem, editTask } = useContext(TaskListContext);

  useEffect(() => {
    if (foundItem === null) {
      setInput('');
    }
    if (foundItem !== null) {
      setInput(foundItem.title);
    }
  }, [foundItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (foundItem === null) {
      input && addTask(input);
      setInput('');
    }

    if (foundItem !== null) {
      editTask(input, foundItem.id);
      setInput('');
    }
  };

  return (
    <InputContainer>
      <InputTop onSubmit={handleSubmit}>
        <InputIcon />
        <Input
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add Task...'
          value={input}
          type='text'
        />
      </InputTop>
      <InputBottom>
        <IconButton onClick={handleSubmit}>
          <SubmitBottom type='submit'>
            {foundItem ? 'Edit Task' : 'Add Task'}
          </SubmitBottom>
        </IconButton>
        {input && (
          <IconButton onClick={() => setInput('')}>
            <SubmitBottom>Clear</SubmitBottom>
          </IconButton>
        )}
      </InputBottom>
    </InputContainer>
  );
};

export default InputField;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(243, 243, 243, 0.3);
  padding: 10px;
  margin-bottom: 50px;
`;

const InputTop = styled.form`
  width: 100%;
  align-self: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  text-align: center;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 30px;
  padding: 5px;
  margin-bottom: 20px;
  align-items: center;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 18px;
  color: grey;
  height: 20px;
`;
const InputBottom = styled.div`
  display: flex;
  width: 70%;
  align-self: center;
  justify-content: space-evenly;
`;
const InputIcon = styled(AssignmentRoundedIcon)`
  color: rgb(192, 192, 192);
`;
const SubmitBottom = styled.div`
  padding: 7px;
  width: 100px;
  border: none;
  background-color: rgba(110, 110, 110, 0.5);
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`;
