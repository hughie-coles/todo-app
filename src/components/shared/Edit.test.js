import { render, screen } from '@testing-library/react';
import Edit from './Edit';


const confirmFormFields = async () => {
    const nameField =  await screen.findByLabelText('Name');
    expect(nameField).toBeInTheDocument();

    const descriptionField =  await screen.findByLabelText('Description');
    expect(descriptionField).toBeInTheDocument();

    const statusField =  await screen.findByLabelText('Status');
    expect(statusField).toBeInTheDocument();

    const dueDateField =  await screen.findByLabelText('Due Date');
    expect(dueDateField).toBeInTheDocument();

    const addButton =  await screen.findByText('Add Task');
    expect(addButton).toBeInTheDocument();
}


const confirmFormFieldValues = async (expectedNameValue, 
                                      expectedDescriptionValue,
                                      expectedStatusValue,
                                      expectedDueDateValue) => {
    const nameField =  await screen.findByLabelText('Name');
    expect(nameField).toBeInTheDocument();
    expect(nameField).toHaveValue(expectedNameValue);

    const descriptionField =  await screen.findByLabelText('Description');
    expect(descriptionField).toBeInTheDocument();
    expect(nameField).toHaveValue(expectedDescriptionValue);

    const statusField =  await screen.findByLabelText('Status');
    expect(statusField).toBeInTheDocument();
    expect(nameField).toHaveValue(expectedStatusValue);

    const dueDateField =  await screen.findByLabelText('Due Date');
    expect(dueDateField).toBeInTheDocument();
    expect(nameField).toHaveValue(expectedDueDateValue);

    const addButton =  await screen.findByText('Add Task');
    expect(addButton).toBeInTheDocument();
}

test('Ensure that if no id is passed in, that the form is not populated', () => {
  render(<Edit cards={[]} />);
  confirmFormFieldValues('','','','');
});


test('Ensure that if the id passed in matches a card in the (multiple )cards array, the form is populated correctly', () => {
    
    const mockPath = {    
        params: {
            id: "6",
        }    
    }
    
    const cards = [
        {
            id: "5",
            name: "test card 1",
            description: "Test Description 1",
            status: "ready",
            dueDate: "none",
        },
        {
            id: "6",
            name: "test card 2",
            description: "Test Description 2",
            status: "ready",
            dueDate: "none",
        }

    ];

    render(<Edit cards={cards} match={mockPath} />);
    confirmFormFieldValues('test card 2','Test Description 2','ready','none');
  });

  test('Ensure that if the id passed in matches a card in the (single entry) cards array, the form is populated correctly', () => {
    
    const mockPath = {    
        params: {
            id: "5",
        }    
    }
    
    const cards = [
        {
            id: "5",
            name: "test card 1",
            description: "Test Description 1",
            status: "ready",
            dueDate: "none",
        },
    ];

    render(<Edit cards={cards} match={mockPath} />);
    confirmFormFieldValues('test card 1','Test Description 1','ready','none');
  });


  test('Ensure that if the id passed in doesn\'t match a card in the (single entry) cards array, the form is not populated', () => {
    
    const mockPath = {    
        params: {
            id: "5",
        }    
    }
    
    const cards = [
        {
            id: "6",
            name: "test card 1",
            description: "Test Description 1",
            status: "ready",
            dueDate: "none",
        },
    ];

    render(<Edit cards={cards} match={mockPath} />);
    confirmFormFieldValues('','','','');
  });


  
  test('Ensure that if the id passed in doesn\'t match a card in the empty cards array, the form is not populated and there is no error', () => {
    
    const mockPath = {    
        params: {
            id: "5",
        }    
    }
    
    const cards = [
    ];

    render(<Edit cards={cards} match={mockPath} />);
    confirmFormFieldValues('','','','');
  });