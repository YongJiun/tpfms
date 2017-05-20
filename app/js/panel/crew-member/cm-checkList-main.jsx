/* [lib] */
import React from 'react'

/* [comp] */
import gp from '../../global/parameter'
import Title from '../panel-title'
import BtnCircle from '../../components/btn-circle'
import Preview from './cm-checkList-preview'
import Edit from './cm-checkList-edit'

var btn_back_pos = gp.getBtnPos('top', 0);

export default React.createClass({

	componentDidMount() {
		if(this.props.readyCallback) this.props.readyCallback();
	},

	btnBackClick: function() {
		if(this.props.mode == 'preview') this.props.cmInfoChange('basic-info', 'preview');
		else if(this.props.mode == 'edit') this.props.cmInfoChange('check-list', 'preview');
	},

	render() {

		return (
			<div className="panel-c-h-noTitle">
				<Preview crewMemberDetail={this.props.crewMemberDetail}></Preview>;
				<Edit crewMemberDetail={this.props.crewMemberDetail} status=""></Edit>;

				<BtnCircle style={btn_back_pos} 
					touchCallback={this.btnBackClick} 
					color="red" 
					btnType="icon-arrow-left"></BtnCircle>
			</div>
		)
	}
});