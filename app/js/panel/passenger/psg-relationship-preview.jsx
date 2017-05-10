/* [library] */
import React from 'react'
import IScroll from 'iscroll'

/* [components] */
import RelationshipSinglePreview from './components/relationship-single-preview'
import BtnBT from '../../components/btn-bt'

var scroller, 
	passengerList = [],
	client = [
		{name: 'abcasd', gender: '男', }, 
		{name: 'abcaas', gender: '女', }, 
		{name: 'abcaas', gender: '女', }, 
		{name: 'abcasd', gender: '男', }, 
		{name: 'abcasd', gender: '男', }, 
		{name: 'abcasd', gender: '男', }, 
		{name: 'abcaas', gender: '女', }, 
		{name: 'abcaas', gender: '女', }, 
		{name: 'abcaas', gender: '女', }, 
		{name: 'abcasf', gender: '男', } ];


export default React.createClass({

	getInitialState() {return {} },
	
	componentDidMount() {
		scroller = new IScroll('.ps-block-scroll', {preventDefault: false, mouseWheel: true });
	},

	componentWillUnmount() {
		scroller.destroy();	
		scroller = null;
	},

	btnNext: function() {
		if(this.props.nextTouch) this.props.nextTouch('add-relationship-2');
	},

	render() {

		if(passengerList.length == 0 && client.length != 0) {
			
			for(var i in client) {
				passengerList.push(
					<li className="ps-block ud-l" key={'ps-c-'+i}>
						<RelationshipSinglePreview name={client[i].name} gender={client[i].gender} num={i}></RelationshipSinglePreview>
					</li>
				);
			}
		}

		return (


			<div className='fc'>
				<div className="ps-block-scroll">
					<div className="iscroll-scroller full-width">
						<ul className="passenger-ul">
							{passengerList}
						</ul>
					</div>
				</div>
			</div>
		)
	}
})