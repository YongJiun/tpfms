import React from 'react'

export default React.createClass({

	render() {

		return (
			<div className={"ps-form child-left " + this.props.titleClass}>
				<div className="ps-form-title">{this.props.title}</div>
				<div className="ps-form-content">
					{this.props.placeholder}
					{/*<input className="ps-form-input" type={this.props.inputType} name="" placeholder={this.props.placeholder} />*/}
				</div>
			</div>
		)
	}
});