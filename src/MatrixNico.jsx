import React from 'react';
import Col from './Col';

class MatrixNico extends React.Component {
    render() {
        const tab = [];
        const width = 10;
        for (let i = 0; i < width; i++) {
            tab.push(<td><Col /></td>)
        }
        return tab
    }
}

export default MatrixNico;