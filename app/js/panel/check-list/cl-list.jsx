/* [lib] */
import React from 'react'

/* [comp] */
import CheckTitle from './cl-title'
import CheckItem from './cl-item'

export default React.createClass({

	getInitialState() {
		return {
			edit: false,
		}	
	},

	itemEdit: function() {
		
		var status = this.state.edit;
		if(status == false) this.setState({edit: true});
		else this.setState({edit: false});
		
	},

	render() {

		return (
			<div is class="check-block" edit={this.state.edit}>
				<CheckTitle title={this.props.stage} clickCallback={this.itemEdit}></CheckTitle>
				<CheckItem itemNum={this.props.stage + "-0"} todo="待辦事項-0" final="false"></CheckItem>
				<CheckItem itemNum={this.props.stage + "-1"} todo="待辦事項-1" final="false"></CheckItem>
				<CheckItem itemNum={this.props.stage + "-2"} todo="待辦事項-2" final="false"></CheckItem>
				<CheckItem itemNum={this.props.stage + "-3"} todo="待辦事項-3" final="true"></CheckItem>
			</div>
		)
	}
});