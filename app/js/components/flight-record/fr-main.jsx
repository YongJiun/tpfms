import React from 'react'
import TaskState from './fr-state'

export default React.createClass({

	/*getInitialState() {
		return ({
			panelClass: this.props.frState
		})
	},*/

	render() {

		return (
			<li className={"fr-wrap " + this.props.size || ""}>
				<div className={'fr-panel ' + this.props.frState}>
					<div className="fr-form fr-form-left">
						<div className="fr-info-date">2017/03/23 08:20 L</div>
						<div className="fr-info-location">東京茂木之旅</div>
						<div className="fr-info-text">一次知性之旅，讓大家體驗東京風情。</div>
						<TaskState taskState={this.props.frState}></TaskState>
					</div>

					<div className="fr-form fr-form-right">
						<div className="task-info-number">20170322TPENRT</div>

						<div className="fr-takeoff">
							<div><span className="icon-fr icon-takeoff-d"></span>RCTP</div>
							<div className="fr-info fr-from">
								<p className="location">台北/</p>
								<p className="airport">桃園國際<br/>機場</p>
							</div>
						</div>

						<div className="fr-leg">
							<div className="icon-fr icon-leg-d"></div>
							<br/>
							LEG 1
						</div>

						<div className="fr-landing">
							<div><span className="icon-fr icon-landing-d"></span>RJAA</div>
							<div className="fr-info fr-to">
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