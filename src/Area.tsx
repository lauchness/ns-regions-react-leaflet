import React from "react";
import { fetch } from "whatwg-fetch";
import { Polygon, Popup } from "react-leaflet";
import { PathOptions, LatLngExpression } from "leaflet";
import fundy from "./data/fundy";
import { Locations } from "./models";

export interface GeoData {
  coordinates: LatLngExpression[][][];
}

const options: PathOptions = {
  color: "red",
  weight: 2,
  opacity: 1
  // fill: true
};

const Area = ({ id, name, countries }: Locations) => {
  const initial = fundy.features[0].geometry;
  const [geometry, setGeometry] = React.useState<GeoData>(initial);
  React.useEffect(() => {
    if (id) {
      fetch(`https://global.mapit.mysociety.org/area/${id}.geojson`)
        .then((res: Response) => res.json())
        .then((geoData: GeoData) => setGeometry(geoData));
    }
  }, [id]);

  if (!geometry) {
    return null;
  }

  const {
    coordinates: [positions]
  } = geometry;
  const newPos = positions.map(([lon, lat]: LatLngExpression[]) => [lat, lon]);

  // const newPos = positions.map((position) =>
  //   position.map(([lon, lat]: LatLngExpression[]) => [lat, lon])
  // );
  return (
    <Polygon pathOptions={options} positions={newPos}>
      <Popup>{name}, wowie!</Popup>
    </Polygon>
  );
};

export default Area;
