/* [lib] */
import React from 'react'

/* [comp] */
import gp from '../../../global/parameter'

export default React.createClass({

	render() {

		var rp = this.props.relationPerson,
			rpd = this.props.relationPerson.passenger_detail[0],
			portrait = rpd.Photo[0].PhotoUrl,
			style;

		if(portrait) style = {backgroundImage: 'url(' + portrait + ')' };

		return (
			<div className="ps-s-3 child-left">

				<div className="p-portrait-wrap">
					<div className="portrait" style={style}></div>
				</div>
				
				<div className="p-detail-wrap">
					<div>{rp.Title}</div>
					<p>{rpd.NameCN} / {rpd.NameEN}</p>
					<p>/ {gp.getGender(rpd.Gender)} / {rpd.Nationality} / {rpd.Language}</p>
				</div>

			</div>
		)
	}
})