import List from './../check-list/cl-list-preview'

import React from 'react'

export default React.createClass({

	componentDidMount() {
		if(this.props.readyCallback) this.props.readyCallback();
	},

	render() {

		return (
			<List section="crew-member" data={this.props.crewMemberDetail}></List>
		)
	}
});