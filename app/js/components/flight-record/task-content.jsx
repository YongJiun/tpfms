/* [library] */
import React from 'react'

/* [components] */
import TaskState from './task-state'
import gp from '../../global/parameter'

var statusParam = gp.statusParam,
	time = {},
	reciprocal;

export default React.createClass({

	contextTypes: {
		panel: React.PropTypes.object,
	},

	getInitialState() {

		console.log(this.props.data);

		var d = this.props.data,
			t = this.props.data.time_left,
			time = {
				Day: parseInt(t.Day),
				Hour: parseInt(t.Hour),
				Minute: parseInt(t.Minute),
				Second: parseInt(t.Second),
			},
			r = [], 
			s,
			text = '';

		if(d.Status == 0 || d.Status == 3) s = statusParam[d.Status];
		else if(d.Status == 1 || d.Status == 2) {
			if(time.Minute < 0) s = statusParam[4];
			else {
				s = statusParam[d.Status];
				/*if(s == 'wait') {
					text = getReciprocalTime(time)
				}*/
				text = d.time_left.Msg;
			}
		}

		console.log(s, text);

		return ({
			info: d,
			status: s,
			statusText: text,
			time: time,
			fadeIn: '',
		})
	},

	componentDidMount() {
		setTimeout(() => {
			this.setState({fadeIn: 'fade-in' });
		}, 100 * parseInt(this.props.taskNum));
	},

	taskContentClick: function() {
		this.context.panel.change('flight-task-detail', this.state.info.TripNo);
	},

	render() {

		var info = this.state.info,
			leg = this.state.info.leg_list[0],
			num = this.props.taskNum,
			size = this.props.size || 'xs';

		return (
			<li is 
				taskNum={num} 
				tripNo={info.TripNo} 
				class={"fr-wrap " + this.state.fadeIn}
				onClick={this.taskContentClick}
				size={size}>
				<div className={'fr-panel ' + this.state.status}>
					<div className="of-h">
						<div className="fr-form fr-form-left">
							<div className="fr-info-date">{leg.dep.DepDateTime}</div>
							<div className="fr-info-location">{info.TripName}</div>
							<div className="fr-info-text">{info.Description}</div>
							<TaskState status={this.state.status} text={this.state.statusText}></TaskState>
						</div>

						<div className="fr-form fr-form-right">
							<div className="fr-info-number tl">{info.TripNo}</div>

							<div className="t-f t-f-takeoff">
								<div><span className="icon-t-f icon-takeoff-d"></span>{leg.dep.DepICAO}</div>
								<div className="t-f-info t-f-from">
									<p className="location">{leg.dep.airport_detail[0].City} /</p>
									<p className="airport">{leg.dep.airport_detail[0].NameCN}</p>
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