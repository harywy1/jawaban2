import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CommentIcon from '@material-ui/icons/Comment';


const styles = theme => ({

  
  card: {
    maxWidth: 1000,
    padding:'700px',
    paddingTop:'10px',
 
  },
  media: {
    height: 80,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: '0',
    [theme.breakpoints.up('sm')]: {
      marginRight: 100,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[300],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (

      
      <Card className={classes.card}>
         
        <CardMedia
          className={classes.media}
          image="http://www.destination360.com/asia/china/images/s/himalayas-mountains.jpg"
        />
         <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              ⁂
            </Avatar>
          }
          
          title="Instagram"
          subheader="Himalaya"
        />
        <CardContent>
          <Typography component="p">
            nocapt                                                                                                                                                                                     
            <p>by: Someone</p>
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Comment">
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
       
      </Card>
      
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);