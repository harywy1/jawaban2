import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  gridList: {
    paddingTop:'15px',
    width: 1800,
    height: 1000,
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

const tileData = [
    {
        img: 'http://www.genmuda.com/wp-content/uploads/2016/11/Billy-Davidson.jpg',
        title: '',
        author: 'Billy Davidson',
        featured: true,
    },
    {
        img: 'https://cdn-asset.hipwee.com/wp-content/uploads/2016/12/hipwee-seolhyun-750x422.jpg',
        title: '',
        author: 'Seolhyun',
        featured: false,
    },
    {
        img: 'https://cdn.idntimes.com/content-images/post/20180220/26863793-524863831234134-7885265428073676800-n-d970d539f6cff5653964bdf939630e1d.jpg',
        title: '',
        author: 'Film Dylan',
        featured: false,
    },
    {
        img: 'https://cdn-asset.hipwee.com/wp-content/uploads/2016/08/hipwee-hamish_daud-20150728-057-agus-750x422.jpg',
        title: '',
        author: 'Hamish Daud',
        featured: false,
    },
    {
        img: 'https://loop.co.id/uploads/article/media_upload/10439/persahabatancowok0.jpg',
        title: '',
        author: '',
        featured: false,
    },
    {
        img: 'https://cdn.idntimes.com/content-images/post/20180301/26865170-2065406703689333-6835473948033941504-n-3fe5ee76051b4f6a22a87c50c7f2d767.jpg',
        title: '',
        author: 'Risya',
        featured: true,
    },
    {
        img: 'https://img.duniaku.net/2014/09/4-kontroversi-ratna-sari-dewi-soekarno-yang-menggegerkan-pampasan-perang-jepang-7.jpg',
        title: '',
        author: 'Risya',
        featured: false,
    },
    {
        img: 'http://asset-a.grid.id/crop/0x0:0x0/700x465/photo/cewekbangetfoto/original/20794_pengakuan-remaja-cowok-indonesia-tentang-4-sifat-cewek-yang-selalu-bikin-mereka-bingung.jpg',
        title: '',
        author: 'Risya',
        featured: false,
    },
    {
        img: 'https://obs.line-scdn.net/0hRs1V5pAqDVwMLyP8LdZyCzZ5DjM_Qx5faBlcQlxBU2goTUwJYhkWMi8sV2t0GUoCYhtBOCgpFm0mHkgOMkEW/w644',
        title: '',
        author: 'Risya',
        featured: true,
    },
    {
        img: 'http://img.jakpost.net/c/2017/01/06/2017_01_06_19041_1483684209._large.jpg',
        title: '',
        author: 'Risya',
        featured: false,
    },
    {
        img: 'https://2.bp.blogspot.com/-ihUopRVCiq8/Wf0R1KkhTNI/AAAAAAAAv8U/381krTszb4QzRulavmlGg6pUKngnE4KgQCLcBGAs/s640/drama-korea-4.jpg',
        title: '',
        author: 'Risya',
        featured: false,
    },
    {
        img: 'https://s.kaskus.id/images/2018/06/15/10241338_20180615093427.jpg',
        title: '',
        author: 'Risya',
        featured: true,
    },
];

function AdvancedGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);