var React = require('react');

function puke (obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle (props) {
	return props.isLoading === true
			? <p>Loading</p>
			: <div>confirm battle!: {puke(props)}</div>
}

module.exports = ConfirmBattle;