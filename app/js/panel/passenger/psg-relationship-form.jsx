/* [library] */
import React from 'react'
import IScroll from 'iscroll'

/* [components] */
import SingleEditor from './components/relationship-single-editor'
import BtnBT from '../../components/btn-bt'

var scroller,
	passengerList = [],
	client = [{name: 'abcasd', gender: '男', }, {name: 'abc asf', gender: '女', }, {name: 'abc asdasdasd', gender: '男', }, {name: 'tasabc', gender: '男', }, {name: 'abasfasfc', gender: '男', }, {name: 'asdasabc', gender: '男', }, {name: 'abcaas', gender: '女', }, {name: 'abcasf', gender: '男', }, {name: 'abcasf', gender: '男', }, {name: 'abasdc', gender: '男', }, ]

export default React.createClass({

	componentDidMount() {
		scroller = new IScroll('.ps-block-scroll', {preventDefault: false, mouseWheel: true });
	},

	componentWillUnmount() {
		scroller.destroy();	
		scroller = null;
	},

	btnSave: function() {
		/*if(this.props.nextTouch) this.props.nextTouch('add-relationship-1');*/
	},

	render() {

		if(passengerList.length == 0 && client.length != 0) {
			
			for(var i in client) {
				passengerList.push(
					<li className="ps-block ud-l" key={'ps-c-'+i}>
						<SingleEditor name={client[i].name} gender={client[i].gender} num={i}></SingleEditor>
					</li>
				);
			}
		}

		return (
			<div className='fw'>
				
				<div className="ps-block-scroll ps-relationship-form">
					<div className="iscroll-scroller full-width">
						<ul className="passenger-ul">
							{passengerList}
						</ul>
					</div>
				</div>
				
				<div className="fw btn-bt-single shadow">
					<BtnBT touchCallBack={this.btnNext} type="Save"></BtnBT>
				</div>
			</div>
		)
	}
})