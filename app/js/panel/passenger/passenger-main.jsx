import React from 'react'

/* passenger default list */
import PassengerDefault from './passenger-default'

import PassengerDetail from './passenger-detail'

/* basic */
import PassengerFormBasic from './passenger-form-basic'
import PassengerFormassport from './passenger-form-passport'
import PassengerFormVisa from './passenger-form-visa'

/* secretary */
import PassengerFormSecretary from './passenger-form-secretary'

/* preferences */
import PassengerFormPreferences from './passenger-form-preferences'
import PopupAddPreferences from '../../popup/add-preferences'

/* relationship */
import PassengerFormRelationship_0 from './passenger-form-relationship-0'
import PassengerFormRelationship_1 from './passenger-form-relationship-1'

import BtnCircle from '../../components/btn-circle'

import $ from 'jquery'

const btn_back_pos = {right: '-60px', top: '28px', };
const btn_plus_pos = {right: '-60px', top: '158px', };

// const h = $(window).height();

const btn_pref_pos = {right: '-60px', bottom: '300px' };
const btn_rela_pos = {right: '-60px', bottom: '185px' };
const btn_gear_pos = {right: '-60px', bottom: '70px' };

/*
	panel切換流程
	default
	personal-info
	add-basic, add-passport, add-visa
	add-secretary
	add-preferences
	add-relationship
 */

