import React from 'react'

import gp from '../../global/parameter'
import BtnCircle from '../../components/btn-circle'
import Preview from './cm-basic-preview'
import Edit from './cm-basic-edit'

var btn_back_pos = gp.getBtnPos('top', 0);
var btn_edit_pos = gp.getBtnPos('top', 1);

export default React.createClass({

	componentDidMount() {
		if(this.props.readyCallback) this.props.readyCallback();
	},

	btnBackClick: function() {
		if(this.props.mode == 'preview') this.props.cmChange('index');
		else if(this.props.mode == 'edit') this.props.cmInfoChange('basic-info', 'preview');
	},

	btnEditClick: function() {
		this.props.cmInfoChange('basic-info', 'edit');
	},

	render() {

		var editStatue = '', btnEditStatus = '';
		if(this.props.mode == 'edit') {
			editStatue = 'in';
			btnEditStatus = 'fade-out';
		}

		return (
			<div className="panel-c-h-noTitle">
				<Preview crewMemberDetail={this.props.crewMemberDetail}></Preview>;
				<Edit crewMemberDetail={this.props.crewMemberDetail} status={editStatue}></Edit>;

				<BtnCircle style={btn_back_pos} 
					touchCallback={this.btnBackClick} 
					color="red" 
					btnType="icon-arrow-left"></BtnCircle>

				<BtnCircle style={btn_edit_pos} 
					touchCallback={this.btnEditClick} 
					status={btnEditStatus}
					color="red" 
					btnType="icon-edit"></BtnCircle>
			</div>
		)
	}
});