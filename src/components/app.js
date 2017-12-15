/*eslint-disable strict*/ // disable strict mode for react

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery'); //different ways to reference jQuery, by the dollar sign and by the variable jquery (setting both of those..)

var App = React.createClass({
        render: function(){
            return (
                <div>
                    <Header/>
                    <div className="container-fluid">
                        <RouteHandler/>
                    </div>
                </div>
            );
        }
});

module.exports = App;