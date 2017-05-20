/* [lib] */
import React from 'react'
import $ from 'jquery'
import IScroll from 'iscroll'
import Slick from 'slick-carousel'

/* [components] */
import BtnCircle from '../../../components/btn-circle'
import Title from '../../panel-title'

import ListTitle from './components/category-title'
import ListContent from './components/category-content'

var scroller = '',
	scrollerId = '',

	slickPassport = '',
	slickVisa = '',
	slickLicense = '',

	formFormat = [];

export default React.createClass({

	getInitialState() {
		scrollerId = this.props.section + '-b-e-scroller';
		return null;	
	},

	componentDidMount() {
		scroller = new IScroll(('.' + scrollerId), {preventDefault: false, mouseWheel: true });
	},

	componentDidUpdate() {
		scroller.refresh();
	},
  	
	componentWillUnmount() {
		scroller.destroy();
		scroller = null;
	},

	render() {

		var props = this.props,
			section = this.props.section,
			person = this.props.person,
			em = person.emergency_contact[0];

		var formFormat = [],
			content = [],
			slickContent = [],
			title = '',
			name = '';

		switch(section) {

			case 'passenger':

				var se = person.Secretary_contact | '';

				formFormat = [
					{category: 'subject', icon: '', text: 'Passenger', }, 
					{category: 'content', title: 'PassengerNo.', content: p.NameCN }, 
					{category: 'content', title: 'Title', content: p.NickName }, 
					{category: 'content', title: 'Birthday', content: p.Birthday}, 
					{category: 'content', title: 'Height/Weight', content: p.Height + 'cm / ' + p.Weight + 'kg' },
					{category: 'content', title: 'Phone', content: p.Phone },
					{category: 'content', title: 'Email', content: p.Email },
					{category: 'subject', icon: 'icon-passport-b-w', text: 'Passport', }, 
					{category: 'content', title: 'passport_detail', },
					{category: 'subject', icon: 'icon-visa-b-w', text: 'Visa', }, 
					{category: 'content', title: 'visa_detail' },
					/*{category: 'subject', icon: 'icon-secretary-contact-b-w', text: 'Secretary Contact'},
					{category: 'content', title: 'Secretary', content: sn }, 
					{category: 'content', title: 'Phone', content: sp }, 
					{category: 'content', title: 'Email', content: se }, */
					{category: 'subject', icon: 'icon-emergency-contact-b-w', text: 'Emergency Contact'},
					{category: 'content', title: 'Name', content: em.Name }, 
					{category: 'content', title: 'Phone', content: em.Phone }, 
					{category: 'content', title: 'Relationship', content: em.Relationship }, 
				];
				break;

			case 'crew-member':

				formFormat = [
					{category: 'subject', icon: '', text: 'Crew member', }, 
					{category: 'content', type: 'text', title: 'Crew No.', content: [['crewno', person.APId]] }, 
					{category: 'content', type: 'text', title: 'Birthday', content: [['birthday', person.Birthday]] }, 
					{category: 'content', type: 'tel', title:'Height', content: [['height', person.Height, ' cm' ]] },
					{category: 'content', type: 'tel', title:'Weight', content: [['weight', person.Weight, ' kg' ]] },
					{category: 'content', type: 'tel', title: 'Phone', content: [['phone', person.Phone] ] },
					{category: 'content', type: 'email', title: 'Email', content: [['email', person.Email]] },
					
					{category: 'subject', icon: 'icon-passport-b-w', text: 'Passport', }, 
					{category: 'content', type: 'img', title: 'passport_detail', },

					{category: 'subject', icon: 'icon-visa-b-w', text: 'Visa', }, 
					{category: 'content', type: 'img', title: 'visa_detail',  },

					{category: 'subject', icon: 'icon-license-b-w', text: 'License', }, 
					{category: 'content', type: 'img',  title: 'licenses_detail' },

					{category: 'subject', icon: 'icon-emergency-contact-b-w', text: 'Emergency Contact'},
					{category: 'content', type: 'text', title: 'Name', content: [['eName', em.Name]] }, 
					{category: 'content', type: 'tel', title: 'Phone', content: [['ePhone', em.Phone]] }, 
					{category: 'content', type: 'email', title: 'Relationship', content: [['eRelation', em.Relationship]] }, 
					
					{category: 'content', type: 'text', title: 'Login Name', content: [['acount', person.Account]] }, 
				]
				break;
		}

		for(var i in formFormat) {

			var key = section + "-basic-edit-"+i,
				format = formFormat[i];

			if(format.category == 'subject') {

				if(format.icon == '') name = 'icon-no'
				else name = (format.text.toLowerCase().replace(' ', '-'));

				if(format.text == 'Visa') title = '';
				else title = format.text;

				content[i] = <ListTitle key={key} name={name} icon={format.icon} text={title}></ListTitle>;
			}

			else if(format.category == 'content') {
				content[i] = (
					<li key={key} className="pr of-h ud-l">
						<ListContent 
							mode="edit" 
							type={formFormat[i].type}
							title={formFormat[i].title} 
							content={formFormat[i].content}>
						</ListContent>
					</li>
				);
			}
		}


		return (
			<div>
				<Title mode="title-front" section="crew-member" action="edit" step="basic"></Title>

				<div className={"panel-form-scroller" + " " + scrollerId}>
					<div className="fw iscroll-scroller">
						<form is section={section} class="panel-form fw pr of-h">
							<ul>
								{content}
							</ul>
						</form>
					</div>
				</div>
			</div>
		)
	}
})