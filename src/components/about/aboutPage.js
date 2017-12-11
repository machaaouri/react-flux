"use strict";

var React = require('react');

var About = React.createClass({

        render: function() {

            return (
                    <div>
                        <h1>About</h1>
                        <p>
                            This application uses the following tech stack:
                            <ul>
                                <li>React</li>
                                <li>React Router</li>
                                <li>Flux</li>
                                <li>Node</li>
                                <li>Gulp</li>
                                <li>Browserify</li>
                                <li>Boot</li>
                            </ul>
                        </p>
                    </div>
            );
        }
});

module.exports = About;