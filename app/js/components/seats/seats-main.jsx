import React from 'react'
import SeatsFormat0 from './seats-format-0'

var seats;

export default React.createClass({

	childContextTypes: {
		seatCallback: React.PropTypes.func,
	},

	getChildContext: function() {

		return {
			seatCallback: this.props.seatCallback
		}
	},

	getInitialState() {
		if(this.props.format == 0) seats = <SeatsFormat0></SeatsFormat0>;
		return {content: seats };
	},

	render() {

		return (
			<div>
				<div className="seats-wrap">
					<SeatsFormat0 legNum={this.props.legNum} relationship={this.props.relationship} data={this.props.data}></SeatsFormat0>
				</div>
			</div>
		)
	}
});