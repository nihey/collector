var React = require('react');

var Index = React.createClass({
  render: function() {
    return <div>
      <div className="text-center text-empty-notice">
        no presets registered
      </div>
      <form className="new-preset top-line">
        <a href="#!/new-preset"><button type="button">
          new
        </button></a>
      </form>
    </div>;
  },
});

module.exports = Index;
