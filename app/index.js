var USER_DATA = {
	name: 'Helder Oliver',
	username: 'heldrida',
	image: 'https://avatars1.githubusercontent.com/u/236752?v=3&s=460'
};

var React = require("react");
var ReactDOM = require("react-dom");
var routes = require('./config/routes');

ReactDOM.render(
	routes,
	document.getElementById('app')
);