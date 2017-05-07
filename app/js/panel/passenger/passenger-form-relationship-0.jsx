import React from 'react'
import IScroll from 'iscroll'
import PanelTitle from '../panel-title'
import PassergerSingle2 from './passenger-single-2'
import BtnBT from '../../components/btn-bt'

var passengerList = [];
var client = [{name: 'abcasd', gender: '男', }, {name: 'abc asf', gender: '女', }, {name: 'abc asdasdasd', gender: '男', }, {name: 'tasabc', gender: '男', }, {name: 'abasfasfc', gender: '男', }, {name: 'asdasabc', gender: '男', }, {name: 'abcaas', gender: '女', }, {name: 'abcasf', gender: '男', }, {name: 'abcasf', gender: '男', }, {name: 'abasdc', gender: '男', }, ]

export default React.createClass({

	getInitialState() {
		return {
			content: 'passenger-relationship',
		}	
	},

	componentDidMount() {
		var psRela_0_Scroll = new IScroll('.ps-relationship0-scroll', {preventDefault: false, mouseWheel: true });
	},

	btnNext: function() {
		if(this.props.nextTouch) this.props.nextTouch('add-relationship-1');
	},

	render() {

		if(passengerList.length == 0 && client.length != 0) {
			
			for(var i in client) {
				
				passengerList.push(
					<li className="ps-block ud-l" key={'ps-c-'+i}>
						<PassergerSingle2 name={client[i].name} gender={client[i].gender} num={i}></PassergerSingle2>
					</li>
				);
			}
		}

		return (

			<div className='passenger-relationship-0 passenger-f-w'>
				
				<PanelTitle mode={this.props.mode} step={this.props.step}></PanelTitle>

				<div className="ps-block-scroll ps-relationship0-scroll">
					
					<div className="iscroll-scroller full-width">
						
						<ul className="passenger-ul">
							
							<li className="ps-block text-center">
								<input className="ps-search icon-magnifier" placeholder="Search" type="text" />
							</li>

							{passengerList}

						</ul>
					</div>
				</div>

				<div className="full-width btn-bt-single">
					<BtnBT touchCallBack={this.btnNext} type="Next"></BtnBT>
				</div>

			</div>
		)
	}
})