"use client";

import React, { useState } from 'react';
import CompanyList from '@/components/CompanyList';

const Dashboard: React.FC = () => {
  const [selectedCompanies, setSelectedCompanies] = useState<number[]>([]);

  const handleSelectCompany = (companyId: number) => {
    setSelectedCompanies(prev =>
      prev.includes(companyId)
        ? prev.filter(id => id !== companyId)
        : [...prev, companyId]
    );
  };

  const handleDelete = () => {
    alert(`Delete data requested for company IDs: ${selectedCompanies.join(', ')}`);
    setSelectedCompanies([]);
  };

  return (
    <div>
      <h1>Data Discovery Dashboard</h1>
      <CompanyList
        onSelectCompany={handleSelectCompany}
        selectedCompanies={selectedCompanies}
      />
      {selectedCompanies.length > 0 && (
        <button onClick={handleDelete}>Request Data Deletion</button>
      )}
    </div>
  );
};

export default Dashboard;
