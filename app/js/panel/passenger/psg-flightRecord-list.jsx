/* [library] */
import React from 'react'

/* [components] */
import FlightRecord from '../../components/flight-record/fr-main'

export default React.createClass({

	render() {

		var content = [],
			data = this.props.passenger.flight_record;

		for(var i in data) {
			content[i] = (
				<FlightRecord key={'psg-fr-'+i} frNum={i} data={data[i]} size="xs"></FlightRecord>
			);
		}

		return (
			<div>
				<ul className="passenger-ul padding-top-sm">
					{content}
				</ul>
			</div>
		)
	}
});