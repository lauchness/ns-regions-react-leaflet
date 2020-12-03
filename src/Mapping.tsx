import React from "react";
import lunenburg from "./data/lunenburg";
import Point from "./Point";

const Mapping = () => {
  const {
    coordinates: [points]
  } = lunenburg;

  const mapped = React.useMemo(
    () =>
      points.map((point) => {
        const [lat, lon] = point;
        const key = `${lat}${lon}`;
        return <Point key={key} lat={lon} lon={lat} />;
      }),
    [points]
  );
  return <>{mapped}</>;
};

export default Mapping;
