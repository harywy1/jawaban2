import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { LocalSee } from '@material-ui/icons';


const styles = {
    margin: 10,
    padding: 5, 
};

function IconButtons(props) {
  return (
    <Grid container justify="0" alignItems="center">
      <IconButton> 
       <LocalSee/>
      </IconButton>
      <IconButton >
        
        <NotificationsIcon />
        
      </IconButton>      
      <IconButton> 
         <AccountCircle /> 
      </IconButton>
        
      
    </Grid>
    
        
  );
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);