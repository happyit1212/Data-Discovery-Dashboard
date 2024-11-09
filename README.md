

## This project is for Coding Challenge: Data Discovery Dashboard (React/Next.js + TypeScript)


Project Overview
The Data Discovery Dashboard is a simple interface built using Next.js, TypeScript, and React. The goal is to:
Display a list of companies that hold user data.
Allow users to select companies for which they want to request data deletion.
Support pagination or infinite scroll to load additional companies.
This project uses Next.js's app directory structure with client components to enable interactivity and state management, which is crucial for components like checkboxes and buttons.

## Explanation about Each files

1. src/types/index.ts
This file defines TypeScript interfaces to enforce type safety across the project.
- Company: Interface representing a company with an id and name.
- ApiResponse: Interface for the API response structure, containing a list of Company objects and a total count.


2. src/app/api/companies/route.ts
This file sets up a mock API endpoint using Next.js API routes. The endpoint provides paginated company data.
- Purpose: This endpoint simulates fetching a list of companies with pagination.
- Functionality: It reads the page and limit parameters from the request, slices the company array, and returns a paginated response.

3. src/components/CompanyList.tsx
This component displays the list of companies, provides pagination, and allows the user to select companies.

- "use client";: This directive is necessary because we’re using useState and useEffect hooks, which only work in client components.
- Props: Accepts onSelectCompany to handle company selection and selectedCompanies to manage selected items.
- fetchCompanies: Fetches companies from the mock API and updates the component state.
- loadMore: Loads more companies as the user clicks the button.
- Checkboxes: Allow users to select companies for data deletion requests.

4. src/app/page.tsx
This is the main dashboard page where the Data Discovery Dashboard UI and core logic are set up.

- State Management: selectedCompanies: Stores the IDs of companies selected by the user for data deletion.
- Event Handlers:
    handleSelectCompany: Adds/removes company IDs from selectedCompanies.
    handleDelete: Simulates a data deletion request by showing an alert with selected company IDs.
- Layout: Includes the main dashboard title, CompanyList component, and a "Request Data Deletion" button that appears when companies are selected.

5. src/app/layout.tsx
This layout file defines the structure for the entire application. It’s required in the app directory structure.

- children Prop: Wraps the entire application content.
- Global Styles: Imports globals.css for consistent styling across the app.

6. src/app/globals.css
Basic global styles for the application.


## Getting Started


```bash

npm install -g yarn
yarn install
yarn dev

```

```bash

yarn add --dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest
yarn test