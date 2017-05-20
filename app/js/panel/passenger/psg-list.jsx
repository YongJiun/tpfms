/* [lib] */
import React from 'react'
import IScroll from 'iscroll'
import $ from 'jquery'

/* [comp] */
import PanelTitle from '../panel-title'
import PassergerSingle2 from './passenger-single-2'
import BtnBT from '../../components/btn-bt'
import gp from '../../global/parameter'

var scroller;

export default React.createClass({

	contextTypes: {
		Token: React.PropTypes.string,
	},

	componentWillMount() {

		var self = this;

		$.ajax({
			url: gp.api_url + 'passenger/getPassengerList',
			type: 'GET',
			dataType: 'JSON',
			headers: {"Content-Type": "application/json", "Authorization": "Bearer " + this.context.Token, },
		})
		.done(function(response) {

			if(response.status_code != 0) {
				console.log(response);
				return;
			}
			else self.setState({passengerList: response.data.passenger_info });
		})
		.fail(function(response) {
			console.log("error", response);
		});
	},

	getInitialState() {
		return {
			passengerList: [],
			passengerComp: [],
			search: '',
		}	
	},

	componentDidMount() {
		scroller = new IScroll('.ps-block-scroll', {preventDefault: false, mouseWheel: true });
	},

	componentWillUnmount() {
		scroller.destroy();	
		scroller = null;
	},

	btnNext: function() {
		if(this.props.nextTouch) this.props.nextTouch('add-relationship-1');
	},

	search: function(e) {
		this.setState({search: e.target.value });
	},

	render() {


		var passenger = gp.filter(this.state.passengerList, this.state.search),
			content = [];

		for(var i in passenger) {			
			content[i] = (
				<li className="ps-block ud-l" key={'ps-c-'+i}>
					<PassergerSingle2 data={passenger[i]} num={i}></PassergerSingle2>
				</li>
			);
		}

		return (

			<div className='fw'>
				

				<div className="ps-block-scroll ps-relationship-list">
					<div className="iscroll-scroller full-width">
						<ul className="passenger-ul">
							<li className="ps-block text-center">
								<input className="ps-search icon-magnifier" placeholder="Search" type="text" onChange={this.search} />
							</li>
							{content}
						</ul>
					</div>
				</div>


				<div className="fw btn-bt-single shadow">
					<BtnBT touchCallBack={this.btnNext} type="Add"></BtnBT>
				</div>

			</div>
		)
	}
})