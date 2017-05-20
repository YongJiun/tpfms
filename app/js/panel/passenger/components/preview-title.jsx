import React from 'react'

export default React.createClass({

	render() {

		return (
			<li className="ps-block ud-l">
				<div className={"ps-form-title fw " + this.props.name + ' ' + this.props.icon}>
					{this.props.text}
				</div>
			</li>
		)
	}
});