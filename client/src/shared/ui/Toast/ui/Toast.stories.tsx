import { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";


const meta: Meta<typeof Toast> = {
    title: 'shared/Toast',
    component: Toast,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        text:"Success text",
        type: "success",
        unmount:false
    }
}

export const Waring: Story = {
    args: {
        text:"Warning text",
        type: "warning",
        unmount:false

    }
}

export const Danger: Story = {
    args: {
        text:"Danger text",
        type: "danger",
        unmount:false
    }
}

export const Unmount3sec: Story = {
    args: {
        text:"Danger text",
        type: "danger",
        unmount:true
    }
}