"use strict";

var React = require('react');

var SelectInput = React.createClass({
  /*propTypes: { // whe creating a reusable component , it's goof to specify the propTypes so we can get warnings if we don't pass the proper data down
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string
  },*/

  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  getInitialState: function(){
    return {
       value: null
    };
  },

  render: function () {
    var wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    var createOptions = function(author){
        return (
                <option key={author.id} value={author.id}>{author.firstName} {author.lastName}</option>
        );
    };
    
    return (
     <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
            <select name={this.props.name} value={this.state.value} onChange={this.props.onChange} >
                <option value=''></option>
                {this.props.authors.map(createOptions, this)}
            </select>
        </div>
      </div>
    );
  }
});

module.exports = SelectInput;