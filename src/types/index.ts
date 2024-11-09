export interface Company {
    id: number;
    name: string;
}

export interface ApiResponse {
    data: Company[];
    total: number;
}
