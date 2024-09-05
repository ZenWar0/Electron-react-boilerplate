import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../renderer/App';

describe('App', () => {
  it('should render', () => {
    render(<App />);
    
    // Update to match the stubbed value
    expect(screen.getByAltText('icon')).toHaveAttribute('src', 'test-file-stub');
    expect(screen.getByText('electron-react-boilerplate')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Read our docs/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Read our docs/i })).toHaveAttribute('href', 'https://electron-react-boilerplate.js.org/');
    expect(screen.getByRole('link', { name: /Donate/i })).toHaveAttribute('href', 'https://github.com/sponsors/electron-react-boilerplate');
  });
});
