var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt (props) {

	return (
		<div className="jumbotron col-sm-6 col-sm-offset3 text-center" style={transparentBg}>
			<h1>{props.header}</h1>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitUser}>
					<div className="form-group">
						<input className="form-control" placeholder="github username" type="text" onChange={props.onUpdateUser} value={props.username} />
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
						<button className="bnt btn-block btn-sucess" type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);

};

Prompt.PropTypes = {
	header: PropTypes.string.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
};

module.exports = Prompt;