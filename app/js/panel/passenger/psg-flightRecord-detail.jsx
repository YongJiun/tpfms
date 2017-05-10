/* [library] */
import React from 'react'

/* [components] */
import FormBlock from './passenger-form-block-0'

export default React.createClass({

	render() {

		var lc = [];

		for(var i in inputFormat) {

			lc[i] = (
				
				<li className="ps-block ud-l"
					key={"fr-detail-list-"+i}>
					
					<FormBlock titleClass=""
							   title={inputFormat[i].title} 
							   placeholder={inputFormat[i].placeholder} 
							   inputType={inputFormat[i].inputType}>
					</FormBlock>
				</li>
			)
		}

		return (
			<ul className="passenger-ul">
				{lc}
			</ul>
		)
	}
});



var inputFormat = [
	{title: 'Trip No', placeholder: '001', inputType: 'num'}, 
	{title: 'Trip Title', placeholder: '土耳其之旅', inputType: 'text'}, 
	{title: 'AirCraft', placeholder: 'Bombardier Chanllenger<br/>350-out', inputType: 'text'}, 
	{title: 'Date / Depart Time', placeholder: '1900/01/01', inputType: 'text'}, 
	{title: 'ICAO / IATA', placeholder: '', inputType: 'text'}, 
];