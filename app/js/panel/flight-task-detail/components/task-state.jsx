import React from 'react'

export default React.createClass({

	getInitialState() {

		return {

		}
	},

	componentDidMount() {
		
	},

	render() {

		var status = this.props.status,
			data = this.props.data;

		if(status == 'complete') {
			return (
				<div className={'task-state ' + status}>
					<span className="task-state-icon icon-tick"></span>
					Complete
				</div>
			)
		}
		else if(status == 'flying') {
			return (
				<div className={'task-state ' + status}>
					<span className="task-state-icon icon-tick"></span>
					Flying
				</div>
			)
		}
		else if(status == 'edit') {
			return (
				<div className={'task-state ' + status}>
					<span className="task-state-icon icon-edit"></span>
					案件編輯中
				</div>
			)
		}
		else if(status == 'main') {
			return (
				<div className={'task-state ' + status}>
					<span className="task-state-icon icon-alert"></span>
					{this.props.text}
				</div>
			)
		}
		else if(status == 'wait') {
			return (
				<div className={'task-state ' + status}>
					{this.props.text}
				</div>
			)
		}
		
		else return (
			<div className='task-state'>
				unknow state
			</div>
		)
	}
})