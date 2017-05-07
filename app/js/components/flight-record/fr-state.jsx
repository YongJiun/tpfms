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
				<div className={'fr-state ' + this.props.taskState}>
					<span className="fr-state-icon icon-tick"></span>
					complete
				</div>
			)
		}
		else if(this.props.taskState == 'edit') {
			return (
				<div className={'fr-state ' + this.props.taskState}>
					<span className="fr-state-icon icon-edit"></span>
					案件編輯中
				</div>
			)
		}
		else if(this.props.taskState == 'main') {
			return (
				<div className={'fr-state ' + this.props.taskState}>
					<span className="fr-state-icon icon-alert"></span>
					after {this.props.time} 10 min
				</div>
			)
		}
		else if(this.props.taskState == 'wait') {
			return (
				<div className={'fr-state ' + this.props.taskState}>
					after {this.props.time} 10 min
				</div>
			)
		}
		
		else return (
			<div className='fr-state'>
				unknow state
			</div>
		)
	}
})