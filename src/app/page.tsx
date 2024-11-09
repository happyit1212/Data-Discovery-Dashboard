"use client";

import React, { useState } from 'react';
import CompanyList from '@/components/CompanyList';

const Dashboard: React.FC = () => {
  const [selectedCompanies, setSelectedCompanies] = useState<number[]>([]);

  // Modify the function to accept either a single ID or an array of IDs
  const handleSelectCompany = (companyIds: number | number[]) => {
    if (Array.isArray(companyIds)) {
      // If it's an array, replace selectedCompanies with the new array (Select All)
      setSelectedCompanies(companyIds);
    } else {
      // If it's a single ID, toggle selection
      setSelectedCompanies(prev =>
        prev.includes(companyIds)
          ? prev.filter(id => id !== companyIds)
          : [...prev, companyIds]
      );
    }
  };

  const handleDelete = () => {
    alert(`Delete data requested for company IDs: ${selectedCompanies.join(', ')}`);
    setSelectedCompanies([]);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4 titleHeader">Data Discovery Dashboard</h1>
      <CompanyList
        onSelectCompany={handleSelectCompany}
        selectedCompanies={selectedCompanies}
      />
      {selectedCompanies.length > 0 && (
        <div className="button-container">
          <button className="btn btn-primary mt-3 deleteButton right-button" onClick={handleDelete}>
            Delect
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