export default React.createClass({

	getInitialState() {
		return {mode: '', current: 'default'} 
	},

	contextTypes: {
		user: React.PropTypes.object,
		panel: React.PropTypes.object,
	},

	getPassengerData: function() {
		
	},

	componentWillMount() {
		this.context.panelState = {
			section: this.state.current,
			mode: this.state.mode
		};
	},

	componentDidMount() {
		// this.pasp.fadeIn();
		// this.pers.fadeIn();
		// this.btnEdit.fadeOut();
	},

	btnBackClick: function() {
		
		if(this.state.current == 'default') this.context.panel.switch('close');
		else {
			var s = '';
			switch(this.state.current) {

				case 'passenger-detail':
					s = 'default';
					this.setState({mode: ''});
					this.pers.fadeOut();
					this.btnPlus.fadeIn();
					this.btnGear.fadeIn();
					this.btnEdit.fadeOut();
					this.btnPref.fadeOut();
					this.btnRela.fadeOut();
					this.btnFlig.fadeOut();
					break;
				case 'add-basic':
					if(this.state.mode == 'personal-editing') {
						s = 'passenger-detail';
						this.btnGear.fadeIn();
						this.btnEdit.fadeIn();
					}
					else {
						s = 'default';
						this.btnPlus.fadeIn();
						this.btnGear.fadeIn();
						this.btnEdit.fadeOut();
					}
					break;
				case 'add-passport':
					this.pasp.fadeOut();
					s = 'add-basic';
					break;
				case 'add-visa':
					this.visa.fadeOut();
					s = 'add-basic';
					break;
				case 'add-secretary':
					s = 'add-basic';
					break;
				case 'add-preferences':
					s = 'add-secretary';
					break;
				case 'add-relationship-0':
					this.btnPlus.fadeIn();
					s = 'add-preferences';
					break;
				case 'add-relationship-1':
					s = 'add-relationship-0';
					break;

			}

			this.setState({current: s });
		}
	},

	btnPlusClick: function() {

		this.btnEdit.fadeOut();
		this.btnGear.fadeOut();

		if(this.state.current == 'default') {

			this.btnPlus.fadeOut();
			this.setState({current: 'add-basic'});	
		}
		else if(this.state.current == 'add-preferences') {
			this.popup.fadeIn();
		}
	},

	btnEditClick: function() {
		this.btnEdit.fadeOut();
		this.btnPref.fadeOut();
		this.btnRela.fadeOut();
		this.btnFlig.fadeOut();
		this.setState({
			mode: 'personal-editing',
			current: 'add-basic'
		});
	},

	btnPrefClick: function() {
		this.pers.scrollTo('preferences');	
	},

	btnRelaClick: function() {
		this.pers.scrollTo('relationship');	
	},

	btnFligClick: function() {
		this.pers.scrollTo('flight-record');	
	},

	btnGearClick: function() {
		alert('功能即將開放！');
	},

	basicStateChange: function(step, file) {
		
		if(step == 'passport') {
			this.pasp.fadeIn();
			this.pasp.srcUpdate(file);
		}
		else if(step == 'visa') {
			this.visa.fadeIn();
			this.visa.srcUpdate(file);
		}
		this.setState({current: 'add-'+step});
	},

	stepNext: function(step) {

		if(step == 'add-preferences') this.btnPlus.fadeIn();

		if(step == 'add-relationship-2') {

			if(this.state.mode == 'personal-editing') {
				this.setState({mode: ''});
				this.pers.fadeOut();
				alert('修改完成');
				
			}
			else alert('新增完成');

			
			this.setState({current: 'default' });
		}

		else this.setState({current: step });
	},

	personalDetail: function(data) {
		this.pers.fadeIn();
		this.btnEdit.fadeIn();
		
		this.btnPref.fadeIn();
		this.btnRela.fadeIn();
		this.btnFlig.fadeIn();

		this.btnGear.fadeOut();
		this.btnPlus.fadeOut();

		this.stepNext('passenger-detail');
	},


	render() {

		return (

			<div className='panel-passenger'>

				{/*紅色按鈕*/}
				<BtnCircle touchCallback={this.btnBackClick} style={btn_back_pos} color="red" btnType="icon-arrow-left"></BtnCircle>
				<BtnCircle touchCallback={this.btnEditClick} style={btn_plus_pos} color="red" btnType="icon-edit-w" onRef={ref => (this.btnEdit = ref)} hidden={true}></BtnCircle>
				<BtnCircle touchCallback={this.btnPlusClick} style={btn_plus_pos} color="red" btnType="icon-plus" onRef={ref => (this.btnPlus = ref)}></BtnCircle>				

				{/*黑色按鈕*/}
				<BtnCircle touchCallback={this.btnPrefClick} style={btn_pref_pos} color="gray-2" btnType="icon-like-w" onRef={ref => (this.btnPref = ref)} hidden={true}></BtnCircle>
				<BtnCircle touchCallback={this.btnRelaClick} style={btn_rela_pos} color="gray-1" btnType="icon-relationship-w" onRef={ref => (this.btnRela = ref)} hidden={true}></BtnCircle>
				<BtnCircle touchCallback={this.btnFligClick} style={btn_gear_pos} color="gray-0" btnType="icon-flight-record-w" onRef={ref => (this.btnFlig = ref)} hidden={true}></BtnCircle>

				<BtnCircle touchCallback={this.btnGearClick} style={btn_gear_pos} color="black" btnType="icon-gear-w" onRef={ref => (this.btnGear = ref)}></BtnCircle>
				
				
				<div className="panel-passenger-buffer">
					<div className={"panel-passenger-wrap " + this.state.current + " " + this.state.mode}>
						
						<PassengerDefault personalTouch_cb={this.personalDetail} step="passenger"></PassengerDefault>
						
						<PassengerDetail onRef={ref => (this.pers = ref)}></PassengerDetail>
						
						<PassengerFormBasic stateChange={this.basicStateChange} mode={this.state.mode || 'add'} step="basic"></PassengerFormBasic>
						<PassengerFormassport onRef={ref => (this.pasp = ref)} mode={this.state.mode || 'add'} step="passport"></PassengerFormassport>
						<PassengerFormVisa onRef={ref => (this.visa = ref)} mode={this.state.mode || 'add'} step="visa"></PassengerFormVisa>
						
						<PassengerFormSecretary nextTouch={this.stepNext} mode={this.state.mode || 'add'} step="secretary"></PassengerFormSecretary>
						
						<PassengerFormPreferences nextTouch={this.stepNext} onRef={ref => (this.pref = ref)} mode={this.state.mode || 'add'} step="preferences"></PassengerFormPreferences>
						<PassengerFormRelationship_0 nextTouch={this.stepNext} onRef={ref => (this.rela = ref)} mode={this.state.mode || 'add'} step="relationship"></PassengerFormRelationship_0>
						<PassengerFormRelationship_1 nextTouch={this.stepNext} onRef={ref => (this.rela = ref)} mode={this.state.mode || 'add'} step="relationship"></PassengerFormRelationship_1>
					</div>
				</div>

				<PopupAddPreferences onRef={ref => (this.popup = ref)}></PopupAddPreferences>

			</div>
		)
	}
})