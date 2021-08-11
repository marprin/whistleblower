import { render, screen } from '@testing-library/react';
import Form from './Form';

test('render form with its content', () => {
	render(<Form />);
	const elementButton = screen.getByText(/Have something in mind but don't know where to raise the issue?/i);
	expect(elementButton).toBeInTheDocument();
});
