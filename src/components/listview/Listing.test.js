
import { render, screen } from '@testing-library/react';
import Listing from './Listing';


/* This test is emptyish.  Trying to stick to the time limit, 
   so I'm light on the tests.  I'm leaving some scenarios here */

test('if an empty list is passed in, there should be no cards', () => {
    render(<Listing cards={[]} />);
  });


  test('if a single-itemed list is passed in, there should be a single card in the listing', () => {
    render(<Listing cards={[]} />);
    
  });


  test('if a multiple-itemed list is passed in, there should be multiple cards in the listing', () => {
    render(<Listing cards={[]} />);
    
  });