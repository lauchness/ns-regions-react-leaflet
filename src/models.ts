interface country {
  name: string;
}

export interface place {
  id: number;
  name: string;
  countries: country[];
}

export interface Locations {
  [key: string]: place;
}
