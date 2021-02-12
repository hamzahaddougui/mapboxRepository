import { Button } from "@material-ui/core";
import Drawer from "../src/components/Drawer";
import Drawer2 from "../src/components/Drawer2";
import { useState } from "react";

const test = () => {
  const [open, setopen] = useState(true);

  return (
    <div
    //   style={{
    //     height: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "purple",
    //   }}
    >
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "purple",
          position: "fixed",
          zIndex: 1,
        }}
      >
        <button onClick={() => console.log("CLICK")}>CLICK ME</button>
      </div>
      <div style={{ height: "100%", width: "100vw", overflow: "hidden" }}>
        <div style={{ opacity: 0, height: "80vh", width: "100vw", zIndex: -1 }}>qdqsds</div>
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100vw",
            position: "relative",
            zIndex: 1,
          }}
        >
          {[...new Array(10)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join("\n")}
        </div>
      </div>

      {/* <Button
        onClick={() => {
          setopen(!open);
        }}
      >
        Click me!
      </Button>
      <Drawer open={open} setOpen={setopen} /> */}
    </div>
  );
};

export default test;
