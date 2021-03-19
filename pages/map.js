import Head from "next/head";
// import "../styles/mapbox.module.css";
import MapComponent from "../src/components/Map";

const Map = () => {
  return (
    <div>
      <Head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <MapComponent />
    </div>
  );
};

export default Map;
