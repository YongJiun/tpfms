import React from 'react'

export default React.createClass({


	getInitialState() {
		return {
			color: 'red'
		}	
	},

	seatAdd: function() {
		/*console.log('click seatAdd');
		this.setState({
			color: 'blue'
		});*/
	},

	render() {

		/* 新增乘客 */
		if(this.props.personalInfo == '' || this.props.personalInfo == null) {
			
			return (
				<div 
					 className="seat"
					 style={this.props.pos}>
					
					<div is
						 key={'seat-'+this.props.num}
						 num={this.props.num}
						 onTouchStart={this.seatAdd}
						 class="btn-seat-add"
						 >
					</div>
				</div>
			)
		}

		else {

			/* 乘客資訊 (含關係) */
			if(this.props.personalInfo.relationship == 0) {
				return (
					<div className="seat"
						 style={this.props.pos}>
						 <div className="fw ofh">
						 	<div className="left p-portrait-block">
						 		<div className="p-portrait"></div>
						 	</div>
						 	<div className="left p-info">
						 		本人
						 		<br/>
						 		/ Sho Min Wang
						 	</div>
						 </div>
						 <div className="fw ofh">
						 	<div className="p-name">
						 		Sho Min Wang
						 	</div>
						 </div>
					</div>
				)
			}

			/* 乘客資訊 (無關係) */
			else if(this.props.personalInfo.relationship == 1) {
				return (
					<div className="seat"
						 style={this.props.pos}>
							
						 <div className="fw ofh">
						 	<div className="p-name translucent">
						 		Sho Min Wang ShhhShhhShhh
						 	</div>
						 </div>
					</div>
				)
			}
		}
	}
});