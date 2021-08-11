import { render, screen } from '@testing-library/react';
import Header from './Header';

test('render header page', () => {
	render(<Header />);
	const element = screen.getByText(/Whistleblower/i);
	expect(element).toBeInTheDocument();
});
