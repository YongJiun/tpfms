import React from 'react'

export default React.createClass({

	render() {

		return (
			<div className="ps-s-2 child-left">
				
				<div className="checkbox-wrap">
					<input id={"ps-s-2-check-" + this.props.num} value='check' name="" className='common-checkbox' type='checkbox'/>
					<label htmlFor={"ps-s-2-check-" + this.props.num}><span></span></label>
				</div>

				<div className="p-portrait-wrap">
					<div className="portrait"></div>
				</div>
				
				<div className="p-detail-wrap">
					<p>乘客名 / {this.props.name}</p>
					<p>/ {this.props.gender}</p>
				</div>

			</div>
		)
	}
})