import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1800,
    height: 1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const tileData = [
   {
       img: 'https://i2.wp.com/dekoruma.blog/wp-content/uploads/2018/01/Lampu-Tumblr-1.jpg?fit=975%2C1463&ssl=1',
       title: '',
       author: 'Risya',
   },
   {
    img: 'https://www.influencersingapore.com/wp-content/uploads/2018/07/20160225195606-instagram-content-photo-sharing-photography-networking-communication.jpeg',
    title: 'Nocapt',
    author: 'Andi',
   },
   {
    img: 'https://mymodernmet.com/wp/wp-content/uploads/archive/LNu-UAyGfRK2WbD-Deh8_1082104833.jpeg',
    title: 'Nikmati',
    author: 'Jodie',
   },
   {
    img: 'https://images.unsplash.com/photo-1497704628914-8772bb97f450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    title: '',
    author: 'yudi',
   },
   {
    img: 'https://data.whicdn.com/images/240647789/original.gif',
    title: '',
    author: '',
   },
   {
    img: 'https://images.unsplash.com/photo-1526116977494-90748acc0cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    title: 'Tanpa Nama',
    author: 'Tanpa Nama',
   },
   {
    img: 'http://www.personalbest.me.uk/images/large/adidas/Adidas_Tumblr_326_Buy_Adidas_Tumblr_Plaits_For_Girls_36-47_personalbest_me_uk_LRG.jpg',
    title: '',
    author: 'Chand',
   },
   {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWgoIXigk11_9U2kvXj6wS0aY0FIN5YMM1_ZbpVm7XpbqcCG3',
    title: 'Berkilaulah',
    author: 'Tiara',
   },
   {
    img: 'https://d1yw9ca99y6xou.cloudfront.net/thumbnails/670_446_bts-rajai-top-artist-2018-ini-daftar-artis-korea-populer-di-tumblr_m_.jpg',
    title: '',
    author: 'Edo',
   },
   {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCp7l4eNwC5tXjkbbFi9wYMELiRYqMt9d2Jp05l5KcuWOikg0',
    title: '',
    author: 'Bunga',
   },
   {
    img: 'https://i.ytimg.com/vi/BciXu2KLjFY/maxresdefault.jpg',
    title: 'MyRoom',
    author: 'NoName',
   },
  ];

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList}>
        <GridListTile key="Subheader" cols={10} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.img} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);