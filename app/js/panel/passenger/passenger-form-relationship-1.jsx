import React from 'react'
import IScroll from 'iscroll'
import PanelTitle from '../panel-title'
import PassergerSingle3 from './passenger-single-3'
import BtnBT from '../../components/btn-bt'

var passengerList = [];
var client = [{name: 'abcasd', gender: '男', }, {name: 'abcaas', gender: '女', }, {name: 'abcasf', gender: '男', } ];

export default React.createClass({

	getInitialState() {
		return {
			content: 'passenger-relationship',
		}	
	},

	componentDidMount() {
		var psRela_1_Scroll = new IScroll('.ps-relationship1-scroll', {preventDefault: false, mouseWheel: true });
	},

	btnNext: function() {
		if(this.props.nextTouch) this.props.nextTouch('add-relationship-2');
	},

	render() {

		if(passengerList.length == 0 && client.length != 0) {
			
			for(var i in client) {
				passengerList.push(
					<li className="ps-block ud-l" key={'ps-c-'+i}>
						<PassergerSingle3 name={client[i].name} gender={client[i].gender} num={i}></PassergerSingle3>
					</li>
				);
			}
		}

		return (

			<div className='passenger-relationship-1 passenger-f-w'>
				
				<PanelTitle mode={this.props.mode} step={this.props.step}></PanelTitle>

				<div className="ps-block-scroll ps-relationship1-scroll">
					
					<div className="iscroll-scroller full-width">
						
						<ul className="passenger-ul">
							
							{passengerList}

							<li className="ps-block">
								<div className="btn-bt-single">
									<BtnBT touchCallBack={this.btnNext} type="Complete"></BtnBT>
								</div>
							</li>

						</ul>
					</div>
				</div>

			</div>
		)
	}
})