import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import {AboutMe} from './AboutMe';

describe('AboutMe', () => {
  it('renders without crashing', () => {
    const {getByTestId} = render(<AboutMe />);
    expect(getByTestId('AboutMe')).toBeTruthy();
  });
})

