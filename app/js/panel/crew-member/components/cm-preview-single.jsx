import React from 'react'

export default React.createClass({

	render() {

		var d = this.props.data, portrait = {};

		if(d.Photo) portrait = {backgroundImage: 'url(' + d.Photo[0].PhotoUrl + ')'};

		return (
			<div className="ps-s-2 child-left">
				
				<div className="checkbox-wrap">
					<input id={"ps-s-2-check-" + this.props.num} value='check' name="" className='common-checkbox' type='checkbox'/>
					<label htmlFor={"ps-s-2-check-" + this.props.num}><span></span></label>
				</div>

				<div className="p-portrait-wrap">
					<div className="portrait" style={portrait}></div>
				</div>
				
				<div className="p-detail-wrap">
					<p>乘客名 / {d.NameCN}</p>
					<p>/ {d.Gender == 0 ? "男" : "女"}</p>
				</div>

			</div>
		)
	}
})