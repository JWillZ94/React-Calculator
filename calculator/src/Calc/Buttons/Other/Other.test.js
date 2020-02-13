import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

import Other from './Other';

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target before each test
    container = document.createElement("div");
    document.body.appendChild(container);
});

const renderer = new ShallowRenderer();
renderer.render(<Other />);
const renderedOther = renderer.getRenderOutput();

afterEach(() => {
    // cleanup on exiting after each test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('returns element output', () => {
    expect(renderedOther.type).toBe('div');
});

it('renders and passes value on click', () => {
    const onClick = jest.fn();
    act(() => {
        render(<Other handleOtherPress={onClick}/>, container);
    });
    expect(container.textContent).toBe('()<-Clear');
    const otherBtns = container.querySelectorAll('button');
    let calls = 1;
    for (let otherBtn of otherBtns) {
        act(() => {
            otherBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        expect(onClick).toHaveBeenCalledTimes(calls++);
    }

});
