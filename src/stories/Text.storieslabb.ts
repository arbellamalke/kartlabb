import type { Meta, StoryObj } from '@storybook/react';
import ITextProps from './Text';

const meta = {
    title: 'Kartprojekt',
    component: Text
    }

    export default meta;

    type Story = StoryObj<typeof meta>;

    export const Base: Story = {
        args: {

        label: 'Kartprojekt'

        }
    }