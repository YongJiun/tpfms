/* [library] */
import React from 'react'
import $ from 'jquery'

/* [components] */
import HomeTask from './home-task'
import Header from '../../header/header-main'
import Panel from '../../panel/panel-main'
import Navi from '../../navi/navi-main'


var api_url = 'http://flight.faw-ogilvy.com/api/';
var deep = false;

export default React.createClass({

	childContextTypes: {
		naviSwitch: React.PropTypes.func,
		panelSwitch: React.PropTypes.func
	},

	contextTypes: {
		user: React.PropTypes.object,
		testValue: React.PropTypes.string,
	},

	getChildContext: function() {
		return {
			naviSwitch: this.naviSwitch,
			panelSwitch: this.panelSwitch
		}
	},

	getInitialState() {
		
		console.log('user:', window.user);

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
	
	naviSwitch: function() {
		this.childNavi.naviSwitch();
		/*if(!deep) {deep = true; this.childPanel.toDeep(); } else { deep = false; setTimeout(this.childPanel.toDeep, 500) }*/
	},

	panelSwitch: function() {
		this.childPanel.panelSwitch();
	},

	checkList: function() {
		this.childPanel.changeContent('checkList');
        this.childPanel.panelSwitch();
    },

    panelChange: function(tar) {
    	this.childPanel.panelSwitch();
    	this.childPanel.changeContent(tar);
    },

    taskClick: function(num) {
    	this.childPanel.panelSwitch();
    	this.childPanel.changeContent('flight-task-detail', num);
    },

	render() {

		return (
			<div className="full-height">

				<Header checkList_cb={this.checkList} panelChange_cb={this.panelChange}></Header>

				<HomeTask click_cb={this.taskClick}></HomeTask>

				<Navi panelChange_cb={this.panelChange}  onRef={ref => (this.childNavi = ref)}></Navi>

				<Panel naviSwitch_cb={this.naviSwitch} onRef={ref => (this.childPanel = ref)}></Panel>
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