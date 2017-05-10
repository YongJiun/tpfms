import React from 'react'

export default React.createClass({

	getInitialState() {
		return {

		}
	},

	componentDidMount() {
		
	},

	render() {

		if(this.props.taskState == 'complete') {
			return (
				<div className={'task-state ' + this.props.taskState}>
					<span className="task-state-icon icon-tick"></span>
					complete
				</div>
			)
		}
		else if(this.props.taskState == 'edit') {
			return (
				<div className={'task-state ' + this.props.taskState}>
					<span className="task-state-icon icon-edit"></span>
					案件編輯中
				</div>
			)
		}
		else if(this.props.taskState == 'main') {
			return (
				<div className={'task-state ' + this.props.taskState}>
					<span className="task-state-icon icon-alert"></span>
					after {this.props.time} 10 min
				</div>
			)
		}
		else if(this.props.taskState == 'wait') {
			return (
				<div className={'task-state ' + this.props.taskState}>
					after {this.props.time} 10 min
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