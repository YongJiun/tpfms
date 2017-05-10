import React from 'react'

/* [lib] */
import $ from 'jquery'
import IScroll from 'iscroll'

/* [components] */
import BtnBT from '../../components/btn-bt'
import PanelTitle from '../panel-title'
import BtnCircle from '../../components/btn-circle'
import PassengerInput from './passenger-form-input-0'
import PassengerFormBlock from './passenger-form-block-0'
import FlightRecord from '../../components/flight-record/fr-main'

var psPerScroll = '';
var inputList = [];

export default React.createClass({

	getInitialState() {
		return {
			title: 'passenger-personal-detail',
			visible: 'display-no'
		}	
	},

	contextTypes: {
		user: React.PropTypes.object,
		panelState: React.PropTypes.object
	},

	componentWillMount() {
		console.log('personal-defailt.jsx', this.context);	
		inputList = [];
		inputList = this.getListContent();
	},

	getListContent() {

		var lc = [], title = '', id = '', iconClass = '';

		for(var i in inputFormat) {

			title = inputFormat[i].title;

			if(title == 'Passport' || title == 'VISA' || title == 'Secretary Contact' || title == 'Emergency Contact' || title == 'Flight Record' || title == 'Preferences' || title == 'Relationship') {

				id = (title.toLowerCase().replace(' ', '-'));
				iconClass = 'icon-' + id + '-b-w';
				
				var titleText = title.toLowerCase();
				if(title == 'VISA') {
					title = '';
				}

				lc.push(
					<li id={"detail-title-"+id}
						className="ps-block ud-l"
						key={"input-list-"+i}>
						
						<div 
							className={"ps-form-title full-width " + id + ' ' + iconClass}>
							{title}
						</div>
					</li>
				)
			}
			else {
				lc.push(
					<li 
						className="ps-block ud-l"
						key={"input-list-"+i}>
						
						<PassengerFormBlock 
							titleClass=""
							title={inputFormat[i].title} 
							placeholder={inputFormat[i].placeholder} 
							inputType={inputFormat[i].inputType}>
						</PassengerFormBlock>

					</li>
				);
			}	
		}

		return lc;
	},

	componentDidMount() {
		if(this.props.onRef) this.props.onRef(this);	
	},
  	
	componentWillUnmount() {
		if(this.props.onRef) this.props.onRef(undefined);
	},

	fadeIn: function() {
		this.setState({visible: ''});
		setTimeout(function() {
			psPerScroll = new IScroll('.ps-p-info-scroll', {preventDefault: false, mouseWheel: true });
		}, 200);
	},

	fadeOut: function() {
		setTimeout(function(self) {
			self.setState({visible: 'display-no'});
			psPerScroll.destroy();
			psPerScroll = null;
		}, 500, this);
	},

	btnNext: function() {
		if(this.props.stateChange) this.props.stateChange('secretary');
	},

	scrollTo: function(tar) {
		
		var h = $('#detail-title-' + tar).position().top;
		psPerScroll.scrollTo(0, -h, 1000, IScroll.utils.ease.back);
	},

	render() {

		return (

			<div className={'passenger-personal-detail passenger-f-w ' + this.state.visible}>
				
				<PanelTitle titleContent={this.state.title}></PanelTitle>
				
				<div className="ps-block-scroll ps-p-info-scroll">
					<div className="iscroll-scroller full-width">
						<form>
							<ul className="passenger-ul">
								
								{inputList}

								<FlightRecord frState="edit" size="xs"></FlightRecord>
								<FlightRecord frState="edit" size="xs"></FlightRecord>
								<FlightRecord frState="edit" size="xs"></FlightRecord>
								<FlightRecord frState="main" size="xs"></FlightRecord>
							</ul>
						</form>
					</div>
				</div>
			</div>
		)
	}
})

var inputFormat = [
	{title: 'PassengerNo.', placeholder: '001', inputType: 'num'}, 
	{title: 'Traveller/Owner', placeholder: 'Owner', inputType: 'text'}, 
	{title: 'Title', placeholder: '王董', inputType: 'text'}, 
	{title: 'Birthday', placeholder: '1900/01/01', inputType: 'text'}, 
	{title: 'Height/Weight', placeholder: '180cm / 75kg', inputType: 'text'}, 
	{title: 'Phone', placeholder: '0912123123', inputType: 'tel'}, 
	{title: 'Email', placeholder: 'wang@gmail.com', inputType: 'email'}, 
	{title: 'Line ID', placeholder: 'Wangmin', inputType: 'text'}, 
	
	{title: 'Passport'}, 
	{title: 'VISA'},

	{title: 'Secretary Contact'}, 
	{title: 'Secretary', placeholder: '陳美惠', inputType: 'tel' }, 
	{title: 'Phone', placeholder: '0912123123', inputType: 'tel' }, 
	{title: 'Email', placeholder: 'chen@gmail.com', inputType: 'email' }, 
	
	{title: 'Emergency Contact'},
	{title: 'name', placeholder: '陳美惠', inputType: 'text' },

	{title: 'Preferences'},

	{title: 'Relationship'},

	{title: 'Flight Record'},
];