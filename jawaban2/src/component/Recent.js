import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  
});

const messages = [
  {
    id: 1,
    primary: 'Billy Davidson',
    secondary: "Menyukai Foto Syahrini",
    person: 'http://www.genmuda.com/wp-content/uploads/2016/11/Billy-Davidson.jpg',
  },
  {
    id: 2,
    primary: 'Alghazali',
    secondary: `Mengikuti Nadia Hutagalung`,
    person: 'https://makassar.terkini.id/aset/images/sites/2/2018/06/instagram-_-al_gazali96.jpg',
  },
  {
    id: 3,
    primary: 'Nadiah',
    secondary: 'Menyukai Foto Indah',
    person: 'https://pbs.twimg.com/media/DftThWVU0AEdaKL.jpg:large',
  },
  {
    id: 4,
    primary: 'Tiara',
    secondary: 'Mengikuti Mutiara',
    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtprjKAdJFNqi5_Hu0foDIWak9FbnjuKThl3o7EJdblWh0SiZumw',
  },
  
];

function BottomAppBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Inbox
        </Typography>
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person }) => (
            <Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subHeader}>Today</ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subHeader}>Yesterday</ListSubheader>}
              <ListItem button>
                <Avatar alt="Profile Picture" src={person} />
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </Fragment>
          ))}
        </List>
      </Paper>
      
    </React.Fragment>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);