export interface MainMovieSchema {
    idLoading: boolean;
    error: string;
    data: MainMovieDataSchema
}

export interface MainMovieDataSchema {
    id: number;
    title: string;
    body: string;
    url: string;
    avatar: string;
    date: string;
    value: number;
    raiting: number;
    createdAt: string;
}