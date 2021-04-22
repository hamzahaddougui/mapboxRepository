import React, {useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Third Party
import InfiniteScroll from 'react-infinite-scroll-component';
import {
    makeStyles, 
    Grid,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Assets
import muiStyles from './GridViewStyles';
import NeighborhoodCard from '../NbCard/NbCard';

// Actions
import { loadMatched, loadChunk, getChunk, clearChunk, setScrollPosition } from "../../services/actions/grid.actions";
import { setCurrentNB } from "../../services/actions/neighborhood.actions";

// Styles
const useStyles = makeStyles(muiStyles);


// Functions
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GridView = ({open, handleOpen, handleCard}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMatched());
    dispatch(loadChunk());
  }, []);

  const neighborhoods = useSelector(state => state.modules.grid.neighborhoods);
  const chunk = useSelector(state => state.modules.grid.chunk);
  const page = useSelector(state => state.modules.grid.page);
  const scrollPosition = useSelector(state => state.modules.grid.scrollPosition);


  // console.log("Chunk length : ",chunk.length, " and neighborhoods length : ", neighborhoods.length);
  
  const handleClose = () => {
    dispatch(setScrollPosition(document.getElementById('cardContainer').scrollTop));
    dispatch(clearChunk());
    handleOpen();
  };

  const openCard = (e, option) => {
    e.preventDefault();
    dispatch(setCurrentNB(option));
    handleCard();
    // console.log('Card Clicked: ', option.id );
  };

  // const cardsEndRef = useRef(null);

  // const scrollToBottom = () => {
  //   cardsEndRef.current?.scrollIntoView({ behavior: "smooth" })
  // }

  useEffect(() => {
    // window.scrollTo(0, scrollPosition);
    const cardContainer = document.getElementById('cardContainer');
    console.log(cardContainer);
    if(scrollPosition > 0 ) {cardContainer?.scrollTo(0, scrollPosition)}
  });


  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" className={classes.closeIcon} onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Grid View
            </Typography>
          </Toolbar>
        </AppBar>

        {/* <Grid container justify="space-around"> */}
        {/* <InfiniteScroll
            dataLength={chunk.length}
            next={() =>{dispatch(getChunk())}}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
            }
        > */}
            <Grid container justify="space-around" className={classes.wrapper} id="cardContainer">
            {
            // console.log("Chunk is : ", chunk),
            chunk?.map((neighborhood, i) => (
                <Grid key={i}>
                    <NeighborhoodCard onClick={(e) => {openCard(e, neighborhood)}} neighborhood={neighborhood} />
                    {/* <div ref={cardsEndRef} /> */}
                </Grid>
            ))}
            </Grid>
        { chunk?.length <= neighborhoods?.length && 
        (<IconButton className={classes.showMoreIconContainer} aria-label="showMore" onClick={()=>{dispatch(getChunk()), dispatch(setScrollPosition(0))}}>
            <ExpandMoreIcon />
        </IconButton>)}
        {/* </InfiniteScroll> */}
        {/* </Grid> */}
      </Dialog>
    </div>
  );
}

export default GridView;
