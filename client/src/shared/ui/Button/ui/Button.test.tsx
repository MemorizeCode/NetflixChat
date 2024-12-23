
// import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button test', () => {
  test('Button renders', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test("Button isLoading", () => {
    render(<Button isLoading>Click me!</Button>);
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test("Button disabled", () => {
    render(<Button disabled>Click me</Button>);
    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toBeDisabled()
    expect(buttonElement).toHaveAttribute('disabled');
  })


  test("Disabled button should not be clickable", () => {
    const mockOnClick = jest.fn();
    render(<Button disabled onClick={mockOnClick}>Click me</Button>);

    const buttonElement = screen.getByText('Click me');
    buttonElement.click();

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test("Button clicked", () => {
    const mockOnClick = jest.fn()
    render(<Button onClick={mockOnClick}>Click me</Button>)
    const buttonElement = screen.getByText('Click me')
    buttonElement.click()
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
});