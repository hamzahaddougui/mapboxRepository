import Head from "next/head";
import React from "react";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtemFoYWQiLCJhIjoiY2trY2YybmozMGo3bzJ1b2FpcTh4ZmdpeiJ9.urpUJIK3zKrxCaEKXNe9Rw";

const MapTest = () => {
  const [pageIsMounted, setPageIsMounted] = React.useState(false);

  React.useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mapbox/streets-v11",
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <h1>MAP TEST</h1>;
      <main id="container">
        <div id="my-map" style={{ height: 500, width: 500 }} />
      </main>
    </React.Fragment>
  );
};

export default MapTest;
