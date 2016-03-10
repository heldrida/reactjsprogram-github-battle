var React = require("react");
var ReactDOM = require("react-dom");

var HelloWorld = React.createClass({
	render: function () {
		return (
			<div>Hello world {this.props.name}!</div>
		)
	}
});

ReactDOM.render(
	<HelloWorld name="Oliver" />,
	document.getElementById('app')
);