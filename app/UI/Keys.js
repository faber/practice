/** @jsx React.DOM */
var React = require('react'),
    Store = require('Store'),
    Actions = require('Actions');

var Keys = React.createClass({
    getInitialState: function() {
        return {
            key: {}
        };
    },

    componentWillMount: function() {
        Store.on(Store.EVENTS.KeyChanged, this.changeKey);
        this.randomKey();
    },

    componentWillUnmount: function() {
        Store.removeListener(Store.EVENTS.KeyChanged, this.changeKey);
    },

    changeKey: function() {
        this.setState({key: Store.key()});
    },

    randomKey: function() {
        Actions.randomKey();
    },

    startTap: function() {
        this.setState({tapping: true});
    },

    endTap: function() {
        this.setState({tapping: false});
    },

    modeShortLabel: function(key) {
        return key.mode ? key.mode.short() : '';
    },
    modeLongLabel: function(key) {
        if (key.mode) {
            return this.tonicLabel(key) +
                   key.mode.quad +
                   key.mode.variations;
        }
        return '';
    },
    tonicLabel: function(key) {
        return key.tonic;
    },

    render: function() {
        var buttonClass = this.state.tapping ? 'active' : '';
        return (
            <section className="keys-view">
              <a onClick={this.randomKey}
                 onTouchStart={this.startTap}
                 onTouchEnd={this.endTap}
                 className={buttonClass}>
                next
              </a>

              <div className="keys-view__key">
                <h1>
                  {tonicLabel(this.state.key)}
                  <sup>
                    {modeShortLabel(this.state.key)}
                  </sup>
                </h1>
              </div>

              <footer className="app-footer keys-view__footer">
                <div className="app-footer__chart-name">
                  {modeChartLabel(this.state.key)}
                </div>
                <div className="app-footer__greek-name">
                  {modeGreekLabel(this.state.key)}
                </div>
              </footer>
              
            </section>
        );
    }
});

module.exports = Keys;


function modeShortLabel(key) {
    return key.mode ? key.mode.short() : '';    
}
function modeChartLabel(key) {
    if (key.mode) {
        return tonicLabel(key) +
               key.mode.quad +
                (key.mode.variations || '');
    }
    return '';
}
function modeGreekLabel(key) {
    return key.mode ? key.mode.label : '';
}
function tonicLabel(key) {
    return key.tonic;
}
