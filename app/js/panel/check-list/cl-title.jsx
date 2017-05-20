import React from 'react'

export default React.createClass({

	click: function() {
		if(this.props.clickCallback) this.props.clickCallback();
	},

	render() {

		return (
			<li className="cl-title">
				{this.props.title}
				<div className="fr c-green-1" onTouchStart={this.click}>Edit</div>
			</li>
		)
	}
});