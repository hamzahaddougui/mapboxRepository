import React, { Component } from "react";

class PoiMarker extends Component {
  render() {
    const { image } = this.props;
    return (
      <React.Fragment>
        <div className="marker">
          {image && <img src={image} alt="image" className="marker"></img>}
        </div>
      </React.Fragment>
    );
  }
}

export default PoiMarker;
