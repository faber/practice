var Dispatcher = require('flux').Dispatcher,
    assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {

  dispatchViewAction: function(type, data) {
    this.dispatch({
      source: 'VIEW',
      type: type,
      data: data
    });
  }

});


module.exports = AppDispatcher;
