import React from 'react'
import TaskState from './task-state'

export default React.createClass({

	getInitialState() {
		return ({
			panelClass: this.props.taskState
		})
	},

	taskContentClick: function() {
		if(this.props.clickCallback) this.props.clickCallback(this.props.taskNum);
	},

	render() {

		return (
			<li className="task-wrap" onClick={this.taskContentClick}>
				<div className={'task-panel ' + this.state.panelClass}>
					<div className="task-form task-form-left">
						<div className="task-info-date">2017/03/23 08:20 L</div>
						<div className="task-info-location">東京茂木之旅</div>
						<div className="task-info-text">一次知性之旅，讓大家體驗東京風情。</div>
						<TaskState taskState={this.props.taskState}></TaskState>
					</div>

					<div className="task-form task-form-right">
						<div className="task-info-number">20170322TPENRT</div>

						<div className="t-f t-f-takeoff">
							<div><span className="icon-t-f icon-takeoff-d"></span>RCTP</div>
							<div className="t-f-info t-f-from">
								<p className="location">台北/</p>
								<p className="airport">桃園國際<br/>機場</p>
							</div>
						</div>

						<div className="t-f t-f-leg">
							<div className="icon-t-f icon-leg-d"></div>
							<br/>
							LEG 1
						</div>

						<div className="t-f t-f-landing">
							<div><span className="icon-t-f icon-landing-d"></span>RJAA</div>
							<div className="t-f-info t-f-to">
								<p className="location">東京/</p>
								<p className="airport">Narita International Airport</p>
							</div>
						</div>
					</div>
				</div>
			</li>
		)
	}
})