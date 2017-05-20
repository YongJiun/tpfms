import React from 'react'

import gp from '../../global/parameter'

var timer = '';

export default React.createClass({

	getInitialState() {

		return {
			time: this.props.data,
		}
	},

	componentDidMount() {
		if(this.props.status == '1' || this.props.status == '2') {
			/*timer = setInterval(() => { }, 1000);*/ }
	},

	componentWillUnmount() {
		clearInterval(timer);	
	},

	render() {

		var status = gp.statusParam[this.props.status],
			icon = '',
			text = '';

		switch(status) {

			case 'complete':
				text = 'Complete';
				icon = 'icon-tick';
				break;

			case 'flying':
				text = 'Flying';
				icon = 'icon-tick';
				break;

			case 'edit':
				text = '案件編輯中';
				icon = 'icon-edit';
				break;

			case 'main':
				text = gp.getReciprocalTime(this.props.data).msg;
				icon = 'icon-alert';
				break;

			case 'wait':
				text = gp.getReciprocalTime(this.props.data).msg;
				icon = 'display-no';
				break;
		}

		return (
			<div className={'task-state ' + status}>
				<span className={"task-state-icon " + icon}></span>
				<span>{text}</span>
			</div>
		)
	}
})