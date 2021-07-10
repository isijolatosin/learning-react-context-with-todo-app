import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

function ThemeButtons() {
  return (
    <Container>
      <IconButton>
        <Button>light</Button>
      </IconButton>
      <IconButton>
        <Button>dark</Button>
      </IconButton>
    </Container>
  );
}

export default ThemeButtons;

const Button = styled.button`
  padding: 10px 20px;
`;
const Container = styled.div`
  display: flex;
  margin-bottom: 60px;
  justify-content: space-around;
  width: 50%;
`;
