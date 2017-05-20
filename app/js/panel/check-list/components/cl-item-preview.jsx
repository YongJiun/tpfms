import React from 'react'

export default React.createClass({

	getInitialState() {

		console.log(this.props.final);

		return {
			bottomLine: this.props.final == 'false' ? <hr className="cl-bottom line"/> : <hr className="cl-bottom"/>,
		}
	},

	render() {

		var data = this.props.data,
			subcontent = '';

		return (
			<li is class='cl-item fw of-h'>
				<div className="fr fw">
					<p className="w-90 lg">{this.props.item || "預設代辦事項"}</p>
				</div>
				{this.state.bottomLine}
			</li>
		)
	}
})