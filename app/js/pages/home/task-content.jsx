/* [library] */
import React from 'react'

/* [components] */
import TaskState from './task-state'
import gp from '../../global/parameter'

var statusParam = gp.statusParam,
	time = {},
	reciprocal;

export default React.createClass({

	getInitialState() {

		var d = this.props.data,
			t = this.props.data.time_left,
			time = {Day: parseInt(t.Day), Hour: parseInt(t.Hour), Minute: parseInt(t.Minute), Second: parseInt(t.Second), },
			r = [], 
			s,
			text = '';

		if(d.Status == 0 || d.Status == 3) s = statusParam[d.Status];
		else if(d.Status == 1 || d.Status == 2) {
			if(time.Minute < 0) s = statusParam[4];
			else {
				s = statusParam[d.Status];
				/*if(s == 'wait') { text = gp.getReciprocalTime(time) }*/
				text = d.time_left.Msg;
			}
		}

		return ({
			info: this.props.data,
			status: s,
			statusText: text,
			time: time,
			fadeIn: '',
		})
	},

	componentDidMount() {
		/* [fade-in] */
		setTimeout(() => {
			this.setState({fadeIn: 'fade-in' });
		}, 100 * parseInt(this.props.taskNum));
	},

	taskContentClick: function() {
		if(this.props.clickCallback) this.props.clickCallback(this.state.info.TripNo);
	},

	render() {

		var num = this.props.taskNum,
			info = this.state.info,
			leg = this.state.info.leg_list[0],
			fadeIn = this.state.fadeIn,

			status = this.state.status,
			statusText = this.state.statusText;

		return (
			<li is 
				taskNum={num} 
				tripNo={info.TripNo} 
				class={"task-wrap " + fadeIn}
				onClick={this.taskContentClick}>
				<div className={'task-panel ' + status}>
					<div className="of-h">
						<div className="task-form task-form-left">
							<div className="task-info-date">{leg.dep.DepDateTime}</div>
							<div className="task-info-location">{info.TripName}</div>
							<div className="task-info-text">{info.Description}</div>
							<TaskState status={status} text={statusText}></TaskState>
						</div>

						<div className="task-form task-form-right">
							<div className="task-info-number tl">{info.TripNo}</div>

							<div className="t-f t-f-takeoff">
								<div><span className="icon-t-f icon-takeoff-d"></span>{leg.dep.DepICAO}</div>
								<div className="t-f-info t-f-from">
									<p className="location">{leg.dep.airport_detail[0].City} /</p>
									<p className="airport">{leg.dep.airport_detail[0].NameCN}</p>
									{/*<p className="time">{leg.}</p>*/}
								</div>
							</div>

							<div className="t-f t-f-leg">
								<div className="icon-t-f icon-leg-d"></div>
								<br/>
								LEG 1
							</div>

							<div className="t-f t-f-landing">
								<div><span className="icon-t-f icon-landing-d"></span>{leg.arr.ArrICAO}</div>
								<div className="t-f-info t-f-to">
									<p className="location">{leg.arr.airport_detail[0].City} /</p>
									<p className="airport">{leg.arr.airport_detail[0].NameCN}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		)
	}
})