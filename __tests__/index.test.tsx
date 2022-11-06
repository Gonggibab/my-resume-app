import { render, screen } from '@testing-library/react';
import Intro from 'components/Intro/Intro';

describe('<Intro />', () => {
  it('renders a heading', () => {
    render(<Intro />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
});
