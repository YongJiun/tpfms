import React from 'react'
import IScroll from 'iscroll'
import TaskState from '../pages/home/task-state'
import BtnCircle from '../components/btn-circle'
import CheckItem from './checkList-item'

var clScroll

const btn_back_pos = {
	right: '-60px',
	top: '12px',
};

export default React.createClass({

	componentDidMount() {
		clScroll = new IScroll('.cl-block-scroll', {preventDefault: false, mouseWheel: true });
	},

	btnBackClick: function() {		
		if(this.props.panelSwitch) this.props.panelSwitch();
	},

	render() {

		return (

			<div className='panel-checkList'>

				<BtnCircle touchCallback={this.btnBackClick} style={btn_back_pos} color="red" btnType="icon-arrow-left"></BtnCircle>
				
				<div className="cl-block cl-block-main">
					<div className="cl-form-left left">
						<TaskState taskState={this.props.taskState}></TaskState>
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
							<li className="cl-title">
								飛行前
							</li>
							
							<CheckItem itemNum="0" todo="確認飛機狀態" final="false"></CheckItem>
							<CheckItem itemNum="1" todo="確認天候狀態" final="false"></CheckItem>
							<CheckItem itemNum="2" todo="確認飛行內容" final="false"></CheckItem>
							<CheckItem itemNum="4" todo="確認飛行狀態" final="false"></CheckItem>
							<CheckItem itemNum="5" todo="與機長開會" final="false"></CheckItem>
							<CheckItem itemNum="3" todo="與座艙長開會" final="true"></CheckItem>

							<li className="cl-leg">
								<div className="cl-leg-badge">LEG 1</div>
								
								<div className="cl-leg-form">
									
									<div className="cl-leg-form-l takeoff">
										<div className="cl-form-airplain-wrap">
											<span className="cl-form-airplain sm left icon-takeoff-w"></span>
											<span className="cl-form-text">RCTP</span>
										</div>
										<div className="cl-form-text">台北/</div>
										<div className="cl-form-airport">桃園國際<br/>機場</div>
										<div className="cl-form-text cl-form-time">03/20 23:30 L</div>
									</div>

									<div className="cl-leg-form-s">
										<div className="cl-form-airplain md leg icon-leg-w"></div>
										<div className="cl-form-text leg">LEG 1</div>
									</div>

									<div className="cl-leg-form-l landing">
										<div className="cl-form-airplain-wrap">
											<span className="cl-form-airplain sm left icon-takeoff-w"></span>
											<span className="cl-form-text">RAJJ</span>
										</div>
										<div className="cl-form-text">東京/</div>
										<div className="cl-form-airport">Narita International Airport</div>
										<div className="cl-form-text cl-form-time">03/20 23:30 L</div>
									</div>

								</div>
							</li>

							<li className="cl-title">
								飛行後
							</li>
							
							<CheckItem itemNum="6" todo="檢查飛機狀態" final="false"></CheckItem>
							<CheckItem itemNum="7" todo="確認機組人員狀態" final="false"></CheckItem>
							<CheckItem itemNum="8" todo="確認當地狀態" final="false"></CheckItem>
							<CheckItem itemNum="9" todo="與地勤人員確認基本事項" final="false"></CheckItem>
							<CheckItem itemNum="10" todo="與維修人員確認維修事項" final="false"></CheckItem>
							<CheckItem itemNum="11" todo="確認無特殊狀況" final="false"></CheckItem>
							<CheckItem itemNum="12" todo="" final="true"></CheckItem>
						</ul>		
					</div>
				</div>

			</div>
		)
	}
})