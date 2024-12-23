import { render, screen } from '@testing-library/react';
import Input from './Input';

describe("Input tests", ()=>{
    test("Input placeholder", ()=>{
        render(<Input placeholder="placeholder" size="medium" onChange={() => {}} />)
        const inputElement = screen.getByPlaceholderText('placeholder')
        expect(inputElement).toBeInTheDocument()
    })

    test("Input autoFocus", ()=>{
        render(<Input placeholder="placeholder" autoFocus size="medium" onChange={() => {}}/>)
        const inputElement = screen.getByPlaceholderText('placeholder')
        expect(inputElement).toHaveFocus()
    })

    test("Input value", ()=>{
        render(<Input placeholder="placeholder" value="Value" autoFocus size="medium" onChange={() => {}} />)
        const inputElement = screen.getByDisplayValue("Value")
        expect(inputElement).toBeInTheDocument()
    })

    test("Input typeInput", ()=>{
        render(<Input typeInput="string" value="Value" autoFocus size="medium" onChange={() => {}} />)
        const inputElement = screen.getByDisplayValue("Value")
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveAttribute('type', 'string')
    })
});