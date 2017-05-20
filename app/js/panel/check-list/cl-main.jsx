/* [library] */
import React from 'react'
import IScroll from 'iscroll'

/* [components] */
import State from '../../components/flight-record/fr-state'
import BtnCircle from '../../components/btn-circle'
import List from './cl-list'
import Leg from './cl-leg'
import gp from '../../global/parameter'

var scroller;

const btn_back_pos = {right: '-60px', top: '28px', };

export default React.createClass({

	contextTypes: {
		panel: React.PropTypes.object,
	},

	getInitialState() {
		return null;	
	},

	componentDidMount() {
		if(this.props.data) scroller = new IScroll('.cl-block-scroll', {preventDefault: false, mouseWheel: true });
	},

	componentDidUpdate(prevProps, prevState) {
		if(!this.scroller && this.props.data) scroller = new IScroll('.cl-block-scroll', {preventDefault: false, mouseWheel: true });
		if(this.scroller) scroller.refresh();
	},

	btnBackClick: function() {

		this.context.panel.switch('close');
	},

	render() {

		var data = this.props.data;

		if(!data) {
			return (
				<div className="comp-loading fc">
					<div className="cl-block-scroll">
						<div className="scroll-cl iscroll-scroller"></div>
					</div>
				</div>
			)
		}
		
		else {

			var state = gp.statusParam[data.Status];
			var checkList = data.check_list;
			var content = [];

			return (

				<div className='panel-checkList'>

					<BtnCircle touchCallback={this.btnBackClick} style={btn_back_pos} color="red" btnType="icon-arrow-left"></BtnCircle>
					
					<div className="cl-block cl-block-main">
						<div className="cl-form-left left">
							<State status={state} text={'after 11Days'}></State>
							<div className="cl-date">2017/03/23 03:30 L</div>
							<div className="cl-location">土耳其之旅</div>
							<div className="cl-text">一次知性之旅，讓大家體驗土耳其風情</div>
						</div>

						<div className="cl-form-right left">
							<div className="cl-num">13</div>
							<div className="cl-text">未完成項目</div>
						</div>
					</div>

					<div className="cl-block cl-block-scroll">
						<div className="scroll-cl iscroll-scroller">
							<ul className="cl-list">
								
								<List stage={'飛行前'} stageNum="0"></List>

								<Leg></Leg>

								<List stage={'飛行後'} stageNum="1"></List>
							</ul>		
						</div>
					</div>

				</div>
			)
		}
	}
})