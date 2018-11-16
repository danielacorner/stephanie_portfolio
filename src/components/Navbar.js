import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const Wrapper = styled.div`
  .appbar {
    background: none;
    box-shadow: none;
    .toolbar {
      display: grid;
      grid-template-columns: 1fr auto auto auto;
    }
  }
`;

const ButtonAppBar = props => (
  <Wrapper>
    <AppBar className="appbar" position="static">
      <Toolbar className="toolbar">
        {/* {this.state.isMobile && <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>} */}
        <Typography variant="h6" color="inherit">
          Spichetti
        </Typography>

        <Button color="inherit">About</Button>
        <Button color="inherit">Works</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  </Wrapper>
);

export default ButtonAppBar;
