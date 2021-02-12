import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Collapse } from "@material-ui/core";
import "./Drawer.module.css";
import { useState } from "react";

const useStyles = makeStyles({
  drawer: {
    height: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20%",
    padding: 40,
    transition: "smooth",
  },
});

export default function Drawer({ open, setOpen }) {
  const classes = useStyles();
  const [height, setHeight] = useState(600);

  return (
    <SwipeableDrawer
      style={{ borderRadius: "50%", minHeight: 50 }}
      className={classes.sDrawer}
      anchor="bottom"
      open={open}
      onClose={e => {
        // setOpen(!open);
        console.log("Close", e);
      }}
      hysteresis={0}
      onOpen={() => {
        console.log("TOCHED");
        setOpen(!open);
      }}
      SwipeAreaProps={{ style: { color: "red" } }}
    >
      <div style={{ height }} className={classes.drawer}>
        <h1>Hello</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptatum dicta at
          tenetur deserunt, dolor fugiat voluptatibus blanditiis quibusdam. Ullam magnam reiciendis
          atque maiores incidunt itaque cupiditate harum officiis veniam.
        </p>
      </div>
    </SwipeableDrawer>
  );
}
