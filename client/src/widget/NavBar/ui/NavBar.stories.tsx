import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import NavBar from "./NavBar";
import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator";
import { ROLES } from "@/app/providers/router";
import { LanguageDecorator } from "@/shared/config/storybook/LanguageDecorator";

const meta: Meta<typeof NavBar> = {
    title: 'widget/NavBar',
    component: NavBar,
    decorators:[
        (Story)=>(
            <StoreDecorator>
                <Story/>
            </StoreDecorator>
        ),
        RouterDecorator,
        LanguageDecorator
    ]
}

export default meta;

type Story = StoryObj<typeof NavBar>

export const Default: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator mockState={{user:{auth:false, isLoading:false, roles:''}}}>
                <Story/>
            </StoreDecorator>
        )
    ]
}

export const Auth: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator mockState={{user:{auth:true, isLoading:false, roles:ROLES.USER}}}>
                <Story/>
            </StoreDecorator>
        )
    ]
}

export const Admin: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator mockState={{user:{auth:true, isLoading:false, roles:ROLES.ADMIN}}}>
                <Story/>
            </StoreDecorator>
        )
    ]
}
