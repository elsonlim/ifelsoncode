import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import App from '../components/App';

describe('App', () => {
  it('renders without crashing', () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId('App')).toBeTruthy();
  });
})

