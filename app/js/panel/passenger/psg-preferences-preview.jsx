import React from 'react'

import BtnCircle from '../../components/btn-circle-red'
import PassengerBlock from './passenger-form-block-0'
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
		if(this.props.onRef) this.props.onRef(this);
	},

	componentWillUnmount() {
		if(this.props.onRef) this.props.onRef(undefined);
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
					<PassengerBlock title={inputFormat[i].title} placeholder={inputFormat[i].placeholder} inputType={inputFormat[i].inputType}></PassengerBlock>
				</li>
			);
		}

		return (

			<form>
				<ul>
					{inputList}
				</ul>
			</form>
		)
	}
})