import React from 'react'

export default React.createClass({

	render() {

		return (
			<div className="ps-s-3 child-left">

				<div className="p-portrait-wrap">
					<div className="portrait"></div>
				</div>
				
				<div className="p-detail-wrap">
					<input placeholder={"稱謂"} type="text" />
					<p>乘客名 / {this.props.name}</p>
					<p>/ {this.props.gender}</p>
				</div>

				<div className="delete">Delete</div>

			</div>
		)
	}
})