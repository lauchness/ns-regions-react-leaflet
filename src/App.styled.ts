import styled from "@emotion/styled";
import { MapContainer } from "react-leaflet";

export const StyledMapContainer = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
  position: relative;

  & .leaflet-control-attribution {
    background: rgba(255, 255, 255, 0.2);
    font-size: 10px;
  }
`;

export const StyledAbsoluteContainer = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  padding: 2px;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  z-index: 99999;
`;
