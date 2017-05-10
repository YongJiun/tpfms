import React from 'react'

/* [pages] */
import PsgPrevBasic from '../../passenger/psg-preview-basic'
import PsgFormBasic from '../../passenger/psg-form-basic'

export default React.createClass({

	getInitialState() {
		return {};	
	},

	componentDidMount() {
		// this.psDetail.fadeIn();
	},

	render() {

		return (
			<div>
				{/*<PsgPrevBasic onRef={ref => (this.psDetail = ref)}></PsgPrevBasic>*/}
				<PsgFormBasic></PsgFormBasic>		
			</div>	
			
		)
	}
});