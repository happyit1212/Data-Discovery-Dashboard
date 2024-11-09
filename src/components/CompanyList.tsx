"use client";

import React, { useEffect, useState } from 'react';
import { Company } from '@/types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

interface Props {
    onSelectCompany: (companyId: number | number[]) => void;
    selectedCompanies: number[];
}

const CompanyList: React.FC<Props> = ({ onSelectCompany, selectedCompanies }) => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const pageSize = 5;

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            const res = await fetch(`/api/companies?page=${page}&limit=${pageSize}`);
            const data = await res.json();
            setCompanies(data.data);
            setTotalPages(Math.ceil(data.total / pageSize));
            setLoading(false);
        };

        fetchCompanies();
    }, [page]);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            const allCompanyIds = companies.map(company => company.id);
            onSelectCompany(allCompanyIds);
        } else {
            onSelectCompany([]);
        }
    };

    const handleCompanySelect = (companyId: number) => {
        onSelectCompany(companyId);
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div>
            <Table className="table testTable">
                <thead className='thead-dark'>
                    <tr>
                        <th>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                checked={selectAll}
                                onChange={handleSelectAll}
                            />
                        </th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map(company => (
                        <tr key={company.id}>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                    checked={selectedCompanies.includes(company.id)}
                                    onChange={() => handleCompanySelect(company.id)}
                                />
                            </td>
                            <td>{company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {loading && <p>Loading...</p>}

            <Pagination>
                <Pagination.Prev onClick={() => handlePageChange(page - 1)} disabled={page === 1} />
                {[...Array(totalPages)].map((_, i) => (
                    <Pagination.Item
                        key={i + 1}
                        active={i + 1 === page}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} />
            </Pagination>
        </div>
    );
};

export default CompanyList;
