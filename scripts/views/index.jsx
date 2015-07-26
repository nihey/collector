var React = require('react'),
    Utils = require('scripts/utils')
    ReactFire = require('reactfire');

var Index = React.createClass({
  mixins: [ReactFire],


  getPresets: function() {
    if (this.state.presets === undefined) {
      return <div className="text-center text-empty-notice">
        loading presets...
      </div>
    }
    if (this.state.presets === null || !Object.keys(this.state.presets).length) {
      return <div className="text-center text-empty-notice">
        no presets registered
      </div>
    }
    return <form className="form-sm new-preset">
      {Object.keys(this.state.presets).map((key, index) => {
        var preset = this.state.presets[key];
        return <a key={index} href={"#!/presets|" + key}><button type="button">
          {preset.name}
        </button></a>;
      })}
    </form>;
  },

  componentDidMount: function() {
    this.bindAsObject(Utils.firebase.child('presets'), 'presets');
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return <div>
      {this.getPresets()}
      <form className="form-sm new-preset top-line">
        <a href="#!/new-preset"><button type="button">
          new
        </button></a>
      </form>
    </div>;
  },
});

module.exports = Index;
