var React = require("react");
var ReactDOM = require("react-dom");

var HelloWorld = React.createClass({
	render: function () {
		console.log(this.props);
		return (
			<div>Hello world tutorial!</div>
		)
	}
});

ReactDOM.render(
	<HelloWorld name="Oliver" anySortOfData={15} />,
	document.getElementById('app')
);