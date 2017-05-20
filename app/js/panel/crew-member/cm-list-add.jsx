import React from 'react'

import Title from '../panel-title'
import List from './cm-list'

export default React.createClass({

	render() {

		return (

			<div className={"fc bgc-gray-4 panel cover bottom" + this.props.status}>
				<Title mode="title-front" section="crew-member" action="add"></Title>
				<List crewMember={this.props.crewMember} name="add" clickCallback={this.props.clickCallback}></List>
			</div>
		)
	}
});