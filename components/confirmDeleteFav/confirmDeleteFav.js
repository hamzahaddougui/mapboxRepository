// Third Party
import React from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';

// Assets
import muiStyles from './confirmDeleteFavStyles';

const useStyles = makeStyles(muiStyles);

const confirmDeleteFav = ({ handleCloseConfirm, neighborhood, handleConfirmButton }) => {
    const classes = useStyles();

    return (
        <Grid container alignItems="center" justify="center" className={classes.confirmRoot}>
            <Grid item container direction="column" alignItems="center" justify="center" className={classes.contentContainer}>
                <img src="/confirmDelete.svg" alt="Delete confirmation icon" className={classes.deleteIcon} />
                <Typography className={classes.deleteConfirmTitle}>
                    Are you sure you want to delete<br/>
                    <span className={classes.nbName}>{neighborhood.Neighborhood}</span> from you favorites ?
                </Typography>
                <Grid item container direction="row" alignItems="center" justify="center" className={classes.confirmButtonsWrapper}>
                    <Grid item container alignItems="center" justify="center" xs={12} sm={6} className={classes.confirmElement} >
                        <Button
                            variant="outlined"
                            className={classes.buttonElement}
                            onClick={handleConfirmButton}
                        >
                            Yes, I am sure
                        </Button>
                    </Grid>
                    <Grid item container alignItems="center" justify="center" xs={12} sm={6}  className={classes.confirmElement} >
                        <Button
                            variant="outlined"
                            className={classes.buttonElement}
                            onClick={handleCloseConfirm}
                        >
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default confirmDeleteFav
