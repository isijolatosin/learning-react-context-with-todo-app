import React, { useContext } from 'react';
import styled from 'styled-components';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { TaskListContext } from '../context/TaskListContext';

function Task({ title, id }) {
  const { deleteTask, findTask } = useContext(TaskListContext);

  const handleDelete = () => {
    deleteTask(id);
  };
  const handleFind = () => {
    findTask(id);
  };

  return (
    <ListItem>
      <Text>{title}</Text>
      <Right>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={handleFind}>
          <EditRoundedIcon />
        </IconButton>
      </Right>
    </ListItem>
  );
}

export default Task;

const ListItem = styled.div`
  height: 30px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  color: rgba(128, 128, 128);
  padding-left: 0;
  background-color: rgba(128, 128, 128, 0.2);
  padding: 7px;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.1;
`;
const Text = styled.p`
  color: rgba(0, 0, 0, 0.7);
  flex: 0.9;
  padding-left: 10px;
  line-height: 17px;
`;
