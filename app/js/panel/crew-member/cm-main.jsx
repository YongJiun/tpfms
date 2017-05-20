/* [lib] */
import React from 'react'
import $ from 'jquery'

/* [comp] */
import gp from '../../global/parameter'
import BtnCircle from '../../components/btn-circle'
import Index from './cm-index-main'
import Person from './cm-person-main'

var apiCalling = false;

export default React.createClass({

	contextTypes: {
		Token: React.PropTypes.string,
		panel: React.PropTypes.object,
	},

	getInitialState() {
		return {
			from: this.props.from,
			current: 'index',
			crewMember: '',
			cmNum: '',
			loading: '',
		}
	},

	componentWillMount() {
		
	},

	componentDidMount() {
		if(this.props.readyCallback) this.props.readyCallback();
	},

	componentWillUpdate(nextProps, nextState) {
		
	},

	componentDidUpdate(prevProps, prevState) {
		
	},

	api_getUserDetailById: function(id) {

		if(gp.debug) console.log('api_getUserDetailById');

		if(apiCalling) return;
		else apiCalling = true;

		if(gp.localAPI) {
			apiCalling = false;
			var data = gp.getUserDetailById.data;
			this.setState({current: 'person', crewMemberDetail: data[0] });
			return;
		}
		
		$.ajax({
			url: gp.api_url + 'user/getUserDetailById/' + id,
			type: 'GET',
			dataType: 'JSON',
			headers: {"Content-Type": "application/json", "Authorization": "Bearer " + this.context.Token, },
		})
		.done((response) => {

			apiCalling = false;

			if(response.status_code != 0) {
				alert(response.message);
				return;
			}

			this.setState({
				current: 'person',
				crewMemberDetail: response.data[0],
			});

		})
		.fail((response) => {
			console.log(response);
		});

	},

	contentChange: function(content, parameter) {

		if(gp.debug) console.log('cm contentChange', content, parameter);

		this.setState({loading: 'loading' });

		switch(content) {

			case 'index':
 				setTimeout(() => {this.setState({current:content }); }, 400);
				setTimeout(() => {this.setState({loading: '' }); }, 400);
				break;

			case 'person':
				this.api_getUserDetailById(parameter);
				break;
		};
	},

	ready: function() {
		this.setState({loading: '' });
	},

	render() {

		console.log(this.props);

		var current = this.state.current,
			title, content;

		switch(current) {
			case 'index': content = <Index crewMember={this.props.trip.crew_list} crewMemberAll={this.props.crewMemberAll} cmChange={this.contentChange} readyCallback={this.ready}></Index>; break;
			case 'person': content = <Person crewMemberDetail={this.state.crewMemberDetail} cmChange={this.contentChange} readyCallback={this.ready}></Person>; break;
		}

		return (
			<div>
				<div is class="cm-content pr comp-loading" status={this.state.loading}>
					{content}
				</div>
			</div>
		)
	}
});