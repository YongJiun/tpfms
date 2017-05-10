import React from 'react'
import Seat from './seat'

var seats = [],
	seatsTotal = 9,
	
	seatFormat = [
		{pos: {'left': '155px', 'top': '115px', }, }, 
		{pos: {'left': '430px', 'top': '115px', }, }, 
		{pos: {'left': '155px', 'top': '290px', }, }, 
		{pos: {'left': '430px', 'top': '290px', }, }, 
		{pos: {'left': '155px', 'top': '450px', }, }, 
		{pos: {'left': '155px', 'top': '600px', }, }, 
		{pos: {'left': '155px', 'top': '750px', }, }, 
		{pos: {'left': '430px', 'top': '487px', }, }, 
		{pos: {'left': '430px', 'top': '650px', }, }
	];

export default React.createClass({

	addCallback: function() {

	},

	render() {

		if(seats.length == 0) {

			for(var i = 0; i < seatsTotal; i++) {

				seats[i] = (
					<Seat key={'seats-format-'+i}
						  num={i}
						  pos={seatFormat[i].pos}
						  personalInfo={''}
						  addCallback={this.addCallback}>
					</Seat>
				)
			}
		}




		return (
			<div>
				<div className="seat-format seat-0">
					{seats}
				</div>
			</div>
		)
	}
});