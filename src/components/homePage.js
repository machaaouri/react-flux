"use strict";

var React = require('react');

var Home = React.createClass({
     render: function(){
        return (
                <div className="jumbotron">
                    <h1>Authors Administration</h1>
                    <p>React, React Router , and flux for ultra responsive web apps.</p>
                </div>
        );
    }
});

module.exports = Home;