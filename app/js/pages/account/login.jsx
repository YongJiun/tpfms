import React from 'react'
import Footer from '../../footer/footer-main'
import { Router, Route } from 'react-router'

import Variable from '../../variable/variable'

import $ from 'jquery'
import 'jquery.cookie'

var cookieName = Variable.cookieName;

export default React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			loginFade: 'fade-out', 
			passwordType: 'password',
			account: 'admin',
			password: 'password'
		}
	},

	componentDidMount() {
		this.loginFadeIn();
		if(this.props.didMount_cb) this.props.didMount_cb('login mount');
	},

	forgotPassword: function() {
		alert('功能準備中！');
	},

	handleInputChange: function(e) {
		var name = e.target.name,
			value = e.target.value;
		if(name == 'account') this.setState({account: value});
		else if(name == 'password') this.setState({account: value});
	},

	login: function(e) {
		
		e.preventDefault();

		var self = this;
		
		if(this.state.account != "" && this.state.password != "") {
			
			var cookieValue = {
				account: this.state.account,
				password: this.state.password
			};

			if(typeof cookieValue === 'object') {
				var v = JSON.stringify(cookieValue);
				$.cookie(cookieName, v, {expires: 7 });
			}
			
			this.loginFadeOut();

			if(self.props.unMount_cb) self.props.unMount_cb();

			setTimeout(function() {
				window.location.hash = '/';
			}, 800);
		}


		return;

		/*var self = this;

 		$.ajax({
 			url: api_url + 'auth/login',
 			type: 'POST',
 			dataType: 'json',
 			data: {
 				Account: "admin",
				Password: "admin"
 			},
 		})
 		.done(function(response) {

			if (response.status_code == 0) {
				
				console.log('');
			}
 			else alert('status_code: ' + response.status_code);
 		})
 		.fail(function(response) {console.log("error", response); });*/
	},

	loginFadeIn: function() {
		this.setState({loginFade: 'fade-in'});
	},

	loginFadeOut: function() {
		this.setState({loginFade: 'fade-out'});
	},

	passwordSwitch: function() {
		var t = this.state.passwordType == 'password' ? 'text' : 'password';
		this.setState({passwordType: t });
	},

	render() {

		return (
			<div className={"login-wrap " + this.state.loginFade}>
				<div className="login-bg bg-main-airplain"></div>
				<div className="login-content">

					<div className="login-block">
						<p className="md">brand</p>
						<p className="lg">LOGIN</p>
					</div>

					<div className="login-block">
						<form onSubmit={this.login}>
							<input name="account" value={this.state.account} onChange={this.handleInputChange} className="icon-login-account" placeholder="account" type="text" />	
							<input name="password" value={this.state.password} onChange={this.handleInputChange} className="icon-login-password" placeholder="password" type={this.state.passwordType} />
							<div onTouchStart={this.passwordSwitch} className="btn-pwd-eye"></div>

							<p onTouchStart={this.forgotPassword} className="text-right">Forgot password?</p>

							<input id="btn-login" className="btn btn-line red" type="submit" value=""/>
						</form>
					</div>

					<Footer></Footer>
				</div>
			</div>
		)
	}
});