import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('should render the app name', () => {
        render(<Header />);
        const appName = screen.getByText('Recipe Generator');
        expect(appName).toBeInTheDocument();
    });
});
