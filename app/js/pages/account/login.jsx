/* [library] */
import React from 'react'
import Footer from '../../footer/footer-main'
import { Router, Route } from 'react-router'
import $ from 'jquery'

/* [parameter] */
import gp from '../../global/parameter'

/*var cookieName = Variable.cookieName;*/

export default React.createClass({

	contextTypes: {
		loginUpdate: React.PropTypes.func,
	},

	getInitialState() {
		return {
			loginFade: 'fade-out', 
			passwordType: 'password',
			account: 'admin',
			password: 'admin',
			loading: 'false',
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

		console.log('login');
		
		e.preventDefault();
		this.setState({loading: 'loading' });

		var loginValue = {},
			storageValue = {};
		
		if(this.state.account != "" && this.state.password != "") {

			var loginValue = {
				'Account': this.state.account,
				'Password': this.state.password
			};
			
			/* 登入 */
			$.ajax({
				url: gp.api_url + 'auth/login',
				type: 'POST',
				dataType: 'JSON',
				data: loginValue,
			})
			.done((response) => {

				console.log('login callback');

				if(response.status_code != 0) return;

				/* Token存入localStorage */
				storageValue.Token = response.data.user_info.Token;
				localStorage.setItem(gp.localStoragKey, JSON.stringify(storageValue));
				
				/* 將Token更新至store */
				this.context.loginUpdate(response.data.user_info);
				this.loginFadeOut();

				if(this.props.unMount_cb) this.props.unMount_cb();
				
				setTimeout(() => {
					window.location.hash = '/';
				}, 400);
			})
			.fail((response) => {
				console.log("error", response);
			});
		}
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
						<p className="md">TPFMS</p>
						<p className="lg">LOGIN</p>
					</div>

					<div is class="login-block comp-loading" status={this.state.loading}>
						<div>
							<form onSubmit={this.login}>
								<input name="account" value={this.state.account} onChange={this.handleInputChange} className="icon-login-account" placeholder="account" type="text" />	
								<input name="password" value={this.state.password} onChange={this.handleInputChange} className="icon-login-password" placeholder="password" type={this.state.passwordType} />
								<div onTouchStart={this.passwordSwitch} className="btn-pwd-eye"></div>

								<p onTouchStart={this.forgotPassword} className="text-right">Forgot password?</p>

								<input id="btn-login" className="btn btn-line red" type="submit" value=""/>
							</form>
						</div>
					</div>

					<Footer></Footer>
				</div>
			</div>
		)
	}
});