/** @jsx React.DOM */
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Store = require('Store'),
    actions = require('Actions');

var App = React.createClass({
    getInitialState: function () {
        return {
        };
    },
    componentWillMount: function () {
        // Store.addChangeListener(this.changeState);
    },
    componentWillUnmount: function () {
        // Store.removeChangeListener(this.changeState);
    },

    // changeState: function () {
    //     this.setState({
    //         messages: Store.getMessages()
    //     });
    // },
    // addMessage: function (event) {
    //     event.preventDefault();
    //     var input = this.refs.newMessage.getDOMNode();
    //     actions.addMessage(input.value);
    //     this.setState({
    //         newMessage: ''
    //     });
    // },
    // updateNewMessage: function (event) {
    //     this.setState({
    //         newMessage: event.target.value
    //     });
    // },
    // renderMessages: function (message) {
    //     return (
    //         <div>{message}</div>
    //     );
    // },
	  render: function() {
		    return (
			      <div>
              <nav className="app-nav">
                <ul>
                  <li className="app-nav__item">
                    <Link to="keys">keys</Link>
                  </li>
                  <li className="app-nav__item">
                    <Link to="chords">chords</Link>
                  </li>
                  <li className="app-nav__item">
                    <Link to="scales">scales</Link>
                  </li>
                  <li className="app-nav__item">
                    <Link to="intervals">ear</Link>
                  </li>
                </ul>
              </nav>
              <RouteHandler/>
            </div>
		    );
	  }
	  
});

module.exports = App;
