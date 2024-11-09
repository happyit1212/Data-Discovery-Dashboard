import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dashboard from './page';

describe('Dashboard Page', () => {
    it('displays the Data Discovery Dashboard title', () => {
        render(<Dashboard />);
        expect(screen.getByText('Data Discovery Dashboard')).toBeInTheDocument();
    });

    it('renders the CompanyList component', () => {
        render(<Dashboard />);
        expect(screen.getByRole('button', { name: /Request Data Deletion/i })).toBeInTheDocument();
    });

    it('enables the delete button when companies are selected', async () => {
        render(<Dashboard />);
        const companyCheckbox = screen.getByLabelText('Company A');
        await userEvent.click(companyCheckbox);

        const deleteButton = screen.getByText('Request Data Deletion');
        expect(deleteButton).toBeEnabled();
    });
});
