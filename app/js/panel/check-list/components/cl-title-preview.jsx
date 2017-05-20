import React from 'react'

export default React.createClass({

	render() {

		return (
			<li className="cl-title">
				{this.props.title}
			</li>
		)
	}
});