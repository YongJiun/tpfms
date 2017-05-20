/* [lib] */
import React from 'react'

/* [comp] */
import Title from './components/preview-title'
import BtnCircle from '../../components/btn-circle-red'
import FormBlock from './components/form-block-1'

var formFormat = [], 
	hobbyList = [],
	hobbyContent = [];

export default React.createClass({

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

		var hobby = this.props.passenger.hobby;
		
		for(var i in hobby) {

			var h = hobby[i];

			hobbyContent[i] = (
				<li className="ps-block ud-l r-l"key={"input-list-"+i}>
					<FormBlock title={h.HobbyTitle} content={h.Value}> </FormBlock>
				</li>
			);
		}

		return (

			<div>
				<form>
					<ul>
						<Title name='preferences' icon='icon-preferences-b-w' text='Preferences'></Title>
						{hobbyContent}
					</ul>
				</form>
			</div>
		)
	}
})