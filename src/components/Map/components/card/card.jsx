import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';

import Matanzas from '../../assets/matanzas.jpg';
import zIndex from '@material-ui/core/styles/zIndex';
const useStyles = makeStyles((theme) => ({
    root: {
      top: '10%',
      left: '5%',
      minWidth: 200,
      maxWidth: 300,
      position: 'absolute',
      zIndex: 1
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    deleteIcon: {
      position: 'absolute',
      top: '10%',
      left: '17%',
      zIndex: 99
    }
  }));


  const PoiCard = (props) => {
    const classes = useStyles();
    let visibility= props.visibility;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const handleDeleteClick = () => {
      visibility= 'none';
      console.log(visibility);
    };

    
    const {name,city,county,address,phone,type} = props.details;
    return (
          <div>
          <DeleteIcon className={classes.deleteIcon} style={{display: visibility}} onClick={handleDeleteClick}></DeleteIcon> 
          <Card className={classes.root} style={{display: visibility}} >
          <CardMedia
              className={classes.media}
              image={Matanzas}
              title={name}
              
            />
            
          
          
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {name}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>City: {city}</Typography>
              <Typography paragraph>County: {county}</Typography>
              <Typography paragraph>Address: {address}</Typography>
              <Typography paragraph>Phone: {phone}</Typography>
              <Typography paragraph>Type: {type}</Typography>
               
            </CardContent>
          </Collapse>
        </Card>
      
          </div>
          
        
        );
    }

    export default PoiCard;