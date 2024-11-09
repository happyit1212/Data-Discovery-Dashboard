import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CompanyList from './CompanyList';
import { Company } from '@/types';

const mockCompanies: Company[] = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
    { id: 3, name: 'Company C' },
];

describe('CompanyList Component', () => {
    it('renders a list of companies', () => {
        render(<CompanyList onSelectCompany={jest.fn()} selectedCompanies={[]} />);

        mockCompanies.forEach(company => {
            expect(screen.getByLabelText(company.name)).toBeInTheDocument();
        });
    });

    it('calls onSelectCompany when a company checkbox is clicked', async () => {
        const onSelectCompany = jest.fn();
        render(<CompanyList onSelectCompany={onSelectCompany} selectedCompanies={[]} />);

        const checkbox = screen.getByLabelText('Company A');
        await userEvent.click(checkbox);

        expect(onSelectCompany).toHaveBeenCalledWith(mockCompanies[0].id);
    });

    it('displays a "Load More" button and loads more companies when clicked', async () => {
        const { getByText } = render(
            <CompanyList onSelectCompany={jest.fn()} selectedCompanies={[]} />
        );

        const loadMoreButton = getByText('Load More');
        expect(loadMoreButton).toBeInTheDocument();

        await userEvent.click(loadMoreButton);
        // Here, you would add assertions to ensure more companies are loaded, based on your fetch logic
    });
});
