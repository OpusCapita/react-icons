import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../src/index';

storiesOf('Icons', module).add('Welcome', () => ('Welcome to Icons'));


storiesOf('Icons - Product', module).add('Tools', () => (<Icon type="product" name="Tools" />));
