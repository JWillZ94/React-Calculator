import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

import Numbers from './Numbers';

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target before each test
    container = document.createElement("div");
    document.body.appendChild(container);
});

const renderer = new ShallowRenderer();
renderer.render(<Numbers />);
const renderedNumbers = renderer.getRenderOutput();

afterEach(() => {
    // cleanup on exiting after each test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('returns element output', () => {
    expect(renderedNumbers.type).toBe('div');
});

it('renders and passes number value on click', () => {
    const onClick = jest.fn();
    act(() => {
        render(<Numbers handleNumberPress={onClick}/>, container);
    });
    expect(container.textContent).toBe('7894561230');
    const nums = container.querySelectorAll('button');
    let calls = 1;
    for (let n of nums) {
        act(() => {
            n.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        expect(onClick).toHaveBeenCalledTimes(calls++);
    }

});
