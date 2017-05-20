import React from 'react'
import Seat from './seat'

var seats = [], seatFormat = [{pos: {'left': '155px', 'top': '115px', }, }, {pos: {'left': '155px', 'top': '290px', }, }, {pos: {'left': '155px', 'top': '450px', }, }, {pos: {'left': '155px', 'top': '600px', }, }, {pos: {'left': '155px', 'top': '750px', }, }, {pos: {'left': '430px', 'top': '115px', }, }, {pos: {'left': '430px', 'top': '290px', }, }, {pos: {'left': '430px', 'top': '487px', }, }, {pos: {'left': '430px', 'top': '650px', }, } ];

export default React.createClass({

	getInitialState() {
		seats = [];
		return null
	},

	addCallback: function() {

	},

	render() {

		for(var i = 0; i < seatFormat.length; i++) {
			
			var personal = this.props.data.Seats[i];

			seats[i] = (
				<Seat key={'leg-'+this.props.legNum+'-seat-'+i}
					  num={i}
					  legNum={this.props.legNum}
					  pos={seatFormat[i].pos}
					  relationship={this.props.relationship}
					  personal={personal}
					  addCallback={this.addCallback}>
				</Seat>
			)
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