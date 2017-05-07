import React from 'react'

export default React.createClass({


	backTouch: function() {
		if(this.props.touchCallback) this.props.touchCallback();
	},


	render() {

		return (
			<div onTouchStart={this.backTouch} className="btn btn-back btn-back-left" style={this.props.style}>
				<div className="btn-bg-circle"></div>
				<div className="btn-arrow icon-arrow-left"></div>
			</div>
		)
	}
})