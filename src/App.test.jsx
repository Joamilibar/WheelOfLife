import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders Rueda de la Vida heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Rueda de la Vida/i);
    expect(headingElement).toBeInTheDocument();
});
