import React from 'react'

/* [pages] */
import PsgPrevBasic from './psg-basic-preview'
import PsgFormBasic from './psg-basic-form'

var preview, form;

export default React.createClass({


	getInitialState() {

		preview = <PsgPrevBasic passenger={this.props.passenger} onRef={ref => (this.psDetail = ref)}></PsgPrevBasic>;
		form 	= <PsgFormBasic onRef={ref => (this.psDetail = ref)}></PsgFormBasic>

		return {
			content: preview,
			/*content: form*/
		};	
	},

	componentDidMount() {
		
	},

	render() {

		return (
			<div>
				{this.state.content}
			</div>	
		)
	}
});