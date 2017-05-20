/* [library] */
import React from 'react'
import $ from 'jquery'

/* [parameter] */
import gp from '../../global/parameter'

/* [components] */
import HomeTask from './home-task'
import Header from '../../header/header-main'
import Panel from '../../panel/panel-main'
import Navi from '../../navi/navi-main'

var deep = false;
var homeTask = '';
var apiCalling = false;

export default React.createClass({

	childContextTypes: {
		navi: React.PropTypes.object,
		panel: React.PropTypes.object,
	},

	contextTypes: {
		Token: React.PropTypes.string,
		user: React.PropTypes.object,
		userDetail: React.PropTypes.object,
	},

	getChildContext: function() {
		return {
			navi: {
				'switch': this.naviSwitch,
			},
			panel: {
				'switch': this.panelSwitch,
				'change': this.panelChange,
				'loading': this.panelLoading,
			}
		}
	},

	getInitialState() {
		return {
			trips: [],
		};
	},

	componentWillMount() {

	},

	componentWillUpdate(nextProps, nextState) {
		setTimeout(() => {
			if(this.context.user.APId && this.state.trips.length == 0 && !apiCalling) this.api_getTripById();
		}, 0)
	},

	componentDidMount() {
		if(this.props.didMount_cb) this.props.didMount_cb('home-main mount');
	},
	
	naviSwitch: function() {
		this.childNavi.naviSwitch();
	},

	checkList: function() {
		this.childPanel.changeContent('checkList');
        this.childPanel.panelSwitch();
    },




    /* ======================================================================== */
    /* =============================== panel ================================== */
    /* ======================================================================== */

    panelChange: function(tar, parameter) {
    	this.childPanel.changeContent(tar, parameter);
    },

    panelLoading: function(action) {
    	this.childPanel.loadingSwitch(action);
    },

    panelSwitch: function(action, content, parameter) {
		if(action) this.childPanel.panelSwitch(action);
		else this.childPanel.panelSwitch();
	},

    api_getTripById: function() {

    	if(gp.debug) console.log('api_getTripById');

    	if(apiCalling) return;
    	else apiCalling = true;

		if(gp.localAPI) {
			var trips = gp.getTripById.data.trip_info;
			this.setState({trips: trips });
			return;	
		}

		$.ajax({
			url: gp.api_url + 'case/getTripByIdTest/' + this.context.user.APId,
			type: 'GET', dataType: 'JSON',
			headers: {"Content-Type": "application/json", "Authorization": "Bearer " + this.context.Token, },
		})
		.done((response) => {

			if(gp.debug) console.log('api_getTripById callback');

			if(response.status_code != 0) return;
			this.setState({trips: response.data.trip_info });
		})
		.fail((response) => {
			console.log("error", response);
		});
		
	},

	render() {

		return (
			<div className="fh">

				<Header checkList_cb={this.checkList} panelChange_cb={this.panelChange}></Header>

				<HomeTask trips={this.state.trips}></HomeTask>;

				<Navi panelChange_cb={this.panelChange} onRef={ref => (this.childNavi = ref)}></Navi>

				<Panel checkListData={this.context.userDetail} onRef={ref => (this.childPanel = ref)}></Panel>

			</div>
		)
	}
})