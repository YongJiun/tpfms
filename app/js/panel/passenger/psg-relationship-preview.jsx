/* [library] */
import React from 'react'
import IScroll from 'iscroll'

/* [components] */
import RelationPreview from './components/relationship-single-preview'
import BtnBT from '../../components/btn-bt'

var scroller, 
	passengerList = [],
	relationContent = [],
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

		var data = this.props.passenger.relationship;

		for(var i in data) {
			
			relationContent[i] = (
				
				<li className="ps-block ud-l" key={'psg-relation-preview-'+i}>
					<RelationPreview relationPerson={data[i]}></RelationPreview>
				</li>
			);
		}

		return (


			<div className='fc'>
				<div className="ps-block-scroll">
					<div className="iscroll-scroller full-width">
						<ul className="passenger-ul">
							{relationContent}
						</ul>
					</div>
				</div>
			</div>
		)
	}
})