"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseApi = require('../../api/courseApi');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({

    mixins: [
        Router.Navigation
    ],

    getInitialState: function()
    {
        return {
            authors: AuthorStore.getAllAuthors(),
            course: {
                id: '',
                title: '',
                watchHref: '',
                author: {  
                    id: '',
                    name: ''
                },
                length: '',
                category: ''
            },
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function() {
		var courseId = this.props.params.id; //from the path '/course:id'
		if (courseId) {
			this.setState({course: CourseApi.getCoursesById(courseId) });
		}
	},

    setCourseState: function(event){ // this function will be called for every single key press that i make
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        if(field === "author")
        {
            var author = AuthorStore.getAuthorById(event.target.value);
            this.state.course[field].id = event.target.value;
            this.state.course[field].name = author.firstName + ' ' + author.lastName;

        } else {

            this.state.course[field] = value;
        }
        return this.setState({course: this.state.course});
    },

    createCourse: function(course){

        CourseApi.saveCourse(course);
    },


    updateAuthor: function(course){

        CourseApi.saveCourse(course);
    },
    

    courseFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors
        if(this.state.course.title.length < 4)
        {
            this.state.errors.title = 'Title must be at least 4 characters';
            formIsValid = false;
        }
        if(this.state.course.category.length < 4)
        {
            this.state.errors.category = 'Category must be at least 4 characters';
            formIsValid = false;
        }
        
        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveCourse: function(event) {
        event.preventDefault(); // we don't want to browser behavior to happen here , we're going to capture that and use javascipt to work with it
        
        if(!this.courseFormIsValid())
        {
            return;
        }
        if(this.state.course.id) {
           this.updateAuthor(this.state.course);
        } else {
            this.createCourse(this.state.course);
        }
        
        this.setState({dirty: false});
        toastr.success('Author saved.');
        this.transitionTo('courses');
    },

    render: function(){

        return (

            <div>
                <CourseForm course={this.state.course}
                            authors={this.state.authors}
                            onSave={this.saveCourse}
                            onChange={this.setCourseState}
                            errors={this.state.errors}/>
            </div>
        );
    }
});

module.exports = ManageCoursePage;