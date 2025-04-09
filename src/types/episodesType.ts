export type InfoEpisodes = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
};

export type EpisodeInfo = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
};

export type ApiResponseEpisodes = {
    info: InfoEpisodes;
    results: EpisodeInfo[];
};