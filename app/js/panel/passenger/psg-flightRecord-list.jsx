/* [library] */
import React from 'react'

/* [components] */
import FlightRecord from '../../components/flight-record/fr-main'

export default React.createClass({



	render() {

		return (
			<div>
				<ul className="passenger-ul padding-top-sm">
					<FlightRecord frState="complete" size="xs"></FlightRecord>
					<FlightRecord frState="complete" size="xs"></FlightRecord>
					<FlightRecord frState="edit" size="xs"></FlightRecord>
					<FlightRecord frState="edit" size="xs"></FlightRecord>
					<FlightRecord frState="main" size="xs"></FlightRecord>
					<FlightRecord frState="wait" size="xs"></FlightRecord>
				</ul>
			</div>
		)
	}
});