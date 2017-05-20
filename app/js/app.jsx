/* [ library ] */
import React from 'react'
import { instanceOf } from 'prop-types';
import { browserHistory } from 'react-router'
import $ from 'jquery'
import 'jquery.cookie'

/* [ paramter ] */
import gp from './global/parameter'
import Login from './pages/account/login'



var apiCalling = false,
	noToken = true;

/*var cookieName = Variable.cookieName;*/
/*(function(g) {g.user = {account: 'test-a', password: 'test-p', token: 'test-t'}; })(window);*/

export default React.createClass({

	childContextTypes: {
		loginUpdate: React.PropTypes.func,
		Token: React.PropTypes.string,
		user: React.PropTypes.object,
		userDetail: React.PropTypes.object,
		panelState: React.PropTypes.object,
		naviState: React.PropTypes.object,
	},

	getChildContext: function() {

		return {
			loginUpdate: this.loginUpdate,
			Token: this.state.Token,
			user: this.state.user,
			userDetail: this.state.userDetail,
			panelState: {},
			naviState: {},
		};
	},

	getInitialState() {
		return {
			loadingFade: '',
			loadingDisappear: '',
			user: {},
			Token: '',
		};	
	},

	componentWillMount() {
		this.checkLocalStorage();
	},

	checkLocalStorage: function() {

		if(gp.debug) console.log('checkLocalStorage');
		
		/*檢查localStorage是否有Token*/
		var stg = localStorage.getItem(gp.localStoragKey);

		if(stg == null || stg == undefined || stg == '') window.location.hash = 'login';
		else {
			noToken = false;
			if(typeof(stg) == 'string') stg = JSON.parse(stg);
			if(!stg.Token) window.location.hash = 'login';
			
			/*若localStorage有Token，則確認Token是否過期*/
			this.api_checkToken(stg.Token);
		}
	},

	componentWillUpdate(nextProps, nextState) {
		var stg = localStorage.getItem(gp.localStoragKey);

		if(noToken && stg) {
			noToken = false;
			this.checkLocalStorage();
		}
		
	},

	api_checkToken: function(Token) {

		if(apiCalling) return;
		else apiCalling = true;

		if(gp.debug) console.log('api_checkToken');

		if(gp.localAPI) {
			apiCalling = false;
			this.setState({Token: Token });
			setTimeout(() => {this.api_getUser(); }, 100);
			return;
		}

		$.ajax({
			url: gp.api_url + 'auth/checkToken',
			type: 'POST', dataType: 'JSON',
			headers: {"Content-Type": "application/json", "Authorization": "Bearer " + Token, },
		})
		.done((response) => {

			if(gp.debug) console.log('api_checkToken callback');

			apiCalling = false;

			if(response.status_code == 0) {
				window.location.hash = '/';
				this.setState({Token: Token });
				setTimeout(() => {this.api_getUser(); }, 100);
			}
			else {
				alert('請重新登入');
				window.location.hash = 'login';
				return;
			}
		})
		.fail((response) => {
			if(gp.debug) console.log("error", response);
		});
	},

	api_getUser: function() {

		if(apiCalling) return;
		else apiCalling = true;

		if(gp.debug) console.log('api_getUserInfo');

		$.ajax({
				url: gp.api_url + 'user/getUserInfo',
				type: 'GET',
				dataType: 'JSON',
				headers: { 
					"Content-Type": "application/json",
					"Authorization": "Bearer " + this.state.Token,
				},
			})
			.done((response) => {
				if(gp.debug) console.log('api_getUser callback');
				this.setState({user: response.data.user_info });
				this.api_getUserDetailById();
			})
			.fail((response) => {
				if(gp.debug) console.log("error", response);
			});
	},

	api_getUserDetailById: function() {

		if(gp.debug) console.log('api_getUserDetailById');

		if(gp.localAPI) {
			var userDetail = gp.getUserDetailById.data[0];
			this.setState({userDetail: userDetail });
			return;	
		}

		$.ajax({
				url: gp.api_url + 'user/getUserDetailById/' + this.state.user.APId,
				type: 'GET', dataType: 'JSON',
				headers: {"Content-Type": "application/json", "Authorization": "Bearer " + this.state.Token, },
			})
			.done((response) => {
				if(gp.debug) console.log('api_getUserDetailById callback');
				this.setState({userDetail: response.data[0] });
			})
			.fail(function(response) {
				if(gp.debug) console.log("error", response);
			});
	},

	loginUpdate: function(user) {
		this.setState({Token: user.Token, user: user });
	},

	loadingFadeIn: function() {
		this.setState({loadingFade: '', loadingDisappear: ''});
	},
	loadingFadeOut: function() {
		setTimeout(() => {
			this.setState({loadingFade: 'fade-out', loadingDisappear: 'disappear'});
		}, 400);
	},
	childDidMount_cb: function(child, response) {
		this.loadingFadeOut();
	},
	childUnMount_cb: function(child, response) {
		this.loadingFadeIn();
	},

	render() {

		

		return (
			<div id="content-wrap">
				<div className={"loading-wrap " + this.state.loadingFade + " " + this.state.loadingDisappear}></div>
				{React.Children.map(this.props.children, child => React.cloneElement(child, {didMount_cb:this.childDidMount_cb, unMount_cb: this.childUnMount_cb})) || <Home/>}
			</div>
		)
	}
})