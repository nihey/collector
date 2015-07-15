var React = require('react'),
    Utils = require('scripts/utils'),
    ReactFire = require('reactfire');

var Collector = React.createClass({
  increment: function(color) {
    return function(event) {
      event.preventDefault();
      var count = {};
      count[color] = this.state[color] + 1;
      this.setState(count);
    }.bind(this);
  },

  getInitialState: function() {
    return {
      red: 0,
      yellow: 0,
      green: 0,
    };
  },

  render: function() {
    return <form className="collector">
      {this.props.name}
      <button onClick={this.increment('green')} className="green">
        { this.state.green || '-'}
      </button>
      <button onClick={this.increment('yellow')} className="yellow">
        { this.state.yellow || '-'}
      </button>
      <button onClick={this.increment('red')} className="red">
        { this.state.red || '-'}
      </button>
    </form>
  },
});

var Presets = React.createClass({
  mixins: [ReactFire],

  componentDidMount: function() {
    var id = location.hash.split('|')[1];
    this.bindAsObject(Utils.firebase.child('presets/' + id), 'preset');
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return <div>
      <div className="text-center">
        <a href="#!/" className="back-button">
          <button type="button">back</button>
        </a>
      </div>
      <div>
        {this.state.preset && this.state.preset.types.map((name, index) => {
          return <Collector key={index} name={name}/>;
        })}
      </div>
    </div>
  },
});

module.exports = Presets;
