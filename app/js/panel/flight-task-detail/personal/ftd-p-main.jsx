/* [library] */
import React from 'react'
import $ from 'jquery'

/* [components] */
import Title from '../../panel-title'
import BtnCircle from '../../../components/btn-circle'
import gp from '../../../global/parameter'

/* [pages] */
import Index from './ftd-p-index'
import BasicInfo from '../../passenger/psg-basic-main'
import Preferences from '../../passenger/psg-preferences-main'
import Relationship from '../../passenger/psg-relationship-main'
import FlightRecord from '../../passenger/psg-flightRecord-main'
import Remark from '../../passenger/psg-Remark-main'

var btn_back_pos = gp.getBtnPos('top', 0, 0, 0);
var btn_edit_pos = gp.getBtnPos('top', 1, 0, 0);
var btn_basicInfo_pos = gp.getBtnPos('bottom', 5, 0, 0);
var btn_preferences_pos = gp.getBtnPos('bottom', 4, 0, 0);
var btn_relationship_pos = gp.getBtnPos('bottom', 3, 0, 0);
var btn_flightRecord_pos = gp.getBtnPos('bottom', 2, 0, 0);
var btn_luggage_pos = gp.getBtnPos('bottom', 1, 0, 0);
var btn_remark_pos = gp.getBtnPos('bottom', 0, 0, 0);

var index, basicInfo, preferences, relationship, flightRecord, remark;

export default React.createClass({

	contextTypes: {
		Token: React.PropTypes.string,
		panel: React.PropTypes.object,
		ftdChange: React.PropTypes.func,
	},

	getInitialState() {

		return {
			current: 'index',
			trip: this.props.trip,
			passenger: '',
			passengerId: '',
			btnsAppear: ''
		}	
	},

	contentInit: function() {

		

		this.setState({content: index });
		this.context.panel.loading();
	},

	contentChanger: function(next) {

		var current = this.state.current;

		if(current == 'index') this.btnsFadeCheck(' ');
		else this.btnsFadeCheck('fade-out');

		this.contentFadeSwitch();
		
		setTimeout(() => {
			this.contentFadeSwitch();
			this.setState({current: next });
		}, 500);
	},

	componentWillMount() {
		/*this.btnsFadeCheck();*/
		/*if(this.state.passenger == '') this.api_getPassengerDetail();*/
	},

	componentDidMount() {
		/*this.props.onRef(this);*/
	},
  	
	componentWillUnmount() {
		/*this.props.onRef(undefined);*/
	},

	btnsFadeCheck: function(action) {
		/*if(action) this.setState({btnsAppear: action});
		else {
			if(this.state.content != index) this.setState({btnsAppear: 'fade-out'});
			else this.setState({btnsAppear: ''});
		}*/
	},

	btnBackClick: function() {
		if(this.state.current == 'index') this.context.ftdChange('index');
		else this.contentChanger('index');	
	},

	btnBasicInfoClick: function() {this.contentChanger('basicInfo'); },
	btnPreferencesClick: function() {this.contentChanger('preferences'); },
	btnRelationship: function() {this.contentChanger('relationship'); },
	btnFlightRecordClick: function() {this.contentChanger('flight-record'); },
	btnLuggageClick: function() {this.contentChanger('luggage'); },
	btnRemarkClick: function() {this.contentChanger('remark'); },

	contentFadeSwitch: function() {
		if(this.state.contentFade == 'fade-out') this.setState({contentFade: ''});
		else this.setState({contentFade: 'fade-out'});
	},

	render() {

		var trip = this.props.trip,
			passenger = this.props.passenger;
		
		var current = this.state.current,
			content;

		switch(current) {

			case 'index':
				content = <Index trip={trip.leg_list[this.props.legNum]} passenger={passenger}></Index>;
				break;

			case 'basicInfo':
				content = <BasicInfo passenger={passenger} updateCallback={'func'}></BasicInfo>;
				break;

			case 'preferences':
				content = <Preferences passenger={passenger}></Preferences>;
				break;

			case 'relationship':
				content = <Relationship passenger={passenger}></Relationship>;
				break;

			case 'flight-record':
				content = <FlightRecord passenger={passenger}></FlightRecord>;
				break;

			case 'luggage':
				alert('功能即將開放');
				break;

			case 'remark':
				content = <Remark passenger={passenger}></Remark>;
				break;
		}




		return (
			<div>
				{/*
				 * [buttons]
				 * @[back], @[basic], @[preferences], @[relationship], @[flightRecord], @[luggage], @[remark]
				 */}
				
				{/* [ 返回按鈕 ] */}
				<BtnCircle style={btn_back_pos} 
						   touchCallback={this.btnBackClick} 
						   color="red" 
						   btnType="icon-arrow-left"></BtnCircle>

				{/* [ 編輯按鈕 ] */}
				<BtnCircle style={btn_edit_pos} 
						   touchCallback={this.btnBackClick} 
						   color="red" 
						   btnType="icon-edit"></BtnCircle>

				{/* [ 切換內容 ] */}
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
				 	<Title mode="info" data={this.props.passenger}></Title>
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
				  	{content}
				  </div>




			</div>
		)
	}
});