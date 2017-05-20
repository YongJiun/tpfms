/* [lib] */
import React from 'react'
import $ from 'jquery'
import IScroll from 'iscroll'
import Slick from 'slick-carousel'

/* [components] */
import BtnCircle from '../../../components/btn-circle'
import Title from './components/category-title'
import Content from './components/category-content'

var scroller = '',
	scrollerId = '',

	slickPassport = '',
	slickVisa = '',
	slickLicense = '',

	formFormat = [];

export default React.createClass({

	getInitialState() {
		scrollerId = this.props.section + '-b-p-scroller';
		return null;	
	},

	componentDidMount() {
		scroller = new IScroll(('.' + scrollerId), {preventDefault: false, mouseWheel: true });
	},
  	
	componentWillUnmount() {
		scroller.destroy();
		scroller = null;
	},

	slickImgOnload: function(e) {

		var name = $(e.target).attr('name').split('-')[0];
		
		$('.slick-block[category='+ name +']')
			.on('beforeChange', (event, slick, currentSlide, nextSlide) => {})
			.on('afterChange', (event, slick, nextSlide) => {})
			.slick({dots: true, speed: 500, adaptiveHeight: true, });
			
		scroller.refresh();
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
			name = '',
			icon = '';

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
					{category: 'subject', icon: '', text: 'Crew member' }, 
					{category: 'content', title: 'Crew No.', content: person.APId }, 
					{category: 'content', title: 'Birthday', content: person.Birthday}, 
					{category: 'content', title: 'Height/Weight', content: person.Height + 'cm / ' + person.Weight + 'kg' },
					{category: 'content', title: 'Phone', content: person.Phone },
					{category: 'content', title: 'Email', content: person.Email },
					{category: 'subject', icon: 'icon-passport-b-w', text: 'Passport', }, 
					{category: 'content', title: 'passport_detail', },
					{category: 'subject', icon: 'icon-visa-b-w', text: 'Visa', }, 
					{category: 'content', title: 'visa_detail' },
					{category: 'subject', icon: 'icon-license-b-w', text: 'License', }, 
					{category: 'content', title: 'licenses_detail' },
					{category: 'subject', icon: 'icon-emergency-contact-b-w', text: 'Emergency Contact'},
					{category: 'content', title: 'Name', content: em.Name }, 
					{category: 'content', title: 'Phone', content: em.Phone }, 
					{category: 'content', title: 'Relationship', content: em.Relationship }, 
					{category: 'subject', icon: 'icon-key-b-w', text: 'Login Name'},
					{category: 'content', title: 'Login Name', content: person.Account }, 
				]
				break;
		}

		for(var i in formFormat) {

			var key = section + "-basic-preview-"+i,
				format = formFormat[i];

			/* [加入標題] */
			if(format.category == 'subject') {

				if(format.icon == '') icon = 'icon-no'
				else icon = format.icon;

				if(format.text == 'Visa') title = '';
				else title = format.text;

				content[i] = <Title key={key} name={name} icon={icon} text={title}></Title>
			}

			/* [加入內容] */
			else if(format.category == 'content') {


				/* [passport & visa 須加入照片與slick] */
				if(format.title == 'passport_detail' || format.title == 'visa_detail' || format.title == 'licenses_detail') {

					/* [passport_detail, visa_detail, licenses_detail] */

					var data = person[format.title];
					slickContent = [];

					for(var k in data) {
						
						if(data[k].PhotoUrl && data[k].PhotoUrl != '') {
							
							slickContent[k] = (
								<div is
									 key={k}
									 class="slick-content">
									<img src={data[k].PhotoUrl} 
										 name={format.title+'-img-'+k}
										 className="fw"
										 onLoad={k == 0 ? this.slickImgOnload : ''}/>
									<p>
										<span className="c-gray-6">Date of expiry</span>
										<span className="c-gray-2">{data[k].ExpirationDate}</span>
									</p>
								</div>
							)
						}
					}

					content[i] = (
						<li key={key} className="pr of-h">
							<div is class="pr of-h slick-block dots-red-white dots-sm" category={format.title}>
								{slickContent}
							</div>
						</li>
					);
				}

				else {
					content[i] = (
						<li key={key} className="pr of-h ud-l">
							<Content mode="preview" title={formFormat[i].title} content={formFormat[i].content}></Content>
						</li>
					);
				}
			}
		}


		return (

			<div className={"panel-form-scroller" + " " + scrollerId}>
				<div className="fw iscroll-scroller">
					<form is section={section} class="panel-form fw pr of-h">
						<ul>
							{content}
						</ul>
					</form>
				</div>
			</div>
		)
	}
})