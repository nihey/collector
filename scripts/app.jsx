var React = require('react');

var App = React.createClass({

  changeView: function() {
    var file = location.hash.substr(3).split('|')[0] || 'index';
    this.setState({element: require('scripts/views/' + file + '.jsx')});
  },

  /*
   * React Hooks
   */

  componentDidMount: function() {
    this.changeView();
    window.onhashchange = this.changeView;
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
