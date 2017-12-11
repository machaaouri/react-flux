$ = jQuery = require('jquery'); //different ways to reference jQuery, by the dollar sign and by the variable jquery (setting both of those..)
var React = require('react');
var Home = require('./components/homePage');

React.render(<Home />, document.getElementById('app'));