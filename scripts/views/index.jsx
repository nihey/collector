var React = require('react');

var Index = React.createClass({
  render: function() {
    return <div>
      <div className="text-center text-empty-notice">
        no presets registered
      </div>
      <form className="new-preset">
        <button>
          new
        </button>
      </form>
    </div>;
  },
});

module.exports = Index;
