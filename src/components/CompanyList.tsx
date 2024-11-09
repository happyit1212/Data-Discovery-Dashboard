"use client";

import React, { useEffect, useState } from 'react';
import { Company } from '@/types';

interface Props {
    onSelectCompany: (companyId: number) => void;
    selectedCompanies: number[];
}

const CompanyList: React.FC<Props> = ({ onSelectCompany, selectedCompanies }) => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            const res = await fetch(`/api/companies?page=${page}&limit=5`);
            const data = await res.json();
            setCompanies(prev => [...prev, ...data.data]);
            setHasMore(data.data.length > 0);
            setLoading(false);
        };

        fetchCompanies();
    }, [page]);

    const loadMore = () => setPage(prev => prev + 1);

    return (
        <div>
            {companies.map(company => (
                <div key={company.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedCompanies.includes(company.id)}
                            onChange={() => onSelectCompany(company.id)}
                        />
                        {company.name}
                    </label>
                </div>
            ))}
            {loading && <p>Loading...</p>}
            {hasMore && <button onClick={loadMore}>Load More</button>}
        </div>
    );
};

export default CompanyList;
