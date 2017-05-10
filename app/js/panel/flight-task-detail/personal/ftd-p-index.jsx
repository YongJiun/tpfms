import React from 'react'

import Seats from '../../../components/seats/seats-main'

export default React.createClass({

	getInitialState() {

		console.log('ftd-p getInitialState');

		return {

		}	
	},

	componentWillMount() {
		console.log('ftd-p willMount');		
	},

	componentWillUnmount() {
		
	},

	render() {

		return (
			<div className="ftd-index-wrap">
				
				<Seats format="0" seatsData={''}></Seats>			

			</div>
		)
	}
});