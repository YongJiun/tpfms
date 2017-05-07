import React from 'react'
import IScroll from 'iscroll'
import PanelTitle from '../panel-title'
import BtnCircle from '../../components/btn-circle-red'
import PassengerInput from './passenger-form-input-0'
import BtnBT from '../../components/btn-bt'

var inputFormat = [
	{
		title: 'Secretary Contact',
		placeholder: '陳美惠',
		inputType: 'tel'
	}, {
		title: 'Phone',
		placeholder: '0912123123',
		inputType: 'tel'
	}, {
		title: 'Email',
		placeholder: 'chen@gmail.com',
		inputType: 'email'
	}, {
		title: 'Line ID',
		placeholder: 'chen_mei',
		inputType: 'text'
	}, {
		title: 'Emergency Contact',
		placeholder: '陳美惠',
		inputType: 'text'
	}, {
		title: 'Phone',
		placeholder: '0912123123',
		inputType: 'tel'
	}, {
		title: 'Relationship',
		placeholder: 'Mother',
		inputType: 'text'
	},
];


export default React.createClass({

	getInitialState() {
		return {
			title: 'passenger-secretary',
		}	
	},

	componentDidMount() {
		var psSecScroll = new IScroll('.ps-sec-scroll', {preventDefault: false });
	},

	btnNext: function() {
		if(this.props.nextTouch) this.props.nextTouch('add-preferences');
	},

	render() {

		var inputList = [];
		
		for(var i in inputFormat) {

			inputList.push(
				<li className="ps-block ud-l"
					key={"input-list-"+i}>
					<PassengerInput title={inputFormat[i].title} placeholder={inputFormat[i].placeholder} inputType={inputFormat[i].inputType}></PassengerInput>
				</li>
			);
		}

		return (

			<div className='passenger-secretary passenger-f-w'>
				
				<PanelTitle mode={this.props.mode} step={this.props.step}></PanelTitle>
				
				<div className="ps-block-scroll ps-sec-scroll">
					
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