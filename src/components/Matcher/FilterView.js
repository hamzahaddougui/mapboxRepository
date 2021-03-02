import styles from './FilterView.module.css';

import { makeStyles } from '@material-ui/core/styles'

import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#a52a2a",
        height: '100vh',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        right: '0px',
        left: '0px',
        zIndex: '1',
        display : props => props.open ? "block" : "none",
    },

}));

const FilterView = ({open, setOpen, current, next, previous}) => {

    const classes = useStyles(open={open});

    return (
        <div className={classes.root} open={open}>
        </div>
    )
}

export default FilterView
