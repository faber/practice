/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');

var Routes = require('./Routes');
var fastclick = require('fastclick');

React.initializeTouchEvents(true);

fastclick(document.body);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('body'));
});
