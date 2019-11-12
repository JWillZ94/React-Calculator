import React from 'react';
import Output from './Output/Output';
import Numbers from './Buttons/Numbers/Numbers';
import './Calc.scss';

function Calc() {
    return (
        <div id="calc">
            <Output />
            <Numbers />
        </div>
    );
}

export default Calc;
