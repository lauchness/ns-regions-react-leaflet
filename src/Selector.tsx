import React, { ChangeEvent, useEffect, useState } from "react";
import { fetch } from "whatwg-fetch";
import { place, Locations } from "./models";
import { StyledAbsoluteContainer } from "./App.styled";

const Selector = ({ setSelectedArea }) => {
  const [options, setOptions] = useState<Locations>();
  useEffect(() => {
    fetch("https://global.mapit.mysociety.org/area/960955/covers.json")
      .then((res: Response) => {
        return res.json();
      })
      .then((locations: any) => {
        // const parsed = Object.values(
        //   locations
        // ).map(({ id, name, countries }: place) => ({ id, name, countries }));
        setOptions(locations);
      });
  }, []);

  const optionsForSelect = React.useMemo(
    () =>
      options &&
      Object.values(options).map(({ id, name }: place) => (
        <option key={id} value={id}>
          {name}
        </option>
      )),
    [options]
  );

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const area = options && options[e.target.value];
    setSelectedArea(area);
  };

  return (
    <StyledAbsoluteContainer top={"5px"} right={"5px"}>
      <label htmlFor="locations">Choose a location: </label>
      <select name="locations" id="locations" onChange={handleSelect}>
        {optionsForSelect}
      </select>
    </StyledAbsoluteContainer>
  );
};

export default Selector;
