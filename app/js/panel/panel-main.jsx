/* [library] */
import React from 'react'

/* [components] */
import gp from '../global/parameter'
import CheckList from './check-list/cl-main'
import Passenger from './passenger/passenger-main'
import FlightTaskDetail from './flight-task-detail/ftd-main'
import CrewMember from './crew-member/cm-main'

var ftd, psg, cl;


var checkList = '';

export default React.createClass({

	contextTypes: {
		Token: React.PropTypes.string,
		panel: React.PropTypes.object,
	},

	getInitialState() {

		var ps, pd, co;

		if(gp.testPanel) {
			ps = 'open';
			pd = '';
			co = 'flight-task-detail';
		}
		else {
			ps = 'close';
			pd = 'disappear';
			co = 'index';
		}
		
		return {
			panelDeep: '',
			loading: '',
			panelState: ps,
			panelDisappear: pd,
			content: co,
		}	
	},

	componentDidMount() {
		this.props.onRef(this);
	},
  	
	componentWillUnmount() {
		this.props.onRef(undefined);
	},

	loadingSwitch: function(action) {

		if(action) {
			if(action == this.state.loading) return;
			else this.setState({loading: action });
		}
		else {
			if(this.state.loading == '') this.setState({loading: 'loading' });
			else this.setState({loading: '' });

		}
	},

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

	changeContent: function(content, parameter) {

		/* 若panel為打開的狀態，須先進入loading，再變換content */
		/* 若panel為關閉的，則直接改變content */
		
		if(gp.debug) console.log('changeContent');
		this.setState({loading: 'loading' });

		if(content == 'flight-task-detail') this.setState({parameter: parameter });		
		
		if(this.state.panelState == 'open') setTimeout(() => {this.setState({content: content }); }, 400);
		else {
			this.setState({content: content });
			this.panelSwitch('open');
		}

		setTimeout(() => {
			this.setState({loading: ' ' });
		}, 600);
	},

	render() {

		var content;

		switch(this.state.content) {
			case 'check-list':
				content = <CheckList data={this.props.checkListData} taskState="main"></CheckList>;
				break;
			case 'passenger':
				content = <Passenger></Passenger>;
				break;
			case 'flight-task-detail':
				content = <FlightTaskDetail tripNo={this.state.parameter}></FlightTaskDetail>;
				break;
		}

		return (
			<div className={'panel-main-wrap ' + this.state.panelState + ' ' + this.state.panelDisappear + ' ' + this.state.panelDeep}>

				<div className="panel-bg"></div>

				<div className={"panel-main comp-loading " + this.state.loading}>
					<div className={"panel-content"}>
						{content}
					</div>
				</div>
				
			</div>
		)
	}
})