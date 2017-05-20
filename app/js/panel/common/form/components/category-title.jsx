import React from 'react'

export default React.createClass({

	render() {

		return (
			<li className="ud-l">
				{/*+ this.props.name*/}
				<div className={"category-title" + ' ' + this.props.icon}>
					{this.props.text}
				</div>
			</li>
		)
	}
});