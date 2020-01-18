import React from 'react';
import './Output.scss';

class Output extends React.Component {

    render() {

        let inp = <input id="output" value={this.props.screen} readOnly/>;

        console.log(inp);

        // function showCaret(input) {
        //     console.log(in);
        //     // let widthSizeRatio = 21.6/36;
        //     // let charWidth = widthSizeRatio * 36;
        //     // let length = input.value.length;
        //     // let cur = input.selectionStart;
        //     //
        //     // document.getElementById("caret").style.right = Math.floor((length - cur) * charWidth) + "px";
        // }

        return (
            <div id="output-container">
                {inp}
                <span id="caret">|</span>
            </div>
        );
    }

}

export default Output;
