var React = require('react'),
    Utils = require('../utils.jsx');

var Index = React.createClass({
  addInput: function(event) {
    event.preventDefault();
    this.setState({inputs: this.state.inputs + 1});
  },

  onSubmit: function(event) {
    event.preventDefault();
    var types = Object.keys(this.refs).map((key) => {
      if (!key.match(/^type-.*$/)) {
        return null;
      }
      return this.refs[key].getDOMNode().value;
    }).filter(name => name);
    Utils.firebase.child('presets').push({
      name: this.refs.preset.getDOMNode().value,
      types,
    });
    location.hash = '#!/';
  },

  getInitialState: function() {
    return {inputs: 1};
  },

  getInputs: function() {
    var inputs = [];
    for (var i = 0; i < this.state.inputs; i++) {
      inputs.push(<input key={i} ref={"type-" + i} type="text" placeholder="type" required={i==0}/>);
    }
    return inputs;
  },

  render: function() {
      return <form className="new-preset" onSubmit={this.onSubmit}>
        <a href="#!/" className="back-button">
          <button type="button">back</button>
        </a>
        <input ref="preset" type="text" placeholder="preset name" required="true"/>
        <div className="separator"></div>
        {this.getInputs()}
        <button onClick={this.addInput}>add</button>
        <button type="submit">create</button>
      </form>
  },
});

module.exports = Index;
