import React from 'react'

import ListManage from './cm-list-manage'
import ListAdd from './cm-list-add'
import BtnCircle from '../../components/btn-circle'
import gp from '../../global/parameter'

const btn_back_pos = gp.getBtnPos('top', 0);
const btn_plus_pos = gp.getBtnPos('top', 1);

export default React.createClass({

	contextTypes: {
		Token: React.PropTypes.string,
		panel: React.PropTypes.object,
		ftdChange: React.PropTypes.func,
	},

	getInitialState() {
		return {
			current: 'manage',
		}
	},

	btnBackClick: function() {
		if(this.state.current == 'add') this.setState({current: 'manage' });
		else this.context.ftdChange('index');
		/*this.context.panel.switch('close');*/
	},

	btnPlusClick: function() {
		this.setState({current: 'add' });
	},

	manageClick: function(tar) {
		if(this.props.cmChange) this.props.cmChange('person', tar);
	},

	addClick: function(tar) {
		console.log('addClick', tar);
	},


	render() {

		var current = this.state.current,
			listAddStatus = '';

		switch(current) {

			case 'manage':
				break;

			case 'add':
				listAddStatus = ' in';
				break;
		}

		return (
			<div>

				<BtnCircle style={btn_back_pos} 
						   touchCallback={this.btnBackClick} 
						   color="red" 
						   btnType="icon-arrow-left"></BtnCircle>

				<BtnCircle style={btn_plus_pos} 
						   touchCallback={this.btnPlusClick} 
						   color="red" 
						   btnType="icon-plus"></BtnCircle>

				<ListManage crewMember={this.props.crewMember} clickCallback={this.manageClick}></ListManage>
				<ListAdd crewMember={this.props.crewMemberAll} clickCallback={this.addClick} status={listAddStatus}></ListAdd>
			</div>
		)
	}
});