import React from 'react'
import TaskState from './components/task-state'

export default React.createClass({

	render() {

		return (
			<div className="panel-block panel-title padding-xs">

				<div className="ftd-title-box">
					<TaskState taskState={'main'}></TaskState>
				</div>

				<div className="ftd-title-box">
					<div className="ftd-task-number left">20170322TPENRT</div>
					<div className="ftd-task-name left">土耳其之旅</div>
				</div>

				<div className="ftd-title-box">
					<div className="ftd-task-txt">一場知性之旅，讓大家體驗土耳其風情。一場知性之旅，讓大家體驗土耳其風情。一場知性之旅。</div>
				</div>

			</div>
		)
	}
});