import React, { useState, useEffect } from "react";
// import "react-perfect-scrollbar/dist/css/styles.css";
// import PerfectScrollbar from "react-perfect-scrollbar";
import ScrollArea from "react-scrollbar";
import "./scrollArea.module.css";

const ScrolledContainer = ({
  onScroll,
  maxHeight = "600px",
  children,
  contentStyle,
  contentHeight,
  ...params
}) => {
  const [height, setHeight_] = useState(null);

  useEffect(() => {
    contentHeight !== height && setHeight_(contentHeight);
  });

  return (
    <ScrollArea
      autoHide
      // onScroll={onScroll}
      speed={0.8}
      smoothScrolling={true}
      style={{ height: height }}
      contentStyle={{ minHeight: maxHeight }}
      {...params}
    >
      <div style={{ ...contentStyle }}>{children}</div>
    </ScrollArea>
  );
};

export default ScrolledContainer;
