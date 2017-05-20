import React from 'react'
import $ from 'jquery'

/* [comp] */
import gp from '../../global/parameter'
import Title from '../panel-title'
import BtnCircle from '../../components/btn-circle'

/* [pages] */
import BasicInfo from './cm-basic-main'
import CheckList from './cm-checkList-main'
import FlightRecord from './cm-flightRecord-main'

var btn_checkList_pos = gp.getBtnPos('bottom', 1, 0, 25);
var btn_flightRecord_pos = gp.getBtnPos('bottom', 0, 0, 25);

export default React.createClass({

	
	getInitialState() {
		return {
			current: 'basic-info',
			mode: 'preview',
			loading: '',
		}		
	},

	componentDidMount() {
		if(this.props.readyCallback) this.props.readyCallback();
	},

	btnClick: function(e, tar) {
		var content = tar;
		if(this.state.current == content) return;
		else this.change(content);
	},

	change: function(content) {
		this.setState({loading: 'loading' });
		setTimeout(() => {
			this.setState({current: content, mode: 'preview' });
		}, 400);
	},

	infoChange: function(current, mode) {
		var c = this.state.current, m = this.state.mode;
		if(c == current && m != mode) this.setState({current: current, mode: mode });
		else if(c != current) this.change(current)
	},

	contentReady: function() {
		console.log('contentReady');
		this.setState({loading: '' });
	},




	render() {	

		var current = this.state.current,
			mode = this.state.mode,
			content, btnsStatus;

		console.log(current, mode);

		switch(current) {

			case 'basic-info': 
				content = <BasicInfo crewMemberDetail={this.props.crewMemberDetail} mode={mode} cmChange={this.props.cmChange} cmInfoChange={this.infoChange} readyCallback={this.contentReady}> </BasicInfo>
				break; 
			
			case 'check-list': 
				content = <CheckList crewMemberDetail={this.props.crewMemberDetail} mode={mode} cmChange={this.props.cmChange} cmInfoChange={this.infoChange} readyCallback={this.contentReady}></CheckList> 
				break; 

			case 'flight-record': 
				content = <FlightRecord crewMemberDetail={this.props.crewMemberDetail} mode={mode} cmChange={this.props.cmChange} cmInfoChange={this.infoChange} readyCallback={this.contentReady}></FlightRecord>
				break;
		}


		switch(mode) {

			case 'preview':
				btnsStatus = '';
				break;

			case 'edit':
				btnsStatus = 'fade-out';
				break;
		}

		return (
			<div>

				<div className="pa fw of-h">
					<Title section="crew-member" mode="person-info" data={this.props.crewMemberDetail}></Title>
				</div>

				<div is class="cm-content comp-loading panel-padding-title" status={this.state.loading}>
					{content}	
				</div>


				<BtnCircle style={btn_checkList_pos}
						   name="check-list"
						   touchCallback={this.btnClick}
						   color="gray-2"
						   status={btnsStatus}
						   btnType="icon-checklist"></BtnCircle>

				<BtnCircle style={btn_flightRecord_pos}
						   name="flight-record"
						   touchCallback={this.btnClick}
						   color="gray-0"
						   status={btnsStatus}
						   btnType="icon-flightRecord"></BtnCircle>
			</div>
		)
	}
});