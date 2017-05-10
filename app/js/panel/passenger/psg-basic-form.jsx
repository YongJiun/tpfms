import React from 'react'

/* [libary] */
import IScroll from 'iscroll'
import $ from 'jquery'

/* [components] */
import PanelTitle from '../panel-title'
import BtnCircle from '../../components/btn-circle-red'
import PassengerInput from './passenger-form-input-0'
import BtnBT from '../../components/btn-bt'

var inputFormat = [
	{title: 'PassengerNo.', placeholder: '001', inputType: 'num'}, 
	{title: 'Traveller/Owner', placeholder: 'Owner', inputType: 'text'}, 
	{title: 'Title', placeholder: '王董', inputType: 'text'}, 
	{title: 'Birthday', placeholder: '1900/01/01', inputType: 'text'}, 
	{title: 'Height/Weight', placeholder: '180cm / 75kg', inputType: 'text'}, 
	{title: 'Phone', placeholder: '0912123123', inputType: 'tel'}, 
	{title: 'Email', placeholder: 'wang@gmail.com', inputType: 'email'}, 
	{title: 'Line ID', placeholder: 'Wangmin', inputType: 'text'}
	/*, { title: '', placeholder: '陳美惠', inputType: 'tel' }, { title: 'Phone', placeholder: '0912123123', inputType: 'tel' }, { title: 'Email', placeholder: 'chen@gmail.com', inputType: 'email' }, { title: 'Line ID', placeholder: 'chen_mei', inputType: 'text' },*/ 
];

export default React.createClass({

	getInitialState() {
		return {title: 'passenger-add-basic', }
	},

	componentDidMount() {

		var self = this;
		var psAddScroll = new IScroll('.ps-add-scroll', {preventDefault: false, mouseWheel: true });

		$('#camera-passport, #camera-visa').on('change', function() {
			self.filePreview(this, self);
		});
	},

	componentWillUnmount() {
		$('#camera-passport, #camera-visa').off('change');		
	},

	filePreview: function(input, self) {

		var tar = input.id.replace('camera-', '');

		if (input.files && input.files[0]) {
	     
	        var reader = new FileReader();
	        reader.onload = function (e) {
	        	if(self.props.stateChange) self.props.stateChange(tar, e.target.result);
	        }

	        reader.readAsDataURL(input.files[0]);
	    }
	},

	btnNext: function() {
		if(this.props.stateChange) this.props.stateChange('secretary');
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

			<div className='passenger-add-basic passenger-f-w'>
				
				<PanelTitle mode={this.props.mode} step={this.props.step}></PanelTitle>
				
				<div className="ps-block-scroll ps-add-scroll">
					
					<div className="iscroll-scroller full-width">

						<form>
						
							<ul className="passenger-ul">

								<li className="ps-block ud-l">
									<div className="ps-form camera-0 child-left">
										<div className="btn btn-camera ps icon-camera"></div>
										Add personal photo
									</div>
								</li>
								
								{inputList}

								<li className="ps-block ud-l">
									<div className="ps-form camera-1">
										<div>Passport</div>
										<div className="child-left ps-img-block">
											<input 
												id="camera-passport" 
												type="file" 
												className="display-no" />
											<label htmlFor="camera-passport" className="btn btn-camera icon-camera"><span></span></label>
										</div>
									</div>
									<img src={this.state.file} />
								</li>

								<li className="ps-block ud-l">
									<div className="ps-form camera-1">
										<div>VISA</div>
										<div className="child-left ps-img-block">
											<input 
												id="camera-visa" 
												type="file" 
												className="display-no" />
											<label htmlFor="camera-visa" className="btn btn-camera icon-camera"><span></span></label>
											</div>
									</div>
								</li>

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