import React from 'react';

class Col extends React.Component {
    render() {
        const cells = [];
        const width = 10;
        for (let i = 0; i < width; i++) {
            cells.push(<tr><td>0</td></tr>)
        }
        return cells
    }
}

export default Col;