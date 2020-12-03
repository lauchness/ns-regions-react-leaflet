import React from "react";
import { Marker, Popup } from "react-leaflet";

export interface PointOptions {
  lat: number;
  lon: number;
}

const Point = ({ lat, lon }: PointOptions) => {
  return (
    <Marker position={[lat, lon]}>
      <Popup>This point is at {`${lat} latitude and ${lon} longitude`}</Popup>
    </Marker>
  );
};

export default Point;
