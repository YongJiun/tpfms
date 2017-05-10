import React from 'react'

import Index from './ftd-index'
import Personal from './personal/ftd-p-main'


var index, personal;

export default React.createClass({

	getInitialState() {

		index = <Index panelChange={this.panelChange}></Index>;
		personal = <Personal></Personal>

		return {
			content: index
			// content: personal
		}
	},

	panelChange: function(tar) {
		if(this.props.panelChange) this.props.panelChange(tar);
	},

	componentDidMount() {
		
	},

	componentWillMount() {
		
	},

	componentWillUpdate(nextProps, nextState) {
		
	},


	render() {

		return (
			<div>
				{this.state.content}
			</div>
		)
	}
});