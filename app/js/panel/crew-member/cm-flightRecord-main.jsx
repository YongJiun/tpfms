import React from 'react'

import gp from '../../global/parameter'
import BtnCircle from '../../components/btn-circle'
import Preview from './cm-flightRecord-preview'

var btn_back_pos = gp.getBtnPos('top', 0);

export default React.createClass({

	componentDidMount() {
		if(this.props.readyCallback) this.props.readyCallback();
	},

	btnBackClick: function() {
		if(this.props.mode == 'preview') this.props.cmInfoChange('basic-info', 'preview');
		else if(this.props.mode == 'edit') this.props.cmInfoChange('flight-record', 'preview');
	},

	render() {

		return (
			<div className="panel-c-h-noTitle">
				<Preview crewMemberDetail={this.props.crewMemberDetail}></Preview>

				<BtnCircle style={btn_back_pos} 
					touchCallback={this.btnBackClick} 
					color="red" 
					btnType="icon-arrow-left"></BtnCircle>
			</div>
		)
	}
});