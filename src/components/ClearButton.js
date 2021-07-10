import { IconButton } from '@material-ui/core';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { TaskListContext } from '../context/TaskListContext';

const ClearButton = () => {
  const { clearList } = useContext(TaskListContext);

  return (
    <Clear>
      <IconButton onClick={() => clearList()}>
        <SubmitBottom>Clear List</SubmitBottom>
      </IconButton>
    </Clear>
  );
};

export default ClearButton;

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

const Clear = styled.div`
  text-align: center;
  margin-top: 40px;
`;
