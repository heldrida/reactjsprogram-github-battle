var React = require('react');

function ConfirmBattle (props) {
	return props.isLoading === true
			? <p>Loading</p>
			: <p>confirm battle!</p>
}


module.exports = ConfirmBattle;