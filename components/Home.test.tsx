import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HomePage } from './Home';

describe('HomePage Component', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
  });

  it('renders the features section with correct content', () => {
    const { getByText } = render(<HomePage />);
    
    expect(getByText('Feature 1')).toBeInTheDocument();
    expect(getByText(/Lorem Ipsum is simply dummy text/i)).toBeInTheDocument();
    
    expect(getByText('Feature 2')).toBeInTheDocument();
    expect(getByText(/Contrary to popular belief, Lorem Ipsum is not/i)).toBeInTheDocument();
  });
});
