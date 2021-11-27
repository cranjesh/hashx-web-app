import React from 'react';
import { action } from '@storybook/addon-actions'
import LoginForm from './LoginForm';

export default {
  title: 'LoginForm',
  component: LoginForm,
};

export const SimpleLogin = () => <LoginForm onButtonClick={action('clicked')}/>;
