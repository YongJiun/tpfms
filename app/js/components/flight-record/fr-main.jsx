/* [library] */
import React from 'react'

/* [components] */
import State from './fr-state'
import gp from '../../global/parameter'
import $ from 'jquery'

var statusParam = gp.statusParam,
	time = {},
	gapTime = 0.1,
	reciprocal;

export default React.createClass({

	contextTypes: {
		panel: React.PropTypes.object,
	},

	getInitialState() {

		var lc = this.props.data.leg_list.length,
			count = lc > 1 ? (lc > 2 ? 'triple' : 'double') : '';
		
		return ({
			info: this.props.data,
			status: gp.statusParam[this.props.data.Status],
			count: count,
			time: time,
			timeFormat: 'L',
			fadeIn: '',
		})
	},

	componentDidMount() {
		setTimeout(() => {
			this.setState({fadeIn: 'fade-in' });
		}, 250 + 110 * this.props.frNum);
	},

	click: function(e) {
		var tar = $(e.target).attr('class');
		if(tar != undefined && tar.search('leg-time') != -1) {
			if(this.state.timeFormat == 'L') this.setState({timeFormat: 'Z'});
			else this.setState({timeFormat: 'L'});
		}
		else this.context.panel.change('flight-task-detail', this.state.info.TripNo);
	},

	render() {

		var data = this.props.data,
			leg = data.leg_list[0],
			size = this.props.size || '';

		return (
			<li is 
				frNum={this.props.frNum} 
				tripNo={data.TripNo} 
				class={"fr-wrap " + this.state.fadeIn}
				onClick={this.click}
				size={size}>

				<div is 
					 class={'fr-panel ' + this.state.status}
					 count={this.state.count}>
					<div className="of-h">

						<div className="fr-form fr-form-left">
							<div className="fr-info-date">{leg.dep.DepDateTime}</div>
							<div className="fr-txt lg">{data.TripName}</div>
							<div className="fr-txt md">{data.Description}</div>
							<State status={data.Status} data={data.time_left}></State>
						</div>

						<div className="fr-form fr-form-right">
							<div className="fr-info-number tl">{data.TripNo}</div>
							<div className="fr-more"></div>
							<div className="fw of-h">
								<div className="hw left fr-txt xs">
									<div><span className="icon-fr icon-takeoff-d"></span>{leg.dep.DepICAO}</div>
								</div>
								<div className="hw left fr-txt xs">
									<div><span className="icon-fr icon-landing-d"></span>{leg.arr.ArrICAO}</div>
								</div>
							</div>
							<div className="fw of-h">
								<div className="hw left fr-txt xs">
									{leg.dep.airport_detail[0].City} /
								</div>
								<div className="hw left fr-txt xs">
									{leg.arr.airport_detail[0].City} /
								</div>
							</div>
							<div className="fw of-h">
								<div className="hw left fr-txt md">
									<p className="airport">{leg.dep.airport_detail[0].NameCN}</p>
								</div>
								<div className="hw left fr-txt md">
									<p className="airport">{leg.arr.airport_detail[0].NameCN}</p>
								</div>
							</div>
							<div className="fw of-h leg-time">
								<div className="hw left fr-txt xs ws-nw leg-time">
									{/*<i className="icon-clock"></i>*/}
									<p className="leg-time">{leg.dep['DepDateTime' + this.state.timeFormat]}</p>
								</div>
								<div className="hw left fr-txt xs ws-nw leg-time">
									{/*<i className="icon-clock"></i>*/}
									<p className="leg-time">{leg.arr['ArrDateTime' + this.state.timeFormat]}</p>
								</div>
							</div>
							<div className="fr-leg">
								<div className="icon-fr icon-leg-d"></div>
								LEG 1
							</div>

						</div>
					</div>
				</div>
			</li>
		)
	}
})