
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('If all fields are supplied, all are populated correctly', async () => {    
    const card = {
        name: "test card",
        description: "test description",
        status: "ready",
        dueDate:"2020-02-02",
    }
    render(<Card name={card.name} description={card.description} status={card.status} dueDate={card.dueDate} />);
    const statusElement =  await screen.findByText(/Status:/);
    expect(statusElement).toBeInTheDocument();
    
    const dueDateElement =  await screen.findByText(/Due Date:/);
    expect(dueDateElement).toBeInTheDocument();
    
    const deleteButtonElement =  await screen.findByText(/Delete/);
    expect(deleteButtonElement).toBeInTheDocument();

    const editButtonElement =  await screen.findByText(/Edit/);
    expect(editButtonElement).toBeInTheDocument();
  });


  test('If no fields are supplied, all are empty', async () => {    
    
    render(<Card />);
    const statusElement =  await screen.findByText(/Status:/);
    expect(statusElement).toBeInTheDocument();
    
    const dueDateElement =  await screen.findByText(/Due Date:/);
    expect(dueDateElement).toBeInTheDocument();
    
    const deleteButtonElement =  await screen.findByText(/Delete/);
    expect(deleteButtonElement).toBeInTheDocument();

    const editButtonElement =  await screen.findByText(/Edit/);
    expect(editButtonElement).toBeInTheDocument();

  });