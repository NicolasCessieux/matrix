import React from 'react';

class Col extends React.Component {
    render() {
        const cells = [];
        const width = 10;
        for (let i = 0; i < width; i++) {
            cells.push(<tr><td>0</td></tr>)
        }
        function getRandomInt(width) {
            return Math.floor(Math.random() * width);
          }
        return getRandomInt
    }
}

export default Col;