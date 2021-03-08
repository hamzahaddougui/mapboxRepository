import { useSelector } from 'react-redux';

import styles from "./NeighborhoodListBar.module.css";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderSharp from '@material-ui/icons/FavoriteBorderSharp';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    height: '210px',
    padding: '4px 0',
    marginTop: 'calc(100vh - 23%)',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    //marginTop: 'calc(100vh - 33%)',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: "Poppins",
    fontWeight: "Bold",
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  score: {
    color: 'white',
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "Bold",
  },
  heartIcon: {
    color: 'white',  
  },
  HeartIconWrapper: {
    position: 'absolute',
    top: '18px',
    right: '21px',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  wrapper: {
    backgroundColor: '#323643',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 50)',
    borderRadius: '24px',
    margin: '0 4px',
    width: '257px',
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const NeighborhoodListBar = () => {
  const classes = useStyles();

  const neighborhoods = useSelector(state => state.modules.neighborhood.matched);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5.5}>
        {neighborhoods.data.map((neighborhood) => (
          <GridListTile className={classes.wrapper} key={neighborhood.Neighborhood}>
            {/* <img src={neighborhood.img} alt={neighborhood.title} /> */}
            {/* <div className={classes.wrapper}></div> */}
            {/* <GridListTileBar
              title={neighborhood.Neighborhood}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${neighborhoods.Neighborhood}`}>
                  <FavoriteBorderSharp className={classes.title} />
                </IconButton>
              }
            /> */}
            <IconButton className={classes.HeartIconWrapper} aria-label={`Heart ${neighborhoods.Neighborhood}`}>
                  <FavoriteBorderSharp className={classes.heartIcon} />
            </IconButton>
            <Typography className={classes.title} component="h6" variant="h6">{neighborhood.Neighborhood}</Typography>
            <div className={styles.score} >
              <Typography className={classes.score} component="body1" variant="body1">
                {neighborhood.Score}%
              </Typography>
            </div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default NeighborhoodListBar


// import { useSelector } from 'react-redux';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(() => ({
//     root: {
//       display: 'flex',
//     },
//     details: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     content: {
//       flex: '1 0 auto',
//     },
//   }));

// const index = () => {
//     const classes = useStyles();

//     const neighborhoods = useSelector(state => state.modules.neighborhood.matched);

//     console.log(neighborhoods.data);
//     return (
//         <div>
//             <h1>Results:</h1>
//                 {neighborhoods.data.map((neighborhood) => (
//                     // <Card className={classes.root}>
//                     // <div className={classes.details}>
//                     //   <CardContent className={classes.content}>
//                     //     <Typography component="h5" variant="h5">
//                     //       {neighborhood.Neighborhood}
//                     //     </Typography>
//                     //     <Typography variant="subtitle1" color="textSecondary">
//                     //         {neighborhood.Score}
//                     //     </Typography>
//                     //   </CardContent>
//                     //   </div>
//                     // </Card>
//                     <ul>
//                         <li>{neighborhood.Neighborhood}</li>
//                         <li>{neighborhood.Score}</li>
//                     </ul>
//                 ))}
//         </div>
//     )
// }

// export default index