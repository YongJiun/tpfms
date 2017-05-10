import React from 'react'
import PassengerSingle1 from './passenger/passenger-single-1'

export default React.createClass({

	render() {

		var modeText_lg = '', modeText_xs = '', stepText_lg = '', stepText_xs = '', stepIcon = '';


		if(this.props.mode == 'info') {
			return (
				<div className="panel-block panel-title padding-sm">
					<div className="left p-portrait-block">
						<div className="p-portrait"></div>
					</div>
					<div className="left p-info">
						<div>
							乘客名
							<span className="gap">/</span>
							Passenger Name
						</div>
						<div>
							<span className="gap">/</span>
							男
							<span className="gap">/</span>
							R.O.C
							<span className="gap">/</span>
							Mandarin</div>
					</div>
				</div>
			)
		}

		else if(this.props.mode == 'add' || this.props.mode == 'edit' || this.props.mode == 'personal-editing') {

			if(this.props.mode == 'add') {
				modeText_lg = '新增';
				modeText_xs = 'add ';
			}
			else if(this.props.mode == 'edit' || this.props.mode == 'personal-editing') {
				modeText_lg = '修改';
				modeText_xs = 'edit ';
			}

			switch(this.props.step) {
				case 'basic':
					stepText_lg = "乘客基本資料";
					stepText_xs = "passenger's information";
					stepIcon = "icon-add-passenger";
					break;
				case 'passport':
					stepText_lg = "乘客護照";
					stepText_xs = "passport";
					stepIcon = "icon-add-passenger";
					break;
				case 'visa':
					stepText_lg = "乘客VISA";
					stepText_xs = "visa";
					stepIcon = "icon-add-passenger";
					break;
				case 'secretary':
					stepText_lg = "乘客基本資料";
					stepText_xs = "passenger's information";
					stepIcon = "icon-add-passenger";
					break;
				case 'preferences':
					stepText_lg = "乘客偏好";
					stepText_xs = "preferences";
					stepIcon = "icon-like";
					break;
				case 'relationship':
					stepText_lg = "乘客關係人";
					stepText_xs = "relationship";
					stepIcon = "icon-relationship";
					break;
			}

			return (
				<div className="panel-block panel-title padding-sm">
					<div className="left">
						<div className={"panel-title-icon " + stepIcon}></div>
					</div>
					<div className="left">
						<div className="panel-title-text lg">{modeText_lg + stepText_lg}</div>
						<div className="panel-title-text xs">{modeText_xs + stepText_xs}</div>
					</div>
				</div>
			)
		}


		else if(this.props.step == 'passenger') {
			return ( 
				<div className="panel-block panel-title padding-md">
					<div className="left">
						<div className="panel-title-icon icon-passenger"></div>
					</div>
					<div className="left">
						<div className="panel-title-text lg">乘客管理</div>
						<div className="panel-title-text xs">Passenger</div>
					</div>
				</div> 
			)
		}
		

		else if(this.props.titleContent == 'passenger-personal-detail') {

			return (
				<div className="panel-block panel-title padding-md">
					<PassengerSingle1 name="test Name" gender="男"></PassengerSingle1>
				</div>
			)
		}
		else return <div>default</div>
		
	}
})