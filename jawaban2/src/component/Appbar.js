import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {NavLink} from 'react-router-dom'
import Icon from './Icon';





const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
search: {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing.unit * 2,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing.unit * 3,
    width: 'auto',
  },
},
searchIcon: {
  width: theme.spacing.unit * 9,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    
    <div className={classes.root}>
      <AppBar  style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Grid>
          <Typography variant="h3" color="primary" className={classes.grow}>
          𝓲𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶
            </Typography>
            </Grid>
             <div className={classes.search}>
              <div className={classes.searchIcon}>
              <IconButton> 
                <SearchIcon />
            </IconButton>
              </div>
              <InputBase
                
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            
                <Grid>
                    <div>
                    <NavLink exact to="/src/component/Followers.js">
                    <Button variant="text" color="text">FOLLOWERS</Button>
                    </NavLink>
                    <NavLink path to="/src/component/Favorites.js">
                    <Button variant="text" color="text">FAVORITES</Button>
                    </NavLink>
                    <NavLink path to="/src/component/Recent.js">
                    <Button variant="text" color="text">RECENT</Button>
                    </NavLink>
                    <NavLink path to="/src/component/Popular.js">
                    <Button variant="text" color="text">POPULAR</Button>
                    </NavLink>
                    </div>
                </Grid>
            
            <Typography variant="h6" color="red" className={classes.grow}>
            </Typography>
            
  
            <Grid Item xs={0}>
                <Icon/>
            </Grid>
      </Toolbar> 
      </AppBar>
            
      </div>      
      
          
    
  
  );
}



ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

