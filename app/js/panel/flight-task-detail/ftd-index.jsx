import React from 'react'
import IScroll from 'iscroll'

import BtnCircle from '../../components/btn-circle'
import Title from './ftd-title'
import Leg from './ftd-leg'

import $ from 'jquery'
import Slick from 'slick-carousel'

const btn_back_pos = {right: '-60px', top: '28px', };
const btn_refresh_pos = {right: '-60px', top: '138px', };

const btn_checklist_pos = {right: '-60px', bottom: '580px' };
const btn_navi_pos = {right: '-60px', bottom: '470px' };
const btn_luggage_pos = {right: '-60px', bottom: '360px' };
const btn_relationship_pos = {right: '-60px', bottom: '250px' };
const btn_journal_pos = {right: '-60px', bottom: '140px' };
const btn_tick_pos = {right: '-60px', bottom: '30px' };

var ftdScroll;

export default React.createClass({


	getInitialState() {
		return {
			slickNum: 0	
		}
	},

	contextTypes: {
		naviSwitch: React.PropTypes.func,
		panelSwitch: React.PropTypes.func
	},

	btnBackClick: function() {
		this.context.panelSwitch();
	},

	btnNaviClick: function() {
		this.context.panelSwitch();
		this.context.naviSwitch();
	},

	btnRefreshClick: function() {

	},

	btnCheckListClick: function() {
		if(this.props.panelChange) this.props.panelChange('checkList');
	},

	


	componentDidMount() {

		$('.ftd-slick')
			.on('beforeChange', (event, slick, currentSlide, nextSlide) => {

				if(nextSlide == this.state.slickNum) return;
				else ftdScroll.scrollTo(0, 0, 700, IScroll.utils.ease.circular);

			})
			.on('afterChange', (event, slick, nextSlide) => {
				if(nextSlide == this.state.slickNum) return;
				else {
					this.setState({slickNum: nextSlide});
					this.contentUpdate();
					this.dotsPosUpdate(nextSlide);
				}
			})
			.slick({
				dots: true,
				speed: 550,
				adaptiveHeight: true,			
			});

		this.dotsPosUpdate(0);

		ftdScroll = new IScroll('.ftd-scroll', {preventDefault: false, mouseWheel: true });	
	},

	dotsPosUpdate: function(n) {
		var top = $('.leg-label[num='+n+']').height() + 40;
		$('ul.slick-dots').css('top', top);
	},

	contentUpdate: function() {
		
		ftdScroll.refresh();
	},




	render() {

		return (
			<div>
				

				<Title></Title>


				{/* btns */}
				<BtnCircle style={btn_back_pos} 
						   touchCallback={this.btnBackClick} 
						   color="red" 
						   btnType="icon-arrow-left"></BtnCircle>

				<BtnCircle style={btn_refresh_pos} 
						   touchCallback={this.btnRefreshClick}
						   color="red" 
						   btnType="icon-refresh" 
						   onRef={ref => (this.btnRela = ref)} 
						   hidden={false}></BtnCircle>

				<BtnCircle style={btn_checklist_pos} 
						   touchCallback={this.btnCheckListClick}
						   color="gray-3" 
						   btnType="icon-checklist" 
						   onRef={ref => (this.btnRela = ref)}
						   hidden={false}
						   child={<div className="checkList-number">13</div>}>
				</BtnCircle>

				<BtnCircle style={btn_navi_pos} 
						   touchCallback={this.btnNaviClick}
						   color="gray-2" 
						   btnType="icon-navi" 
						   onRef={ref => (this.btnRela = ref)} 
						   hidden={false}></BtnCircle>

				<BtnCircle style={btn_luggage_pos} 
						   color="gray-1" 
						   btnType="icon-luggage" 
						   onRef={ref => (this.btnRela = ref)} 
						   hidden={false}></BtnCircle>

				<BtnCircle style={btn_relationship_pos} 
						   color="gray-0" 
						   btnType="icon-peoples" 
						   onRef={ref => (this.btnRela = ref)} 
						   hidden={false}></BtnCircle>

				<BtnCircle style={btn_journal_pos} 
						   color="black" 
						   btnType="icon-journal" 
						   onRef={ref => (this.btnRela = ref)} 
						   hidden={false}></BtnCircle>

				<BtnCircle style={btn_tick_pos} 
						   color="red" 
						   btnType="icon-tick" 
						   onRef={ref => (this.btnRela = ref)} 
						   hidden={false}></BtnCircle>



				<div className="ftd-leg-wrap">
					<div className="ftd-scroll">
						<div className="iscroll-scroller full-width">

							<div className="ftd-slick">
								
								<Leg num="0" update_cb={this.contentUpdate}></Leg>
								<Leg num="1" update_cb={this.contentUpdate}></Leg>
								<Leg num="2" update_cb={this.contentUpdate}></Leg>

							</div>
						</div>
					</div>
				</div>


			</div>
		)
	}
});