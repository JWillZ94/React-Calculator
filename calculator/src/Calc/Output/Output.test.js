import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

import Output from './Output';

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target before each test
    container = document.createElement("div");
    document.body.appendChild(container);
});

const renderer = new ShallowRenderer();
renderer.render(<Output />);
const renderedOutput = renderer.getRenderOutput();

afterEach(() => {
    // cleanup on exiting after each test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('returns element output', () => {
    expect(renderedOutput.type).toBe('div');
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Output />, div);
    unmountComponentAtNode(div);
});
