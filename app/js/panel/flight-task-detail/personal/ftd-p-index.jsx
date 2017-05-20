import React from 'react'

import Seats from '../../../components/seats/seats-main'
import PanelTitle from '../../panel-title'
import PsgList from '../../passenger/psg-list'

export default React.createClass({

	componentWillMount() {
		
	},

	componentWillUnmount() {
		
	},

	render() {

		return (
			<div className="ftd-index-wrap loading-content">
				<Seats format="0" relationship="1" data={this.props.trip} seatCallback={this.seatCallback}></Seats>
			</div>
		)
	}
});