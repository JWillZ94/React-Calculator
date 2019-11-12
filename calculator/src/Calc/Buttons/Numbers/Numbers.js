import React from 'react';


class Numbers extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => <button val={num}>{num}</button>);

        return <ul>{numbers}</ul>;
    }

}

export default Numbers;
