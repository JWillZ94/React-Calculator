import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

import Operators from './Operators';

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target before each test
    container = document.createElement("div");
    document.body.appendChild(container);
});

const renderer = new ShallowRenderer();
renderer.render(<Operators />);
const renderedOperators = renderer.getRenderOutput();

afterEach(() => {
    // cleanup on exiting after each test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('returns element output', () => {
    expect(renderedOperators.type).toBe('div');
});

it('renders and passes number value on click', () => {
    const onClick = jest.fn();
    act(() => {
        render(<Operators handleOperatorPress={onClick}/>, container);
    });
    expect(container.textContent).toBe('+-*/=');
    const operators = container.querySelectorAll('button');
    let calls = 1;
    for (let op of operators) {
        act(() => {
            op.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        expect(onClick).toHaveBeenCalledTimes(calls++);
    }

});
