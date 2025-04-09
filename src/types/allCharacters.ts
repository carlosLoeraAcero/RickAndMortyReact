  // Tipo para la información de paginación
  export type Info = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }

  export type AllData = {
    info: Info;
    results: Character[];
  }
  
  // Tipo para los detalles de la ubicación
  export type LocationType = {
    name: string;
    url: string;
  }
  
  // Tipo para un episodio
  export type Episode = {
    url: string;
  }
  
  export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: LocationType;
    location: LocationType;
    image: string;
    episode: Episode[];
    url: string;
    created: string;
  }
  
  // Tipo para la respuesta completa de la API
  export type ApiResponse = {
    info: Info;
    results: Character[];
  }
  
  