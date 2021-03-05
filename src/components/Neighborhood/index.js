import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
  }));

const index = () => {
    const classes = useStyles();

    const neighborhoods = useSelector(state => state.modules.neighborhood.matched);

    console.log(neighborhoods.data);
    return (
        <div>
            <h1>Results:</h1>
                {neighborhoods.data.map((neighborhood) => (
                    // <Card className={classes.root}>
                    // <div className={classes.details}>
                    //   <CardContent className={classes.content}>
                    //     <Typography component="h5" variant="h5">
                    //       {neighborhood.Neighborhood}
                    //     </Typography>
                    //     <Typography variant="subtitle1" color="textSecondary">
                    //         {neighborhood.Score}
                    //     </Typography>
                    //   </CardContent>
                    //   </div>
                    // </Card>
                    <ul>
                        <li>{neighborhood.Neighborhood}</li>
                        <li>{neighborhood.Score}</li>
                    </ul>
                ))}
        </div>
    )
}

export default index
