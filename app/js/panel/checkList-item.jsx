import React from 'react'

export default React.createClass({

	getInitialState() {
		return {
			bottomLine: this.props.final == 'false' ? <hr className="cl-bottom-line"/> : ''
		}
	},

	render() {
		return (
			<li className='cl-item'>
				<div className="cl-item-check">
					<input id={'cl-item-' + this.props.itemNum} value='check' name="" className='cl-checkbox' type='checkbox'/>
					<label htmlFor={'cl-item-' + this.props.itemNum}><span></span></label>
				</div>
				<div className="cl-item-content">
					<p className="cl-item-time">2017/03/20 12:00 L</p>
					{this.props.todo || "預設代辦事項"}
				</div>
				<div className="cl-item-by">by Beryl</div>
				
				{this.state.bottomLine}
			</li>
		)
	}
})