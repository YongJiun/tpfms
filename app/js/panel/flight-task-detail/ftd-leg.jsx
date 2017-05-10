/* [library] */
import React from 'react'
import $ from 'jquery'

/* [compoenets] */
import Seats from '../../components/seats/seats-main'


var seats = [],
	seatFormat_0 = [{
		style_add: {'left': '155px', 'top': '110px', }, }, {
		style_add: {'left': '430px', 'top': '110px', }, }, {
		style_add: {'left': '155px', 'top': '288px', }, }, {
		style_add: {'left': '430px', 'top': '288px', }, }, {
		style_add: {'left': '155px', 'top': '487px', }, }, {
		style_add: {'left': '155px', 'top': '585px', }, }, {
		style_add: {'left': '155px', 'top': '680px', }, }, {
		style_add: {'left': '430px', 'top': '487px', }, }, {
		style_add: {'left': '430px', 'top': '640px', },}
	];

var hnt_h = 0;


export default React.createClass({

	getInitialState() {
		return {
			hntState: 'close',
		};
	},

	componentDidMount() {
		
	},

	hntSwitch: function(e) {
		var num = $(e.target).attr('num');
		if(this.state.hntState == 'close') this.setState({hntState: 'open'});
		else this.setState({hntState: 'close'});

		setTimeout((e) => {
			var height = $('.ftd-leg[num='+num+']').height();
			$('.slick-list').height(height);
			if(this.props.update_cb) this.props.update_cb('h');
		}, 500);
	},

	seatAdd: function(e) {
		console.log($(e.target).attr('num'));
	},

	render() {

		if(seats.length == 0) {
			for(var i = 0; i < seatFormat_0.length; i++) {

				seats[i] = (
					<div is
						 key={'seat-'+i}
						 num={i}
						 style={seatFormat_0[i].style_add} 
						 onTouchStart={this.seatAdd}
						 class="btn-seat-add">
					</div>
				)
			}
		}

		return (
			<div is class="ftd-leg" num={this.props.num}>
				





				{/*
				 * LEG [top]
				 */}
				<div is class="leg-box leg-label main" num={this.props.num}>
					<div className="leg-spend-time">
						<div>01hr 20min B</div>
						<div>02hr 20min F</div>
					</div>
					<div className="leg-info">
						<div className="leg-step">
							<div className="leg-code leg-txt-sm fuel">
								<i className="icon-airplain-takeoff-w-bl"></i>
								RCTP
							</div>
							<div className="leg-txt-sm">台北 /</div>
							<div className="leg-txt-lg">桃園國際<br/>機場</div>
							<div className="leg-txt-xs leg-tiem">
								<i className="icon-clock"></i>
								03/20 23:30L
							</div>
						</div>

						<div className="leg-serial">
							<i className="icon-leg-airplain"></i><br/>
							LEG 01
						</div>

						<div className="leg-step">
							<div className="leg-code leg-txt-sm">
								<i className="icon-airplain-landing-w-bl"></i>
								RTJJ
								<i className="icon-fuel"></i>
							</div>
							<div className="leg-txt-sm icon-clock">東京 /</div>
							<div className="leg-txt-lg">Narita International Airport</div>
							<div className="leg-txt-xs leg-tiem">
								<i className="icon-clock"></i>
								03/20 23:30L
							</div>
						</div>
					</div>
				</div>






				{/*
				 * LEG [Handler & Transportation]
				 */}
				<div className={"leg-box leg-hnt " + this.state.hntState}>
					
					<div is num={this.props.num} class="hnt-title" onClick={this.hntSwitch}> 
						<span is num={this.props.num}>Handler & Transportation</span>
						<div is num={this.props.num} class={"hnt-switcher " + this.state.hntState}></div>
					</div>

					<div className="hnt-content">

						<div className="hnt-content-box">
							<div className="hnt-txt-md">Dedivarture</div>
							<div className="hnt-txt-sm">
								<i className="icon-airplain"></i>
								Eva Sky Jet Center
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-handler"></i>
								Kevin Chen
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-phone"></i>
								8876-6543
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-car"></i>
								在台北車站集合，一起搭車前往機場。
							</div>
						</div>

						<div className="hnt-content-box">
							<div className="hnt-txt-md">Arrival</div>
							<div className="hnt-txt-sm">
								<i className="icon-airplain"></i>
								Eva Sky Jet Center
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-handler"></i>
								Kevin Chen
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-phone"></i>
								8876-6543
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-car"></i>
								於M3門統一離開機場
							</div>
						</div>
					</div>
				</div>

				
				{/*
				 * LEG [bottom]
				 */}
				<div className="leg-box leg-seat">
					<Seats format="0" seatsData={''}></Seats>
				</div>

			</div>
		)
	}
});