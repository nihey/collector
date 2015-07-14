var React = require('react');

var App = React.createClass({

  /*
   * React Hooks
   */

  componentDidMount: function() {
    var file = location.hash.substr(3) || 'index';
    this.setState({element: require('scripts/views/' + file + '.jsx')});
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    var Element = this.state.element;
    return <div>
      {Element && <Element/>}
    </div>
  },
});

React.render(<App/>, document.getElementById('react-body'));