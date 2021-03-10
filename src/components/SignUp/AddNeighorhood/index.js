import { makeStyles } from '@material-ui/core/styles';
import { CallMissedSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#FFF",
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

const AddNeighborhood = ({open, setOpen}) => {

    const classes = useStyles(open={open});

    return (
        <div className={classes.root} open={open}>
            
        </div>
    )
}

export default AddNeighborhood
