import React from 'react';
import ReactDOM from 'react-dom';
require('../scss/main.scss');

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {count: 0};
    }
    tick() {
        alert('div is clicked');
    }
    render() {
        return (
            <div onClick={this.tick}>
                <h1>This is a initial project of React + ES6 + Webpack to demonstrate how to use scss(or other compile-to-css language) in webpack projects.</h1>
                <p>The value of count is: {this.state.count}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Main></Main>,
    document.getElementById('app')
);