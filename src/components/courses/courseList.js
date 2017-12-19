"use strict";

var React = require('react');
var CourseApi = require('../../api/courseApi');

var CourseList = React.createClass({

    getInitialState: function(){

        return {
            courses: CourseApi.getAllCourses()
        };
    },

    render: function(){
        var createCourseRow = function(course){
            return (
                <tr key={course.id}>
                    <td><a href="#">Watch</a></td>
                    <td><a href="#">Delete</a></td>
                    <td><a>{course.title}</a></td>
                    <td>{course.author}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
            );
        };
        return (
            <div>
                <table className="table">
                    <thead>
                        <th></th>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </thead>
                    <tbody>
                        {this.state.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }

});

module.exports = CourseList;