import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles({
  drawer:{
    height: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '20%',
    padding: 40,
  }
});

export default function Drawer({open,setOpen}) {
    const classes = useStyles();
    return(
      <Collapse in={open} collapsedHeight={200} >
        <SwipeableDrawer style={{borderRadius: "20%", minHeight: 200}}
              anchor="bottom"
              open={open}
              onClose={()=>{setOpen(!open)}}
              onOpen={()=>{setOpen(!open)}}
            >
            <div className={classes.drawer}>
              <h1>Hello</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptatum dicta at tenetur deserunt, dolor fugiat voluptatibus blanditiis quibusdam. Ullam magnam reiciendis atque maiores incidunt itaque cupiditate harum officiis veniam.</p>
            </div>
        </SwipeableDrawer>
      </Collapse>
    )
  }
  