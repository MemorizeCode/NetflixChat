import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input
}

export default meta;

type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
        value: 'Value',
        placeholder: 'Placeholder',
    }
}

export const Big: Story = {
    args: {
        placeholder: 'Placeholder',
        size: "large"
    }
}

export const Medium: Story = {
    args: {
        size: "medium",
        placeholder: 'Placeholder',
    }
}

export const Small: Story = {
    args: {
        size: "small",
        placeholder: 'Placeholder',
    }
}

export const AutoFocus: Story = {
    args: {
        autoFocus: true,
        placeholder: 'Placeholder',
    }
}
