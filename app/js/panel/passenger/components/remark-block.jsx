import React from 'react'

export default React.createClass({


	deleteClick: function() {

		if(this.props.deleteCallback) this.props.deleteCallback(this.props.data.RemarkId);
	},


	render() {

		var data = this.props.data;

		return (
			<li is remark-id={data.RemarkId} class="remark-block ps-block ud-l">
				<div className="fl tl">
					<div className="rk-txt xs">{data.CreateTime}</div>
					<div className="rk-txt lg">{data.TripName}</div>
					<div className="rk-txt md">{data.Content}</div>
				</div>
				<div className="fl tr">
					<div className="rk-txt xs c-green-1">by {data.Creator.NameCN}</div>
					<div className="rk-txt xs c-red-0"
						 onTouchStart={this.deleteClick}>Delete</div>
				</div>
			</li>
		)
	}
});