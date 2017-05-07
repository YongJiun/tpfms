import React from 'react'

export default React.createClass({

	render() {

		return (
			<div className="ps-s-1 child-left">

				<div className="p-portrait-wrap">
					<div className="portrait"></div>
				</div>
				
				<div className="p-detail-wrap">
					<p>乘客名 / {this.props.name || 'PassengerName'}</p>
					<p>/ {this.props.gender || '性別'} / {'Country'} / {'Language'}</p>
				</div>

			</div>
		)
	}
})