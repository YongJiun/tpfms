import React from 'react'

import PanelTitle from '../panel-title'
import BtnCircle from '../../components/btn-circle-red'
import PassengerInput from './passenger-form-input-0'
import BtnBT from '../../components/btn-bt'

var inputFormat = [
	{title: 'Food', placeholder: '素食', inputType: 'text'}, 
	{title: 'Flight', placeholder: '靠窗', inputType: 'text'}, 
	{title: 'Hotel', placeholder: '喜歡睡雙人床', inputType: 'text'}, 
	{title: 'Transportation', placeholder: '騎腳踏車', inputType: 'text'}, 
	{title: 'Entertainment', placeholder: '看報紙', inputType: 'text'}
];

export default React.createClass({

	getInitialState() {
		return {
			title: 'passenger-preferences',
		}	
	},

	componentDidMount() {
		
	},

	btnNext: function() {
		if(this.props.nextTouch) this.props.nextTouch('add-relationship-0');
	},

	render() {

		var inputList = [];
		
		for(var i in inputFormat) {

			inputList.push(
				<li className="ps-block ud-l r-l"
					key={"input-list-"+i}>
					<PassengerInput title={inputFormat[i].title} placeholder={inputFormat[i].placeholder} inputType={inputFormat[i].inputType}></PassengerInput>
				</li>
			);
		}

		return (

			<div className='passenger-preferences passenger-f-w'>
				
				<PanelTitle mode={this.props.mode} step={this.props.step}></PanelTitle>
				
				<div className="ps-block-scroll ps-pre-scroll">
					
					<div className="iscroll-scroller full-width">

						<form>
							<ul>

								{inputList}

								<li className="ps-block">
									<div className="btn-bt-single">
										<BtnBT touchCallBack={this.btnNext} type="Next"></BtnBT>
									</div>
								</li>

							</ul>
						</form>
					</div>
				</div>

			</div>
		)
	}
})