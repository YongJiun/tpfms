import React from 'react'

import Title from '../panel-title'
import List from './cm-list'

export default React.createClass({

	render() {

		return (

			<div>
				<Title mode="title-back" section="crew-member" action="manage"></Title>
				<List crewMember={this.props.crewMember} name="manage" clickCallback={this.props.clickCallback}></List>
			</div>
		)
	}
});