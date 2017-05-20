/* [library] */
import React from 'react'
import IScroll from 'iscroll'
import Slick from 'slick-carousel'
import $ from 'jquery'

/* [components] */
import BtnCircle from '../../components/btn-circle'
import Title from './ftd-title'
import Leg from './ftd-leg'
import PanelTitle from '../panel-title'
import PsgList from '../passenger/psg-list'
import gp from '../../global/parameter'

const btn_back_pos = gp.getBtnPos('top', 0);
const btn_edit_pos = gp.getBtnPos('top', 1);
const btn_refresh_pos = gp.getBtnPos('top', 2);
const btn_checklist_pos = gp.getBtnPos('bottom', 4);
const btn_navi_pos = gp.getBtnPos('bottom', 3);
const btn_luggage_pos = gp.getBtnPos('bottom', 2);
const btn_crewMember_pos = gp.getBtnPos('bottom', 1);
const btn_journal_pos = gp.getBtnPos('bottom', 0);
const btn_tick_pos = gp.getBtnPos('bottom', 0);

var scroller, legs = [];

export default React.createClass({

	contextTypes: {
		navi: React.PropTypes.object,
		panel: React.PropTypes.object,
		ftdChange: React.PropTypes.func,
	},

	getInitialState() {

		return {
			current: 'index',
			slickNum: 0,
			tripNo: this.props.trip.TripNo,
			legList: '',
			psgListIn: '',
			btnsWrapFade: '',
		}
	},

	componentWillMount() {
		this.getLegList();
	},

	componentDidMount() {
		scroller = new IScroll('.ftd-scroll', {preventDefault: false, mouseWheel: true });
	},

	componentDidUpdate(prevProps, prevState) {

		if(this.props.trip.TripNo != this.state.tripNo) {
			$('.ftd-slick').off('beforeChange').off('afterChange').slick('unslick');
			this.setState({tripNo: this.props.trip.TripNo });
			this.getLegList();
		}
	},

	seatCallback: function(action, seatNum) {

		switch(action) {
			case 'add':
				this.setState({
					current: 'addPsg',
					psgListIn: 'in',
					btnsWrapFade: 'fade-out disappear',
				});
				break;
		}
	},

	getLegList: function() {

		legs = [];

		var data = this.props.trip.leg_list;

		for(var i in data) {

			legs[i] = (
				<Leg key={'ftd-index-leg-' + this.props.trip.TripNo + i}
					 legNum={i}
					 data={data[i]}
					 updateCallback={this.contentUpdate}
					 seatCallback={this.seatCallback}>
				</Leg>
			);
		}
		setTimeout(() => {
			this.childrenInit();
			scroller.refresh();
			scroller.scrollTo(0, 0, 0);
		}, 0);
	},

	childrenInit: function() {

		var self = this;
		
		$('.ftd-slick')
			.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
				if(nextSlide == self.state.slickNum) return;
				else {
					scroller.scrollTo(0, 0, 700, IScroll.utils.ease.circular);
					self.dotsPosUpdate(nextSlide);
				}
			})
			.on('afterChange', (event, slick, nextSlide) => {
				if(nextSlide == self.state.slickNum) return;
				else {
					self.setState({slickNum: nextSlide});
					self.contentUpdate();
					
				}
			})
			.slick({dots: true, speed: 400, adaptiveHeight: true, });

		this.dotsPosUpdate(0);
	},

	dotsPosUpdate: function(n) {
		var top = $('.leg-label[num='+n+']').height() + 40;
		$('.ftd-slick .slick-dots').css('top', top);
	},

	contentUpdate: function(num) {
		$('.ftd-slick').slick('animateHeight');
		setTimeout(() => {
			scroller.refresh();
		}, 400);
	},

	btnBackClick: function() {
		switch(this.state.current) {
			case 'index':
				this.context.panel.switch('close');
				break;
			case 'addPsg':
				this.setState({btnsWrapFade: '', psgListIn: '', current: 'index'});
				break;
			default:
				this.context.panel.switch('close');
				break
		}
	},

	btnCrewMemberClick: function() {
		this.context.ftdChange('crew-member');;
	},

	btnEditClick: function() {
		alert('功能即將開放');
	},

	btnNaviClick: function() {
		this.context.panel.switch('close');
		this.context.navi.switch();
	},

	btnRefreshClick: function() {

	},

	btnCheckListClick: function() {
		this.context.panel.change('check-list');
	},

	render() {

		return (

			<div>
			
				<div className="ftd-leg-wrap">
					<Title data={this.props.trip}></Title>
					<div className="ftd-scroll bgc-seat">
						<div className="iscroll-scroller fw">
							<div className="ftd-slick">
								{legs}
							</div>
						</div>
					</div>
				</div>





				{/* [新增passenger清單] */}
				<div className={"fc bgc-gray-4 cover panel bottom " + this.state.psgListIn}>
					<PanelTitle mode="add" step="passenger"></PanelTitle>
					<PsgList selectCallback={this.addPsg}></PsgList>
				</div>





				{/* btns */}
				
				<BtnCircle style={btn_back_pos} 
						   touchCallback={this.btnBackClick} 
						   color="red" 
						   btnType="icon-arrow-left"></BtnCircle>


				<div className="ts-05">

					<BtnCircle style={btn_edit_pos} 
						   touchCallback={this.btnEditClick}
						   color="red" 
						   btnType="icon-edit" 
						   onRef={ref => (this.btnRela = ref)} 
						   hidden={false}></BtnCircle>

					{/*<BtnCircle style={btn_refresh_pos} 
					   touchCallback={this.btnRefreshClick}
					   color="red" 
					   btnType="icon-refresh" 
					   onRef={ref => (this.btnRela = ref)} 
					   hidden={false}></BtnCircle>*/}
				</div>



				<div className={'ts-05 ' + this.state.btnsWrapFade}>

					<BtnCircle style={btn_checklist_pos} 
							   touchCallback={this.btnCheckListClick}
							   color="gray-3" 
							   btnType="icon-checklist" 
							   onRef={ref => (this.btnRela = ref)}
							   hidden={false}
							   child={<div className="checkList-number">13</div>}></BtnCircle>

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

					<BtnCircle style={btn_crewMember_pos} 
							   touchCallback={this.btnCrewMemberClick}
							   color="gray-0" 
							   btnType="icon-peoples" 
							   onRef={ref => (this.btnRela = ref)} 
							   hidden={false}></BtnCircle>

					<BtnCircle style={btn_journal_pos} 
							   color="black" 
							   btnType="icon-journal" 
							   onRef={ref => (this.btnRela = ref)} 
							   hidden={false}></BtnCircle>

					{/*<BtnCircle style={btn_tick_pos} 
						   color="red" 
						   btnType="icon-tick" 
						   onRef={ref => (this.btnRela = ref)} 
						   hidden={false}></BtnCircle>*/}
				</div>
			</div>
		)
	}
});