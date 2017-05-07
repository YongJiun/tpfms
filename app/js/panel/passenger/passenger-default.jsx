import React from 'react'
import IScroll from 'iscroll'
import PanelTitle from '../panel-title'
import PassergerSingle0 from './passenger-single-0'
import $ from 'jquery'

var passengerList = [];
var client = [{name: 'abcasd', gender: '男', }, {name: 'abc asf', gender: '女', }, {name: 'abc asdasdasd', gender: '男', }, {name: 'tasabc', gender: '男', }, {name: 'abasfasfc', gender: '男', }, {name: 'asdasabc', gender: '男', }, {name: 'abcaas', gender: '女', }, {name: 'abcasf', gender: '男', }, {name: 'abcasf', gender: '男', }, {name: 'abasdc', gender: '男', }, ]

export default React.createClass({

	getInitialState() {
		return {
			content: 'passenger',
		}	
	},

	componentDidMount() {
		var psScroll = new IScroll('.ps-default-scroll', {preventDefault: false, mouseWheel: true });

		var self = this;

		$('.passenger-default ul').on('click', '.personal', function() {
			var tar = $(this).attr('name').replace('ps-s-', '');
			self.personalTouch(tar);
		});
	},

	componentWillUnmount() {
		$('.passenger-default ul li.personal').off('click');	
	},

	personalTouch: function(tar) {

		var data = client[tar];
		console.log(data);
		if(this.props.personalTouch_cb) this.props.personalTouch_cb(data);
	},

	render() {

		if(passengerList.length == 0 && client.length != 0) {
			for(var i in client) {
				passengerList.push(
					<li name={"ps-s-"+i} className="ps-block ud-l personal" key={'pl-'+i}>
						<PassergerSingle0 
							name={client[i].name} 
							gender={client[i].gender} 
							num={i}>
						</PassergerSingle0>
					</li>
				);
			}
		}

		return (

			<div className='passenger-default passenger-f-w'>
				
				<PanelTitle step={this.props.step}></PanelTitle>

				<div className="ps-block-scroll ps-default-scroll">
					
					<div className="iscroll-scroller full-width">
						
						<ul className="passenger-ul">
							
							<li className="ps-block text-center">
								<input className="ps-search icon-magnifier" placeholder="Search" type="text" />
							</li>

							{passengerList}

						</ul>
					</div>
				</div>

			</div>
		)
	}
})