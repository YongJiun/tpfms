import React from 'react'
import PassengerPreferences from '../../passenger/psg-preview-preferences'

export default React.createClass({

	getInitialState() {
		return {};	
	},

	componentDidMount() {
		// this.psgPreferences.fadeIn();
	},

	render() {

		return (
			
			<PassengerPreferences onRef={ref => (this.psgPreferences = ref)}></PassengerPreferences>
		)
	}
});