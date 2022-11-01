export interface MovieDBResponse {
    dates?:         Dates;
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}

export interface Dates {
    maximum: string;
    minimum: string;
}

export interface Movie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    Ja = "ja",
}

export interface MovieDetail {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: null;
    budget:                number;
    genres:                any[];
    homepage:              string;
    id:                    number;
    imdb_id:               null;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  any[];
    release_date:          string;
    revenue:               number;
    runtime:               number;
    spoken_languages:      any[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      null;
    name:           string;
    origin_country: string;
}

export interface MovieCredits {
    id:   number;
    cast: CastElement[];
    crew: any[];
}

export interface CastElement {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         string;
    cast_id:              number;
    character:            string;
    credit_id:            string;
    order:                number;
}

