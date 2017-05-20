import React from 'react'

import PassengerSingle1 from './passenger/passenger-single-1'
import gp from '../global/parameter'

export default React.createClass({

	render() {


		/*
		 * @mode
		 * ============================
		 * info - 資料顯示
		 * add  - 加入
		 * new  - 新增
		 * edit - 編輯
		 * ----------------------------
		 */
		


		var mode = this.props.mode,
			section = this.props.section,
			action = this.props.action,
			step = this.props.step;

		var modeText_lg = '', modeText_xs = '', stepText_lg = '', stepText_xs = '', stepIcon = '';



		var mode_lg = '', mode_xs = '',
			section_lg = '', section_xs = '',
			action_lg = '', action_xs = '',
			step_lg = '', step_xs = '',
			sectionIcon = '';




		/*
		 * mode [front, back],
		 * section [passenger, crew-member... ],
		 * action [new, add, edit, info... ],
		 * step [passport, visa, license, secretary... ],
		 */
		


		if(mode == 'title-front' || mode == 'title-back') {

			switch(section) {
				case 'passenger': section_lg = '乘客'; section_xs = 'passenger'; sectionIcon = "icon-add-passenger"; break;
				case 'crew-member': section_lg = '機組人員'; section_xs = 'crew member'; sectionIcon = "icon-member-d"; break;
			}

			switch(action) {
				case 'manage': action_lg = '管理'; break;
				case 'new': action_lg = '新增'; action_xs = 'New'; break;
				case 'add': action_lg = '加入'; action_xs = 'Add'; break;
				case 'edit': action_lg = '編輯'; action_xs = 'Edit'; break;
			}

			switch(step) {

				case 'basic': step_lg = '基本資料'; step_xs = 'infomation'; break;
				case 'passport': step_lg = '護照'; step_xs = 'passport'; break;
				case 'visa': step_lg = 'VISA'; step_xs = 'visa'; break;
				case 'license': step_lg = 'License'; step_xs = 'License'; break;
				case 'contact': step_lg = '聯絡人'; step_xs = 'contact person'; break;
				case 'luggage': step_lg = '行李'; step_xs = 'luggage'; break;
				case 'remark': step_lg = '備註'; step_xs = 'remark'; break;
				case 'flight-record': step_lg = '飛行紀錄'; step_xs = 'flight record'; break;
				case 'relationship': step_lg = '關係人'; step_xs = 'relationship'; break;
				case 'preferences': step_lg = '偏好'; step_xs = 'preferences'; break;
			}


			if(mode == 'title-front') {
				return (
					<div className="panel-block panel-title padding-sm">
						<div className="left">
							<div className={"panel-title-icon " + sectionIcon}></div>
						</div>
						<div className="left">
							<div className="panel-title-text lg">{action_lg + section_lg + step_lg}</div>
							<div className="panel-title-text xs">{action_xs + section_xs + step_xs}</div>
						</div>
					</div>
				)
			}
			else if(mode == 'title-back') {
				return (
					<div className="panel-block panel-title padding-sm">
						<div className="left">
							<div className={"panel-title-icon " + sectionIcon}></div>
						</div>
						<div className="left">
							<div className="panel-title-text lg">{section_lg + step_lg + action_lg}</div>
							<div className="panel-title-text xs">{section_xs + step_xs + action_xs}</div>
						</div>
					</div>
				)
			}


		}
		else if(mode == 'personal-info') {

		}








		/* [mode在句頭] */
		if(mode == 'add' || mode == 'new' || mode == 'edit' || mode == 'personal-editing') {

			/* [mode, step, action] */

			switch(mode) {
				case 'add': modeText_lg = '加入'; modeText_xs = 'add'; break;
				case 'new': modeText_lg = '新增'; modeText_xs = 'new '; break;
				case 'edit': modeText_lg = '修改'; modeText_xs = 'edit '; break;
				case 'personal-editing': modeText_lg = '修改'; modeText_xs = 'edit '; break;
			}

			switch(step) {



				case 'passenger': stepText_lg = "乘客"; stepText_xs = "passenger"; stepIcon = "icon-add-passenger"; break
				case 'crew-member': stepText_lg = '機組人員'; stepText_xs = "crew member"; break;
				case 'basic': stepText_lg = "乘客基本資料"; stepText_xs = "passenger's information"; stepIcon = "icon-add-passenger"; break;
				case 'passport': stepText_lg = "乘客護照"; stepText_xs = "passport"; stepIcon = "icon-add-passenger"; break;
				case 'visa': stepText_lg = "乘客VISA"; stepText_xs = "visa"; stepIcon = "icon-add-passenger"; break;
				case 'secretary': stepText_lg = "乘客基本資料"; stepText_xs = "passenger's information"; stepIcon = "icon-add-passenger"; break;
				case 'preferences': stepText_lg = "乘客偏好"; stepText_xs = "preferences"; stepIcon = "icon-like"; break;
				case 'relationship': stepText_lg = "乘客關係人"; stepText_xs = "relationship"; stepIcon = "icon-relationship"; break;
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


		/* [mode在句尾] */
		else if(mode == 'manage') {

			modeText_lg = '管理';

			switch(this.props.step) {
				case 'crew-member':
					stepText_lg = '機組人員';
					stepText_xs = 'Crew member';
					stepIcon = 'icon-member-d';
					break;
				case 'passenger':
					stepText_lg = '乘客';
					stepText_xs = 'Passenger';
					stepIcon = 'icon-passenger';
					break;
			}

			return (
				<div className="panel-block panel-title padding-sm">
					<div className="left">
						<div className={"panel-title-icon " + stepIcon}></div>
					</div>
					<div className="left">
						<div className="panel-title-text lg">{stepText_lg + modeText_lg}</div>
						<div className="panel-title-text xs">{modeText_xs + stepText_xs}</div>
					</div>
				</div>
			)
		}




		else if(mode == 'person-info') {

			var data = this.props.data,
				gender = gp.getGender(data.Gender),
				photo = data.psersonal_photo,
				portrait = {};

			if(photo.length > 0) {
				portrait = {backgroundImage: 'url(' + photo[0].PhotoUrl + ')' };
			}

			if(section == 'crew-member') {
				return (
					<div className={"panel-block panel-title padding-sm" + " " + section}>
						<div className="left p-portrait-block">
							<div className="p-portrait" style={portrait}></div>
						</div>
						<div className="left p-info">
							<div>
								{data.Occupation[0].NameCN}
							</div>
							<div>
								{data.NameCN}
								<span className="gap">/</span>
								{data.NameEN}
							</div>
							<div>
								<span className="gap-r">/</span>
								{gender}
							</div>
						</div>
					</div>
				)
			}
		}





		else if(mode == 'info') {

			var data = this.props.data,
				psersonal_photo = data.psersonal_photo,
				portrait;

			if(psersonal_photo && psersonal_photo != '') portrait = {backgroundImage: 'url(' + this.props.data.psersonal_photo[0].PhotoUrl + ')'};

			return (
				<div className="panel-block panel-title padding-sm">
					<div className="left p-portrait-block">
						<div className="p-portrait" style={portrait}></div>
					</div>
					<div className="left p-info">
						<div>
							{data.NameCN}
							<span className="gap">/</span>
							{data.NameEN}
						</div>
						<div>
							<span className="gap">/</span>
							{data.Gender == '0' ? '男' : '女'}
							<span className="gap">/</span>
							{data.Nationality}
							<span className="gap">/</span>
							{data.Language}
						</div>
					</div>
				</div>
			)
		}

		else return <div>default</div>
		
	}
})