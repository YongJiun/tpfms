import React from 'react'
import PanelTitle from '../panel-title'
import PassengerInput from './passenger-form-input-0'
import BtnBT from '../../components/btn-bt'

export default React.createClass({

	getInitialState() {
		return {
			title: 'passenger-add-visa',
			visible: 'display-no'
		}	
	},

	componentDidMount() {
		this.props.onRef(this)
	},
  	
	componentWillUnmount() {
		this.props.onRef(undefined)
	},

	srcUpdate: function(src) {

		this.setState({
			imgSrc: src
		});
	},

	fadeIn: function() {
		this.setState({visible: ''});
	},

	fadeOut: function() {
		setTimeout(function(self) {
			self.setState({visible: 'display-no'});
		}, 500, this);
	},

	render() {

		return (
			<div className={'passenger-add-visa ' + this.state.visible}>

				<PanelTitle mode={this.props.mode} step={this.props.step}></PanelTitle>

				<div className="ps-block-scroll ps-add-scroll">
					
					<div className="iscroll-scroller full-width">

						<form>
							
							<ul className="passenger-ul">
							
								<li className="ps-block">
									
									<div className="ps-form camera-1">
										Visa
									</div>

									<div className="ps-form camera-1">
										<img src={this.state.imgSrc} style={{width: '100%'}}/>
									</div>

								</li>

								<li className="ps-block ud-l">
									<PassengerInput title='Date of expiry' placeholder="ex.11/10/2019" inputType="text"></PassengerInput>
								</li>

								<li className="ps-block ud-l">
									<PassengerInput title="Visa No." placeholder="ex.27483507" inputType="text"></PassengerInput>
								</li>

								<li className="ps-block">
									<div className="btn-bt-single">
										<BtnBT touchCallBack={this.btnNext} type="Save"></BtnBT>
									</div>
								</li>

							</ul>

						</form>

					</div>

				</div>
				
			</div>
		)
	}
});