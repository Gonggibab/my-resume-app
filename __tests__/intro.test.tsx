// import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';
import Intro from '@/components/Intro/Intro';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockedRouter = useRouter as jest.Mock;

describe('<Intro />', () => {
  it('renders a heading', () => {
    mockedRouter.mockReturnValue({
      locale: 'ko',
    });

    render(<Intro />);
    expect(mockedRouter).toHaveBeenCalled();
  });
});
