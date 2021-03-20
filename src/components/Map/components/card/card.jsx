import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";

import zIndex from "@material-ui/core/styles/zIndex";

const Matanzas = "/map/matanzas.jpg";

const useStyles = makeStyles(theme => ({
  // root: {
  //   top: '10%',
  //   left: '5%',
  //   minWidth: 200,
  //   maxWidth: 300,
  //   position: 'absolute',
  //   zIndex: 1
  // },
  div: {
    display: "block",
  },
  close: {
    top: "8%",
    left: "5%",
    position: "absolute",
    zIndex: 99,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const PoiCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { name, city, county, address, phone, type } = props.details;
  return (
    <React.Fragment>
      {props.open && (
        <div id="card">
          {type != "house" && (
            <CloseIcon className={classes.close} onClick={props.handleClose}></CloseIcon>
          )}
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={Matanzas} title={name} />

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
      )}
    </React.Fragment>
  );
};

export default PoiCard;
