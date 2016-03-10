var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

var Prompt = React.createClass({
	propTypes: {
		header: PropTypes.string.isRequired
	},
	render: function () {
		return (
			<div className="jumbotron col-sm-6 col-sm-offset3 text-center" style={transparentBg}>
				<h1>{this.props.header}</h1>
				<div className="col-sm-12">
					<form onSubmit={this.props.onSubmitUser}>
						<div className="form-group">
							<input className="form-control" placeholder="github username" type="text" onChange={this.props.onUpdateUser} value={this.props.username} />
						</div>
						<div className="form-group col-sm-4 col-sm-offset-4">
							<button className="bnt btn-block btn-sucess" type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Prompt;