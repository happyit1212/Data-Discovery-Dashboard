import { NextResponse } from 'next/server';
import { Company } from '@/types';

const companies: Company[] = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
    { id: 3, name: 'Company C' },
    { id: 4, name: 'Company D' },
    { id: 5, name: 'Company E' },
    { id: 6, name: 'Company F' },
    { id: 8, name: 'Company G' },
    { id: 9, name: 'Company H' },
    { id: 10, name: 'Company I' },
    { id: 11, name: 'Company J' },
    { id: 12, name: 'Company K' },
    { id: 13, name: 'Company L' },
    { id: 14, name: 'Company M' },
    { id: 15, name: 'Company N' },
    { id: 16, name: 'Company O' },
    { id: 17, name: 'Company P' },
    { id: 18, name: 'Company Q' },
    { id: 19, name: 'Company R' },
    { id: 20, name: 'Company S' },
    { id: 21, name: 'Company T' },
    { id: 22, name: 'Company U' },
    { id: 23, name: 'Company V' },
    { id: 24, name: 'Company W' },
    { id: 25, name: 'Company X' },
    { id: 26, name: 'Company Y' },
    { id: 27, name: 'Company Z' },
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '5', 10);

    const start = (page - 1) * limit;
    const paginatedData = companies.slice(start, start + limit);

    return NextResponse.json({ data: paginatedData, total: companies.length });
}
