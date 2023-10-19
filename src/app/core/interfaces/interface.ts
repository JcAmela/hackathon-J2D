// core/interfaces/interfaces.ts

export interface APIResponse<T> {
    info: Info;
    results: T[];
}

export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginOrLocation;
    location: OriginOrLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface OriginOrLocation {
    name: string;
    url: string;
}

