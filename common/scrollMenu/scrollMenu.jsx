import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./scrollMenu.module.css";
import ArrowBack from "@material-ui/icons/NavigateBefore";
import ArrowNext from "@material-ui/icons/NavigateNext";
import IconButton from "@material-ui/core/IconButton";
import ScrollContainer from "react-indiana-drag-scroll";

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

// const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
// const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const arrowButtonStyle = {
  // padding: "0.3em",
  padding: "0em",
  zIndex: 1,
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
  opacity: "0.5",
};

const arrowStyle = {
  textAlign: "center",
  // marginLeft: "0.3em",
  // marginRight: "-0.3em",
  fontSize: "2.5rem",
  fontWeight: 700,
};

const selected = 1;

export default class MyScrollMenu extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    // this.menuItems = this.props.Items(list, selected);
  }

  state = {
    selected,
    translate: 0,
  };

  ArrowLeft = (
    <IconButton
      // disabled={this.state.arrowLeftDisabled}
      size="small"
      style={arrowButtonStyle}
      aria-label="left"
    >
      <ArrowBack style={arrowStyle} />
    </IconButton>
  );

  ArrowRight = (
    <IconButton size="small" style={arrowButtonStyle} aria-label="right">
      <ArrowNext style={{ ...arrowStyle, margin: 0 }} />
    </IconButton>
  );

  onSelect = key => {
    this.setState({ selected: key });
  };

  // onUpdate = e => {
  //   e.translate >= 0 && this.setState({ ...this.state, arrowLeftDisabled: true });
  //   e.translate < 0 &&
  //     this.state.arrowLeftDisabled &&
  //     this.setState({ ...this.state, arrowLeftDisabled: false });
  // };

  render() {
    const { selected } = this.state;
    const { Items, Favorites, SeeMore, withArrows, onSelect } = this.props;
    // Create menu from items

    return (
      <ScrollContainer className="hideScrollBar" hideScrollbars={false} >
        <div style={{ display: "flex", paddingLeft: "21px" }}>
        { Favorites && (<div style={{ display: "flex" }}>{Favorites}</div>)}
        { Items && (<div style={{ display: "flex" }}>{Items}</div>)}
        { (SeeMore && Items)  && (<div style={{ display: "flex" }}>{SeeMore}</div>)}
        </div>
      </ScrollContainer>
      // <ScrollMenu
      //   data={this.props.Items}
      //   // alignCenter
      //   wheel={false}
      //   transition={0.5}
      //   scrollToSelected
      //   scrollBy={1}
      //   inertiaScrolling
      //   // inertiaScrollingSlowdown={0.25}
      //   disableTabindex
      //   hideSingleArrow
      //   // onSelect={this.onSelect}
      //   selected={selected}
      //   arrowLeft={withArrows && this.ArrowLeft}
      //   arrowRight={withArrows && this.ArrowRight}
      //   // onUpdate={this.onUpdate}
      //   translate={this.state.translate}
      //   // selected={selected}
      //   // onSelect={this.onSelect}
      //   onSelect={this.props.onSelect}
      // />
    );
  }
}
