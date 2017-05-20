/* [lib] */
import React from 'react'

/* [comp] */
import List from '../common/form/basic-preview'

export default React.createClass({

	componentDidMount() {
		if(this.props.readyCallback) this.props.readyCallback();
	},

	render() {

		return (
			<List section="crew-member" person={this.props.crewMemberDetail}></List>
		)
	}
});