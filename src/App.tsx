import React, { useState } from "react";
import { TileLayer } from "react-leaflet";
import { StyledMapContainer } from "./App.styled";
import Area from "./Area";
import Selector from "./Selector";
import geo from "./data/novaScotiaGeo";
import "./styles.css";

export default function App() {
  const { centre_lat, centre_lon } = geo;
  const [selectedArea, setSelectedArea] = useState({});
  return (
    <StyledMapContainer
      center={[centre_lat, centre_lon]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <Selector setSelectedArea={setSelectedArea} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Area {...selectedArea} />
    </StyledMapContainer>
  );
}
