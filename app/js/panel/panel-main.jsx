import React from 'react'
import BtnCircle from '../components/btn-circle-red'
import CheckList from './panel-checkList'
import Passenger from './passenger/passenger-main'
import FlightTaskDetail from './flight-task-detail/ftd-main'

const btn_back_pos = {
	right: '-60px',
	top: '12px',
};


var ftd, psg, cl;

export default React.createClass({

	panelSwitch: function(action) {

		var state, panelDisappear;

		if(action == 'open') {
			state = 'open';
			panelDisappear = '';
		}
		else if(action == 'close') {
			state = 'close';
			panelDisappear = 'disappear';
		}
		else {
			if(this.state.panelState == 'close') {
				state = 'open';
				panelDisappear = '';
			}
			else {
				state = 'close';
				panelDisappear = 'disappear';
			}
		}

		this.setState({
			panelState: state,
			panelDisappear: panelDisappear
		});
	},

	getInitialState() {

		cl  = <CheckList panelSwitch={this.panelSwitch} taskState="main"></CheckList>;
		psg = <Passenger panelSwitch={this.panelSwitch}></Passenger>;
		ftd = <FlightTaskDetail panelChange={this.changeContent} panelSwitch={this.panelSwitch}></FlightTaskDetail>;
		
		return {
			panelState: 'open',
			panelDisappear: '',
			panelDeep: '',
			section: 'flight-task-detail',
			content: ftd,
			contentFade: '',

			/*panelState: 'open',
			panelDisappear: '',
			content: <Passenger panelSwitch={this.panelSwitch}></Passenger>,*/
			
			/*panelState: 'close',
			panelDisappear: 'disappear',
			content: <CheckList taskState="main"></CheckList>,*/
		}	
	},

	componentDidMount() {
		this.props.onRef(this);
	},
  	
	componentWillUnmount() {
		this.props.onRef(undefined);
	},

	toDeep: function() {
		if(this.state.panelDeep == 'deep') this.setState({panelDeep: '' });
		else this.setState({panelDeep: 'deep' });
		
	},

	changeContent: function(tar) {

		if(this.state.panelState == 'open') {
			
			this.setState({contentFade: 'fade-out' });	

			setTimeout(() => {
				this.changeControler(tar)
				this.setState({contentFade: '' });
			}, 600);
		}
		else this.changeControler(tar);
		
	},

	naviSwitch_cb: function() {
		if(this.props.naviClick) this.props.naviClick();
	},

	changeControler: function(tar) {

		switch(tar) {
			case 'checkList':
				this.setState({content: <CheckList taskState="main" panelSwitch={this.panelSwitch}></CheckList> });
				break;
			case 'passenger':
				this.setState({content: <Passenger panelSwitch={this.panelSwitch}></Passenger> });
				break;
			case 'flight-task-detail':
				this.setState({content: <FlightTaskDetail panelChange={this.changeContent} panelSwitch={this.panelSwitch}></FlightTaskDetail> });
				break;
		}
	},

	render() {

		return (
			<div className={'panel-main-wrap ' + this.state.panelState + ' ' + this.state.panelDisappear + ' ' + this.state.panelDeep}>

				<div className="panel-bg"></div>

				<div id="panel-main">
					<div className={this.state.contentFade}>
						{this.state.content}
					</div>
				</div>

			</div>
		)
	}
})