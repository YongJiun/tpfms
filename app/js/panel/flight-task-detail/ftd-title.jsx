/* [lib] */
import React from 'react'

/* [comp] */
import State from '../../components/flight-record/fr-state'

export default React.createClass({

	render() {

		var data = this.props.data

		return (
			<div className="panel-block panel-title padding-xs">

				<div className="ftd-title-box">
					<State status={data.Status} data={data.time_left}></State>
				</div>

				<div className="ftd-title-box">
					<div className="ftd-task-number left">{data.TripNo}</div>
					<div className="ftd-task-name left">{data.TripName}</div>
				</div>

				<div className="ftd-task-txt">{data.Description}</div>

			</div>
		)
	}
});