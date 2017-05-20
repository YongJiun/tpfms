import React from 'react'
import Footer from '../footer/footer-main'
import $ from 'jquery'
import 'jquery.cookie'
import gp from '../global/parameter'

export default React.createClass({

	getInitialState() {
		return {
			/*pannelState: 'open',
			pannelClass: 'navi-pannel navi-pannel-open'*/
			pannelState: 'close',
			pannelClass: 'navi-pannel navi-pannel-close'
		};
	},

	contextTypes: {
		navi: React.PropTypes.object,
		panel: React.PropTypes.object,
	},

	componentDidMount() {
		if(this.props.onRef) this.props.onRef(this)
	},
  	
	componentWillUnmount() {
		if(this.props.onRef) this.props.onRef(undefined)
	},

	naviSwitch: function() {

		if(this.state.pannelState == 'close') {
			this.setState({
				pannelState: 'open',
				pannelClass: 'navi-pannel navi-pannel-open'
			});	
		}
		else {
			this.setState({
				pannelState: 'close',
				pannelClass: 'navi-pannel navi-pannel-close'
			});		
		}
	},

	naviClick: function(e) {

		var tar = $(e.target).attr('class');

		if(tar == 'personal-information') this.logout();
		else {
			alert('功能即將開放');
			return;	
		}

		/*if(tar == 'passenger') {
			this.context.panel.switch('open');
			this.context.panel.change(tar);
		}
		else if(tar == 'personal-information') this.logout();*/
	},

	logout: function() {
		/*$.removeCookie(Variable.cookieName);*/

		localStorage.removeItem(gp.localStoragKey);

		alert('logout');
		setTimeout(function() {
			window.location.hash = 'login';
		}, 50);
	},

	render() {

		return (
			<div className={this.state.pannelClass}>

				{/* pannel 上半部 */}
				<div className="navi-content-wrap navi-bg bg-main-airplain">
					<div className="btn navi-close" onTouchStart={this.naviSwitch}>
						<div className="navi-close-icon icon-arrow-right"></div>
					</div>
				</div>


				{/* pannel 下半部 */}
				<div className="navi-content-wrap navi-option-wrap">

					<div className="navi-serch">
						<input placeholder="Enter Keyword" />
					</div>

					<ul>
						<li onTouchStart={this.naviClick} className="passenger"></li>
						<li onTouchStart={this.naviClick} className="airport"></li>
						<li onTouchStart={this.naviClick} className="flight-record"></li>
						<li onTouchStart={this.naviClick} className="crew-member"></li>
						<li onTouchStart={this.naviClick} className="aircraft"></li>
						<li onTouchStart={this.naviClick} className="personal-information"></li>
					</ul>

					<Footer></Footer>

				</div>
			</div>
		)
	}
})