/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { Loader } from './Loader';

export default {
  title: 'Atoms/Loader',
  component: Loader,
} as Meta;

const Template: Story = (arguments_) => <Loader {...arguments_} />;

export const Default = Template.bind({});
