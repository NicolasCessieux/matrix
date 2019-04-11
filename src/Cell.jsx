import React, { Component } from 'react';

const chars = [ '0','1','が','ざ','ザ','だ','ダ','ば','日','本','漢','字','能','力','検','定','試','験','バ' ]  

class Cell extends Component {
    constructor(props){
        super(props);
        this.state = { char: this.getRandomChar() };
    }

    getRandomChar(){
        return chars[Math.floor(Math.random() * chars.length)];
    }

    componentWillMount() {
        if (this.props.primary || Math.random() > 0.5) { this.makeSymbolDynamic(); }
    }

    makeSymbolDynamic() {
        setInterval(() => { this.setState({ char: this.getRandomChar() }); }, 300);
    }

    render() {
        return ( <div className="Char"> {this.state.char} </div> );
    }
}

export default Cell;