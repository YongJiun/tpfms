import React from 'react'
import PassengerSingle1 from './passenger/passenger-single-1'

export default React.createClass({

	render() {

		var modeText_lg = '', modeText_xs = '', stepText_lg = '', stepText_xs = '', stepIcon = '';

		if(this.props.mode == 'add' || this.props.mode == 'personal-editing') {

			if(this.props.mode == 'add') {
				modeText_lg = '新增';
				modeText_xs = 'add ';
			}
			else if(this.props.mode == 'personal-editing') {
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
				<div className="panel-block panel-title">
					<div>
						<div className={"panel-title-icon " + stepIcon}></div>
					</div>
					<div>
						<div className="panel-title-text lg">{modeText_lg + stepText_lg}</div>
						<div className="panel-title-text xs">{modeText_xs + stepText_xs}</div>
					</div>
				</div>
			)
		}


		else if(this.props.step == 'passenger') {
			return ( 
				<div className="panel-block panel-title">
					<div>
						<div className="panel-title-icon icon-passenger"></div>
					</div>
					<div>
						<div className="panel-title-text lg">乘客管理</div>
						<div className="panel-title-text xs">Passenger</div>
					</div>
				</div> 
			)
		}
		

		else if(this.props.titleContent == 'passenger-personal-detail') {

			return (
				<div className="panel-block panel-title">
					<PassengerSingle1 name="test Name" gender="男"></PassengerSingle1>
				</div>
			)
		}
		else return <div>default</div>

		{/*if(this.props.titleContent == 'passenger') { return ( <div className="panel-block panel-title"> <div> <div className="panel-title-icon icon-passenger"></div> </div> <div> <div className="panel-title-text lg">乘客管理</div> <div className="panel-title-text xs">Passenger</div> </div> </div> ) }*/}
		{/*else if(this.props.titleContent == 'passenger-add-passport') { return ( <div className="panel-block panel-title"> <div> <div className="panel-title-icon icon-add-passenger"></div> </div> <div> <div className="panel-title-text lg">新增護照</div> <div className="panel-title-text xs">Add passport</div> </div> </div> ) }*/}
		{/*else if(this.props.titleContent == 'passenger-add-visa') { return ( <div className="panel-block panel-title"> <div> <div className="panel-title-icon icon-add-passenger"></div> </div> <div> <div className="panel-title-text lg">新增VISA</div> <div className="panel-title-text xs">Add visa</div> </div> </div> ) }*/}
		{/*else if(this.props.titleContent == 'passenger-preferences') { return ( <div className="panel-block panel-title"> <div> <div className="panel-title-icon icon-like"></div> </div> <div> <div className="panel-title-text lg">新增乘客偏好</div> <div className="panel-title-text xs">Add preferences</div> </div> </div> ) }*/} 
		{/*else if(this.props.titleContent == 'passenger-relationship') { return ( <div className="panel-block panel-title"> <div> <div className="panel-title-icon icon-relationship"></div> </div> <div> <div className="panel-title-text lg">新增乘客關係人</div> <div className="panel-title-text xs">Add relationship</div> </div> </div> ) }*/} 
		{/*else if(this.props.titleContent == 'add-basic' || this.props.titleContent == 'passenger-secretary') { return ( <div className="panel-block panel-title"> <div> <div className="panel-title-icon icon-add-passenger"></div> </div> <div> <div className="panel-title-text lg">新增乘客基本資料</div> <div className="panel-title-text xs">Add passenger's information</div> </div> </div> ) }*/} 
		
	}
})