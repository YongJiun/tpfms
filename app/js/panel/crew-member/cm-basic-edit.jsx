/* [lib] */
import React from 'react'

/* [comp] */
import List from '../common/form/basic-edit'

export default React.createClass({

	render() {

		console.log('cm-basic-edit');

		return (
			<div is class={"fc bgc-gray-4 cover panel bottom" + ' ' + this.props.status}>
				<List section="crew-member" person={this.props.crewMemberDetail}></List>
			</div>
		)
	}
});