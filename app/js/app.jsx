import React from 'react'
import { instanceOf } from 'prop-types';
import { browserHistory } from 'react-router'

import Variable from './variable/variable'
import $ from 'jquery'
import 'jquery.cookie'

var cookieName = Variable.cookieName;

(function(g) {

	g.user = {
		account: 'test-a',
		password: 'test-p',
		token: 'test-t'
	};

})(window);

export default React.createClass({

	childContextTypes: {
		user: React.PropTypes.object,
		panelState: React.PropTypes.object,
		testValue: React.PropTypes.string
	},

	getChildContext: function() {
		return {
			user: {
				account: this.state.account,
				password: this.state.password,
				tooken: 'xxxxx'
			},
			panelState: {
				section: 'app.jsx',
				mode: 'test',
			},
			testValue: 'init',
		};
	},

	getInitialState() {

		window.aaa = 'aaa';

		var co = $.cookie(cookieName),
			cookie = (co && typeof co !== 'object') ? JSON.parse(co) : '',
			acc = '',
			pwd = '';

		if((cookie == '' || cookie == undefined) && typeof cookie === 'object') {
			window.location.hash = 'login';
			return {};
		}
		else {
			if(cookie.account) {
				window.location.hash = '/';
				acc = cookie.account;
				pwd = cookie.password;
			}
		}

		return {
			loadingFade: '',
			loadingDisappear: '',
			account: acc,
			password: pwd,
			user: this.context.user
		};	
	},

	componentDidMount() {

	},

	componentWillUpdate(nextProps, nextState) {
		console.log('update');	
		console.log(this.state);
	},

	loadingFadeIn: function() {this.setState({loadingFade: '', loadingDisappear: ''}); },
	loadingFadeOut: function() {var self = this; setTimeout(function() {self.setState({loadingFade: 'fade-out', loadingDisappear: 'disappear'}); }, 500); },
	childDidMount_cb: function(child, response) {this.loadingFadeOut(); },
	childUnMount_cb: function(child, response) {
		this.loadingFadeIn();
	},

	render() {

		return (
			<div id="content-wrap">
				<div onTouchStart={this.loadingFadeOut} className={"loading-wrap " + this.state.loadingFade + " " + this.state.loadingDisappear}></div>
				{/*this.props.children || <Home/>*/}

				{this.context.testValue}
				
				{React.Children.map(this.props.children, child => React.cloneElement(child, {didMount_cb:this.childDidMount_cb, unMount_cb: this.childUnMount_cb})) || <Home/>}
			</div>
		)
	}
})