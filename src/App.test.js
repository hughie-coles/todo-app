import { render, screen } from '@testing-library/react';
import App from './App';

test('The "Add Task" button is rendered', () => {
  render(<App />);

  const addButtonElement = screen.getByText('Add Task');
  expect(addButtonElement).toBeInTheDocument();
});
