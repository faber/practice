/** @jsx React.DOM */
var React = require('react'),
    Store = require('Store'),
    Actions = require('Actions');

var Scales = React.createClass({
  render: function() {
      return (
          <section className="scales-view">
            <h1>Dm #6</h1>
            <ul>
              <li className="scales-view__note">D</li>
              <li className="scales-view__note">E</li>          
              <li className="scales-view__note">F</li>
              <li className="scales-view__note">G</li>
              <li className="scales-view__note">A</li>
              <li className="scales-view__note">B</li>
              <li className="scales-view__note">C</li>
            </ul>
          </section>
    );
  }
});

module.exports = Scales;
