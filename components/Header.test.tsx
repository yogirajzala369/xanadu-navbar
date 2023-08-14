import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

test('navigation bar renders with nav items', () => {
    render(<Header />);

    const toggleButton = screen.getByLabelText('Toggle Navigation');

    fireEvent.click(toggleButton);

    const navbar = screen.queryByTestId('navbar');
    expect(navbar).toBeTruthy();
    expect("PRODUCTS").toBeDefined()
    expect("ABOUT").toBeDefined()
    expect("BLOG").toBeDefined()
    expect("PRESS").toBeDefined()
});
