/* [library] */
import React from 'react'

/* [components] */
import Title from '../../panel-title'
import BtnCircle from '../../../components/btn-circle'

/* [pages] */
import Index from './ftd-p-index'
import BasicInfo from '../../passenger/psg-basic-main'
import Preferences from '../../passenger/psg-preferences-main'
import Relationship from '../../passenger/psg-relationship-main'
import FlightRecord from '../../passenger/psg-flightRecord-main'


const btn_back_pos = {right: '-60px', top: '5px', };
const btn_basicInfo_pos = {right: '-60px', bottom: '580px' };
const btn_preferences_pos = {right: '-60px', bottom: '470px' };
const btn_relationship_pos = {right: '-60px', bottom: '360px' };
const btn_flightRecord_pos = {right: '-60px', bottom: '250px' };
const btn_luggage_pos = {right: '-60px', bottom: '140px' };
const btn_remark_pos = {right: '-60px', bottom: '30px' };





var index, basicInfo, preferences, relationship, flightRecord, remark;



export default React.createClass({

	getInitialState() {

		index = <Index></Index>;
		basicInfo = <BasicInfo></BasicInfo>;
		preferences = <Preferences></Preferences>
		relationship = <Relationship></Relationship>
		flightRecord = <FlightRecord></FlightRecord>

		return {
			content: index,
			// content: basicInfo,
			// content: preferences,
			// content: relationship,
			// content: flightRecord,
			btnsAppear: ''
		}	
	},

	componentWillMount() {
		this.btnsFadeCheck();
	},

	componentWillUnmount() {
		
	},

	componentWillUpdate(nextProps, nextState) {

	},

	btnsFadeCheck: function(action) {
		
		if(action) this.setState({btnsAppear: action});
		else {
			if(this.state.content != index) this.setState({btnsAppear: 'fade-out'});
			else this.setState({btnsAppear: ''});
		}
	},

	btnBackClick: function() {

		if(this.state.content == index) this.props.panelSwitch();
		else {
			this.contentChanger(index);
		}		
	},

	btnBasicInfoClick: function() {this.contentChanger(basicInfo); },
	btnPreferencesClick: function() {this.contentChanger(preferences); },
	btnRelationship: function() {this.contentChanger(relationship); },
	btnFlightRecordClick: function() {this.contentChanger(flightRecord); },
	btnLuggageClick: function() {this.contentChanger(basicInfo); },
	btnRemarkClick: function() {this.contentChanger(basicInfo); },

	contentChanger: function(content) {

		if(content == index) this.btnsFadeCheck(' ');
		else this.btnsFadeCheck('fade-out');

		this.contentFadeSwitch();
		
		setTimeout(() => {
			this.setState({content: content });
			this.contentFadeSwitch();
		}, 300);
	},

	contentFadeSwitch: function() {
		
		if(this.state.contentFade == 'fade-out') this.setState({contentFade: ''});
		else this.setState({contentFade: 'fade-out'});
	},

	render() {

		return (
			<div>


				{/*
				 * [buttons]
				 * @[back], @[basic], @[preferences], @[relationship], @[flightRecord], @[luggage], @[remark]
				 */}
				<BtnCircle style={btn_back_pos} 
						   touchCallback={this.btnBackClick} 
						   color="red" 
						   btnType="icon-arrow-left"></BtnCircle>				

				<div className={"btns-wrap " + this.state.btnsAppear}>

					<BtnCircle style={btn_basicInfo_pos}
							   touchCallback={this.btnBasicInfoClick}
							   color="gray-4"
						   btnType="icon-basicInfo"></BtnCircle>

					<BtnCircle style={btn_preferences_pos}
							   touchCallback={this.btnPreferencesClick}
							   color="gray-3"
							   btnType="icon-preferences"></BtnCircle>

					<BtnCircle style={btn_relationship_pos}
							   touchCallback={this.btnRelationship}
							   color="gray-2"
							   btnType="icon-relationship"></BtnCircle>

					<BtnCircle style={btn_flightRecord_pos}
							   touchCallback={this.btnFlightRecordClick}
							   color="gray-1"
							   btnType="icon-flightRecord"></BtnCircle>

					<BtnCircle style={btn_luggage_pos}
							   touchCallback={this.btnLuggageClick}
							   color="gray-0"
							   btnType="icon-luggage"></BtnCircle>

					<BtnCircle style={btn_remark_pos}
							   touchCallback={this.btnRemarkClick}
							   color="black"
							   btnType="icon-remark"></BtnCircle>
				</div>
				





				{/* 
				  * [ title ]
				  * @mode = [info, add, edit]
				  * @step = [all steps]
				  */}
				 
				 <div className="ftd-p-title">
				 	<Title mode="info" step="relationship"></Title>
				 	
				 </div>


				





				{/*
				  * [ content ] 
				  * @index
				  * @basic
				  * @contact
				  * @preferences
				  * @relationship
				  * @flightRecord
				  * @remark
				  *
				  * // all of section has preview and edit page
				  * */}

				  <div className={"ftd-p-content " + this.state.contentFade}>
				  	{this.state.content}
				  </div>




			</div>
		)
	}
});