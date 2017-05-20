/* [library] */
import React from 'react'
import $ from 'jquery'

/* [components] */
import gp from '../../global/parameter'
import Index from './ftd-index'
import Personal from './personal/ftd-p-main'
import CrewMember from './../crew-member/cm-main'

var loading = false, 
	apiCalling = false;

export default React.createClass({

	contextTypes: {
		Token: React.PropTypes.string,
		panel: React.PropTypes.object,
	},

	childContextTypes: {
		ftdChange: React.PropTypes.func,
	},

	getChildContext: function() {
		return {
			ftdChange: this.contentChange, 
		}
	},

	getInitialState() {
		
		return {
			loading: 'loading',
			// current: 'index',
			current: 'crew-member',
			tripNo: '',
			trip: '',
		}
	},

	componentWillMount() {
		this.api_getTripDetail(this.props.tripNo);
	},

	componentDidMount() {
		setTimeout(() => {
			if(!loading && this.state.loading == 'loading') {
				this.setState({loading: 'false'});
			}
		}, 250);
	},

	componentWillUpdate(nextProps, nextState) {
		setTimeout(() => {
			if(this.state.tripNo != this.props.tripNo) {
				this.setState({loading: 'loading', tripNo: this.props.tripNo});
				this.api_getTripDetail(this.props.tripNo);
			}
		}, 0);
	},

	componentDidUpdate(prevProps, prevState) {
		setTimeout(() => {
			if(!loading && this.state.loading == 'loading') {
				this.setState({loading: 'false'});
			}
		}, 400);
	},

	api_getTripDetail: function(tripNo) {

		if(apiCalling) return;
		else {
			apiCalling = true;
			loading = true;
		}

		if(gp.localAPI) {
			apiCalling = false; loading = false;
			var info = gp.getTripDetailByTripNo.data.trip_info[0];
			this.setState({tripNo: tripNo, trip: info, current: 'index' });
			return;
		}

		$.ajax({
			url: gp.api_url + 'case/getTripDetailByTripNo/' + tripNo,
			type: 'GET',
			dataType: 'JSON',
			headers: {"Content-Type": "application/json", "Authorization": "Bearer " + this.context.Token, },
		})
		.done((response) => {

			loading = false;
			apiCalling = false;

			if(response.status_code != 0) {
				alert(response.message);
				return;
			}

			var info = response.data.trip_info[0];
			this.setState({current: 'index', tripNo: tripNo, trip: info });
		})
		.fail((response) => {
			console.log(response);
		});
	},


	api_getPassengerDetail: function(param) {

		if(apiCalling) return;
		else apiCalling = true; loading = true;

		
		if(gp.localAPI) {
			loading = false; apiCalling = false;
			this.setState({passengerId: param.passengerId, passenger: gp.getPassengerDetailById.data[0], current: "personal-detail", legNum: param.leg });
			return;
		}

		$.ajax({
			url: gp.api_url + 'passenger/getPassengerDetailById/' + param.passenger,
			type: 'GET', dataType: 'JSON',
			headers: {"Content-Type": "application/json", "Authorization": "Bearer " + this.context.Token, },
		})
		.done((response) => {

			loading = false;
			apiCalling = false;

			if(response.status_code != 0) return;
			else {
				this.setState({passengerId: param.passenger, passenger: response.data[0], current: "personal-detail", legNum: param.leg });
				/*this.contentInit();*/
			}
		})
		.fail((response) => {console.log("error", response); });
	},

	api_getUserList: function() {

		if(apiCalling) return;
		else apiCalling = true; loading = true;


		if(gp.localAPI) {
			loading = false; apiCalling = false;
			this.setState({crewMemberAll: gp.getUserList.data.user_info, current: 'crew-member' });
			return;	
		}


		$.ajax({
			url: gp.api_url + 'user/getUserList',
			type: 'GET', dataType: 'JSON',
			headers: {"Content-Type": "application/json", "Authorization": "Bearer " + this.context.Token, },
		})
		.done((response) => {
			loading = false;
			apiCalling = false;
			if(response.status_code != 0) return;
			else this.setState({crewMemberAll: response.data.user_info, current: 'crew-member' });
		})
		.fail((response) => {
			console.log("error", response);
		});
	},


	contentChange: function(content, parameter) {

		if(gp.debug) console.log('contentChange', content);
		
		this.setState({loading: 'loading'});

		setTimeout(() => {
			switch(content) {
				case 'index':
					this.api_getTripDetail(this.props.tripNo);
					break;
				case 'personal-detail':
					this.api_getPassengerDetail(parameter);
					break;
				case 'crew-member':
					if(this.state.crewMemberAll) this.setState({current: content });
					else this.api_getUserList();
					break;
			}
		}, 400);
	},



	addPsgSwitch: function() {
		if(this.state.psgListIn == 'in') this.setState({psgListIn: '' });
		else this.setState({psgListIn: 'in' });
		
	},

	addPsg: function() {
		console.log('addPsg');
	},

	render() {

		var current = this.state.current, 
			content;

		switch(current) {
			
			case 'index':
				content = <Index trip={this.state.trip}></Index>;
				break;
			
			case 'personal-detail':
				content = <Personal passenger={this.state.passenger} trip={this.state.trip} legNum={this.state.legNum}></Personal>
				break;

			case 'crew-member':
				content = <CrewMember trip={this.state.trip} crewMemberAll={this.state.crewMemberAll}></CrewMember>;
				break;
		}

		return (
			<div is class="comp-loading bgc-gray-4 bgc-no" status={this.state.loading}>
				{content}
			</div>
		)
	}
});