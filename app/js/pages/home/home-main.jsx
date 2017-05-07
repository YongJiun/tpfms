import React from 'react'
import HomeTask from './home-task'
import Header from '../../header/header-main'
import Panel from '../../panel/panel-main'
import $ from 'jquery'

var api_url = 'http://flight.faw-ogilvy.com/api/';

export default React.createClass({

	contextTypes: {
		user: React.PropTypes.object,
		testValue: React.PropTypes.string,
	},

	getInitialState() {

		console.log(window.user);

		return {
			v: this.context.testValue
		};	
	},

	componentWillMount() {
		console.log('home-main willmount: ', this.context);
	},

	componentDidMount() {
		/*console.log(this.context.testValue);
		this.context.testValue = 'new testValue';
		console.log(this.context.user);*/
		if(this.props.didMount_cb) this.props.didMount_cb('home-main mount');
	},

	/*componentWillUpdate(nextProps, nextState) {
		console.log('home-main update: ', this.context.user);	
	},*/
	

	checkList_cb: function() {
		this.childPanel.changeContent('checkList');
        this.childPanel.panelSwitch();
    },

    panelChange_cb: function(tar) {
    	this.childPanel.panelSwitch();
    	this.childPanel.changeContent(tar);
    },

    ddTouch: function() {
    	console.log('ddTouch', this.context.testValue);
    	this.context.testValue = 'new testValue';
    	console.log('ddTouch', this.context.testValue);
    },

	render() {

		var ss = {
			position: 'absolute',
			left: '0',
			top: '0',
			width: '100px',
			height: '100px',
			zIndex: 1000000,
			backgroundColor: 'red'
		};

		return (
			<div className="full-height">

				<Header checkList_cb={this.checkList_cb} panelChange_cb={this.panelChange_cb}></Header>

				<HomeTask></HomeTask>

				<div onTouchStart={this.ddTouch} style={ss}>{this.state.v}</div>

				<Panel onRef={ref => (this.childPanel = ref)}></Panel>
			</div>
		)
	}
})

var inputFormat = [
	{title: 'PassengerNo.', placeholder: '001', inputType: 'num'}, 
	{title: 'Traveller/Owner', placeholder: 'Owner', inputType: 'text'}, 
	{title: 'Title', placeholder: '王董', inputType: 'text'}, 
	{title: 'Birthday', placeholder: '1900/01/01', inputType: 'text'}, 
	{title: 'Height/Weight', placeholder: '180cm / 75kg', inputType: 'text'}, 
	{title: 'Phone', placeholder: '0912123123', inputType: 'tel'}, 
	{title: 'Email', placeholder: 'wang@gmail.com', inputType: 'email'}, 
	{title: 'Line ID', placeholder: 'Wangmin', inputType: 'text'}, 
	
	{title: 'Passport'}, 
	{title: 'VISA'},

	{title: 'Secretary Contact'}, 
	{title: 'Secretary', placeholder: '陳美惠', inputType: 'tel' }, 
	{title: 'Phone', placeholder: '0912123123', inputType: 'tel' }, 
	{title: 'Email', placeholder: 'chen@gmail.com', inputType: 'email' }, 
	
	{title: 'Emergency Contact'},
	{title: 'name', placeholder: '陳美惠', inputType: 'text' },
	{title: 'Relationship', placeholder: 'Mother', inputType: 'text'},
	{title: 'Flight Record'},
];