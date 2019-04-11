import React from 'react';
import Cell from './Cell';

class Col extends React.Component {
    render() {
        const cells = [];
        const width = 12;
        for (let i = 0; i < width; i++) {
            cells.push(<tr><td><Cell /></td></tr>)
        }
        return cells
    }
}

export default Col;