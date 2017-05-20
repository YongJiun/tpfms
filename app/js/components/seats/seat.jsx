import React from 'react'

export default React.createClass({

	contextTypes: {
		ftdChange: React.PropTypes.func,
		seatCallback: React.PropTypes.func,
	},

	personal_add: function() {
		this.context.seatCallback('add', this.props.num);
	},

	personal_info: function() {
		this.context.ftdChange('personal-detail', {leg: this.props.legNum, passenger: this.props.personal.PassengerId});
	},

	render() {
		
		var personal = this.props.personal;

		if(this.props.relationship == 0) {

			/* 新增乘客 */
			if(!this.props.personal) {
				return (
					<div is
						 class="seat add translucent-5"
						 style={this.props.pos}
						 leg-num={this.props.legNum}
						 seat-num={this.props.num}
						 passenger-id={''}
						 onClick={this.personal_add}>

						<div is
							 key={'seat-'+this.props.num}
							 num={this.props.num}>
						</div>
					</div>
				)
			}
			
			/* 乘客資訊 (無關係) */
			else {
				return (
					<div is 
						 class="seat name"
						 style={this.props.pos}
						 leg-num={this.props.legNum}
						 seat-num={this.props.num}
						 passenger-id={personal.PassengerId}
						 onClick={this.personal_info}>
						 <div>
						 	<div className="p-name">{/*translucent*/}
						 		{personal.NameCN}
						 	</div>
						 </div>
					</div>
				)
			}
		}



		


		else {

			if(!this.props.personal) {
				return <div></div>;
			}

			
			/* 乘客資訊 (含關係) */
			else {
				return (
					<div is
						 class="seat relationship"
						 style={this.props.pos}
						 leg-num={this.props.legNum}
						 seat-num={this.props.num}
						 passenger-id={personal.PassengerId}>
						 <div className="fw ofh">
						 	<div className="left p-portrait-block">
						 		<div className="p-portrait"></div>
						 	</div>
						 	<div className="left p-info tl">
						 		本人
						 		<br/>
						 		/ {personal.NameCN}
						 	</div>
						 </div>
						 <div className="fw ofh">
						 	<div className="p-name">
						 		{personal.NameCN}
						 	</div>
						 </div>
					</div>
				)
			}
		}
	}
});