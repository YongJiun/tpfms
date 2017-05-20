import React from 'react'

export default React.createClass({

	getInitialState() {
		return {
			bottomLine: this.props.final == 'false' ? <hr className="cl-bottom line"/> : <hr className="cl-bottom"/>,
			status: 'preview',
		}
	},

	click: function() {
		console.log('click');
	},

	render() {

		var data = this.props.data,
			subcontent = '';

		return (
			<li is class='cl-item fw child-left' status={this.props.status}>

				<div className="w-75 child-left">
					<input onClick={this.click}
						   className="cl-checkbox" 
						   id={'cl-item-' + this.props.itemNum} 
						   value='check' 
						   type='checkbox'/>
					<label htmlFor={'cl-item-' + this.props.itemNum}
						   className="fw child-left">
						<div className="w-20">
							<div className="checkbox"></div>
						</div>
						<div className="w-80">
							<p className="sm">2017/03/20 10:00z</p>
							<p className="lg">{this.props.todo || "預設代辦事項"}</p>
						</div>
					</label>
				</div>


				<div className="w-25 child-left pr">
					
					<div className="fw ws-nw sm c-green-1 creator">
						by Beryl
					</div>

					<div className="fw child-left controler">
						<div className="hw tc xs c-green-1">Edit</div>	
						<div className="hw tc xs c-red-0">Delete</div>	
					</div>

				</div>

				{this.state.bottomLine}
			</li>
		)
	}
})