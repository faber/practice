/** @jsx React.DOM */
var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

var App = require('UI/App'),
    Chords = require('UI/Chords'),
    Scales = require('UI/Scales'),
    Keys = require('UI/Keys');


var Routes = (

    <Route name="app" path="/" handler={App}>
      <Route name="keys" path="/keys" handler={Keys}/>      
      <Route name="chords" path="/chords" handler={Chords}/>
      <Route name="scales" path="/scales" handler={Scales}/>
      <Route name="intervals" path="/intervals" handler={Chords}/>
      <DefaultRoute handler={Keys}/>
    </Route>

);


module.exports = Routes;
