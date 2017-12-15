"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var authorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({
        mixins: [
            Router.Navigation
        ],
    getInitialState: function() {
        return {
            author: {id: '', firstName: '', lastName: ''}
        };
    },

    setAuthorState: function(event){ // this function will be called for every single key press that i make

        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    saveAuthor: function(event) {
        event.preventDefault(); // we don't want to browser behavior to happen here , we're going to capture that and use javascipt to work with it
        authorApi.saveAuthor(this.state.author);
        this.transitionTo('authors');
    },

    render: function() {
         return (
                <AuthorForm 
                    author={this.state.author}
                    onChange={this.setAuthorState} // whenever something changes within the author form, call setAuthorState function
                    onSave={this.saveAuthor} /> 
         );
    }
});

module.exports = ManageAuthorPage;