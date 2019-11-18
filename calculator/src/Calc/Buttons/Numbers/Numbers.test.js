import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Numbers from './Numbers';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target before each test
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting after each test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders', () => {
  act(() => {
    render(<Numbers />, container);
  });
  expect(container.textContent).toBe('0123456789');
});
