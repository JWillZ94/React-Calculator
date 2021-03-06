import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

import Buttons from './Buttons';

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target before each test
    container = document.createElement("div");
    document.body.appendChild(container);
});

const renderer = new ShallowRenderer();
renderer.render(<Buttons />);
const renderedButtons = renderer.getRenderOutput();

it('returns element output', () => {
    expect(renderedButtons.type).toBe('div');
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Buttons />, div);
    ReactDOM.unmountComponentAtNode(div);
});

afterEach(() => {
    // cleanup on exiting after each test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
