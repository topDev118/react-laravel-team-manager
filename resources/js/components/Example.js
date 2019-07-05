import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatatablePage from './DatatablePage';
export default class Example extends Component {
    render() {
        return (
            <div>
                <DatatablePage />
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
