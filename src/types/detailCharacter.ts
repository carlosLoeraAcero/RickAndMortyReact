  export type OriginCharacter = {
    name: string;
    url: string;
  };
  
  export type LocationCharacter = {
    name: string;
    url: string;
  };
  
  export type EpisodeCharacter = {
    url: string;
  };
  
  export type onlyCharacter = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginCharacter;
    location: LocationCharacter;
    image: string;
    episode: EpisodeCharacter[];
    url: string;
    created: string;
  };