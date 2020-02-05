import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';

import Calc from './Calc';

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target before each test
    container = document.createElement("div");
    document.body.appendChild(container);
});

const renderer = new ShallowRenderer();
renderer.render(<Calc />);
const renderedCalc = renderer.getRenderOutput();

it('returns element output', () => {
    expect(renderedCalc.type).toBe('div');
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calc />, div);
    ReactDOM.unmountComponentAtNode(div);
});

afterEach(() => {
    // cleanup on exiting after each test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

// it('shows correct answer in test case', () => {
//     const onClick = jest.fn();
//     act(() => {
//         render(<Calc handleScreenChange={onClick} id='calc-container' />, container);
//     });
//     let calc = container.querySelector('#calc-container');
//     let calcScreen = container.querySelector('#calc-container').state.screen;
//     let operatorBtn = container.querySelector('#operators-container');
//     operatorBtn.children.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//     switch (operatorBtn.children.value) {
//         case '+':
//             if (!calcScreen.length) {
//                 expect(calcScreen).toBe('');
//             } else if (
//                 calcScreen[-1] === '+' ||
//                 calcScreen[-1] === '-' ||
//                 calcScreen[-1] === '*' ||
//                 calcScreen[-1] === '/' ||
//                 calcScreen[-1] === '('
//             ) {
//                 expect(calcScreen.length).toBe(calcScreen.length);
//             } else {
//                 expect(calcScreen[-1]).toBe('+');
//             }
//             break;
//         case '-':
//             if (!calcScreen.length) {
//                 expect(calcScreen).toBe('-');
//             } else if (
//                 calcScreen[-1] === '+' ||
//                 calcScreen[-1] === '-'
//             ) {
//                 expect(calcScreen.length).toBe(calcScreen.length);
//             } else {
//                 expect(calcScreen[-1]).toBe('-');
//             }
//             break;
//         case '*':
//             if (!calcScreen.length) {
//                 expect(calcScreen).toBe('');
//             } else if (
//                 calcScreen[-1] === '+' ||
//                 calcScreen[-1] === '-' ||
//                 calcScreen[-1] === '*' ||
//                 calcScreen[-1] === '/' ||
//                 calcScreen[-1] === '('
//             ) {
//                 expect(calcScreen.length).toBe(calcScreen.length);
//             } else {
//                 expect(calcScreen[-1]).toBe('*');
//             }
//             break;
//         case '/':
//             if (!calcScreen.length) {
//                 expect(calcScreen).toBe('');
//             } else if (
//                 calcScreen[-1] === '+' ||
//                 calcScreen[-1] === '-' ||
//                 calcScreen[-1] === '*' ||
//                 calcScreen[-1] === '/' ||
//                 calcScreen[-1] === '('
//             ) {
//                 expect(calcScreen.length).toBe(calcScreen.length);
//             } else {
//                 expect(calcScreen[-1]).toBe('/');
//             }
//             break;
//
//         default:
//             break;
//     }
//
// });
