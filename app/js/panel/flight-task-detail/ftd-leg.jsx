/* [library] */
import React from 'react'
import $ from 'jquery'

/* [compoenets] */
import Seats from '../../components/seats/seats-main'

var hnt_h = 0;
var iconFuel = <i className="icon-fuel"></i>;

export default React.createClass({

	getInitialState() {
		return {
			hntState: 'close',
			timeFormat: 'L',
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
			if(this.props.updateCallback) this.props.updateCallback(num);
		}, 500);
	},

	seatAdd: function(e) {
		console.log($(e.target).attr('num'));
	},

	timeSwitch: function() {
		if(this.state.timeFormat == 'L') this.setState({timeFormat: 'Z' });
		else this.setState({timeFormat: 'L' });
	},

	render() {

		var leg = this.props.data;

		return (

			<div is class="ftd-leg" leg-num={this.props.legNum}>
				

				{/* [LEG [top]] */}
				<div is class="leg-box leg-label main" num={this.props.legNum}>
					<div className="leg-spend-time">
						<div>{leg.BlockTime}</div>
						<div>{leg.FlightTime}</div>
					</div>


					<div className="leg-info">

						<div className="fw of-h">
							<div className="hw left">
								<div className="leg-code leg-txt-sm fuel">
									<i className="icon-airplain-takeoff-w-bl"></i>
									{leg.dep.DepICAO}
									{leg.dep.DepFuelStop == "0" ? '' : iconFuel}
								</div>
							</div>
							<div className="hw left">
								<div className="leg-code leg-txt-sm">
									<i className="icon-airplain-landing-w-bl"></i>
									{leg.arr.ArrICAO}
									{leg.arr.ArrFuelStop == "0" ? '' : iconFuel}
								</div>
							</div>
						</div>


						<div className="fw of-h">
							<div className="hw left">
								<div className="leg-txt-sm">{leg.dep.airport_detail[0].City} /</div>
							</div>
							<div className="hw left">
								<div className="leg-txt-sm">{leg.arr.airport_detail[0].City} /</div>
							</div>
						</div>

						<div className="fw of-h">
							<div className="hw left">
								<div className="leg-txt-lg">{leg.dep.airport_detail[0].NameCN}</div>
							</div>
							<div className="hw left">
								<div className="leg-txt-lg">{leg.arr.airport_detail[0].NameCN}</div>
							</div>
						</div>

						<div className="fw of-h" onTouchStart={this.timeSwitch}>
							<div className="hw left">
								<div className="leg-txt-xs leg-time">
									<i className="icon-clock"></i>
									{leg.dep['DepDateTime' + this.state.timeFormat]}
								</div>
							</div>
							<div className="hw left">
								<div className="leg-txt-xs leg-time">
									<i className="icon-clock"></i>
									{leg.arr['ArrDateTime' + this.state.timeFormat]}
								</div>
							</div>
						</div>


						<div className="leg-serial">
							<i className="icon-leg-airplain"></i><br/>
							{"LEG " + (parseInt(this.props.legNum) + 1)}
						</div>
					</div>
				</div>






				{/* [LEG [Handler & Transportation]] */}
				<div className={"leg-box leg-hnt " + this.state.hntState}>
					
					<div is num={this.props.legNum} class="hnt-title" onClick={this.hntSwitch}> 
						<span is num={this.props.legNum}>Handler & Transportation</span>
						<div is num={this.props.legNum} class={"hnt-switcher " + this.state.hntState}></div>
					</div>

					<div className="hnt-content">

						<div className="hnt-content-box">
							<div className="hnt-txt-md">Departure</div>
							<div className="hnt-txt-sm">
								<i className="icon-airplain-takeoff-w-bl"></i>
								{leg.dep.DepHandler}
								{/*Eva Sky Jet Center*/}
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-handler"></i>
								{leg.dep.DepReceptionist}
								{/*Kevin Chen*/}
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-phone"></i>
								{leg.dep.DepPhone}
								{/*8876-6543*/}
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-car"></i>
								{leg.dep.DepTransportation}
								{/*在台北車站集合，一起搭車前往機場。*/}
							</div>
						</div>

						<div className="hnt-content-box">
							<div className="hnt-txt-md">Arrival</div>
							<div className="hnt-txt-sm">
								<i className="icon-airplain-landing-w-bl"></i>
								{leg.arr.ArrHandler}
								{/*Eva Sky Jet Center*/}
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-handler"></i>
								{leg.arr.ArrReceptionist}
								{/*Kevin Chen*/}
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-phone"></i>
								{leg.arr.ArrPhone}
								{/*8876-6543*/}
							</div>
							<div className="hnt-txt-sm">
								<i className="icon-car"></i>
								{leg.arr.ArrTransportation}
								{/*於M3門統一離開機場*/}
							</div>
						</div>
					</div>
				</div>
				
				{/* [LEG [bottom]] */}
				<div className="leg-box leg-seat">
					<Seats format="0" relationship="0" legNum={this.props.legNum} data={this.props.data} seatCallback={this.props.seatCallback}></Seats>
				</div>

			</div>
		)
	}
});