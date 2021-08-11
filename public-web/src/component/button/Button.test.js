import { render, screen } from '@testing-library/react';
import Button from './Button';

test('render button match the passing props', () => {
	render(<Button isDisabled="false" buttonText="Save" />)
	const element = screen.getByText(/Save/i);
	expect(element).toBeInTheDocument();
});
