import React from 'react'

import gp from './../../../global/parameter'

export default React.createClass({

	click: function() {
		if(this.props.clickCallback) this.props.clickCallback(this.props.data.APId);
	},

	render() {

		var data = this.props.data,
			gender = gp.getGender(data.Gender),
			photo = data.Photo,
			portrait;

		if(photo.length > 0) portrait = {backgroundImage: 'url(' + photo[0].PhotoUrl + ')' };

		return (

			<li className="cm-li ud-l" onClick={this.click}>
				<div className="cm-list-item child-left item-0">
					<div className="cm-portrait">
						<div className="portrait" style={portrait}></div>
					</div>
					<div className="cm-info">
						<div className="cm-list-txt sm">{data.Occupation[0].NameCN}</div>
						<div className="cm-list-txt sm">{data.NameCN} / {data.NameEN}</div>
						<div className="cm-list-txt sm">/ {gender}</div>
					</div>
				</div>
			</li>
		)
	}
})