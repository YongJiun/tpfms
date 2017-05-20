/* [lib] */
import React from 'react'
import $ from 'jquery'
import IScroll from 'iscroll'
import Slick from 'slick-carousel'

/* [components] */
import BtnCircle from '../../components/btn-circle'
import FormBlock from './components/form-block-0'
import Title from './components/preview-title'

var scroller = '',
	passport = [],
	visa = [],
	formFormat = [];

export default React.createClass({

	getInitialState() {
		
		var p = this.props.passenger,
			s = p.secretary_contact.length > 0 ? p.secretary_contact : '',
			e = p.emergency_contact.length > 0 ? p.emergency_contact : '';

		var sn = '', sp = '', se = '',
			en = '', ep = '', er = '';

		if(s != '') {
			sn = s[0].Name;
			sp = s[0].Phone;
			se = s[0].Email;
		}
		if(e != '') {
			en = e[0].Name;
			ep = e[0].Phone;
			er = e[0].relationship;
		}
		
		formFormat = [
			{category: 'subject', icon: '', text: 'Passenger', }, 
			{category: 'content', title: 'PassengerNo.', content: p.NameCN }, 
			{category: 'content', title: 'Title', content: p.NickName }, 
			{category: 'content', title: 'Birthday', content: p.Birthday}, 
			{category: 'content', title: 'Height/Weight', content: p.Height + 'cm / ' + p.Weight + 'kg' },
			{category: 'content', title: 'Phone', content: p.Phone },
			{category: 'content', title: 'Email', content: p.Email },
			{category: 'subject', icon: 'icon-passport-b-w', text: 'Passport', }, 
			{category: 'content', title: 'Passport', },
			{category: 'subject', icon: 'icon-visa-b-w', text: 'Visa', }, 
			{category: 'content', title: 'Visa' },
			{category: 'subject', icon: 'icon-secretary-contact-b-w', text: 'Secretary Contact'},
			{category: 'content', title: 'Secretary', content: sn }, 
			{category: 'content', title: 'Phone', content: sp }, 
			{category: 'content', title: 'Email', content: se }, 
			{category: 'subject', icon: 'icon-emergency-contact-b-w', text: 'Emergency Contact'},
			{category: 'content', title: 'Name', content: en }, 
			{category: 'content', title: 'Phone', content: ep }, 
			{category: 'content', title: 'Relationship', content: er }, 
		];
		return {content: '', }
	},

	componentDidMount() {
		if(this.props.onRef) this.props.onRef(this);
		scroller = new IScroll('.ps-p-info-scroll', {preventDefault: false, mouseWheel: true });
	},
  	
	componentWillUnmount() {
		if(this.props.onRef) this.props.onRef(undefined);
		/*$('.slick-block.passport, .slick-block.visa').off('beforeChange').off('afterChange').slick('unslick');*/
		scroller.destroy();
		scroller = null;
	},

	scrollTo: function(tar) {
		var h = $('#detail-title-' + tar).position().top;
		scroller.scrollTo(0, -h, 1000, IScroll.utils.ease.back);
	},

	onImgLoadedPassport: function(e) {

		$('.slick-block.passport')
			.on('beforeChange', (event, slick, currentSlide, nextSlide) => {})
			.on('afterChange', (event, slick, nextSlide) => {})
			.slick({dots: true, speed: 600, adaptiveHeight: true, });

		scroller.refresh();
	},

	onImgLoadedVisa: function(e) {

		$('.slick-block.visa')
			.on('beforeChange', (event, slick, currentSlide, nextSlide) => {})
			.on('afterChange', (event, slick, nextSlide) => {})
			.slick({dots: true, speed: 600, adaptiveHeight: true, });

		scroller.refresh();
	},

	render() {

		var content = [], 
			title = '', 
			name = '';

		for(var i in formFormat) {

			var key = "psg-basic-preview-"+i,
				format = formFormat[i];


			/* [加入標題] */
			if(format.category == 'subject') {

				if(format.icon == '') name = 'icon-no'
				else name = (format.text.toLowerCase().replace(' ', '-'));

				if(format.text == 'Visa') title = '';
				else title = format.text;

				content[i] = (
					<Title key={key} name={name} icon={format.icon} text={title}></Title>
				);
			}

			/* [加入內容] */
			else if(format.category == 'content') {


				/* [passport & visa 須加入照片與slick] */
				if(format.title == 'Passport') {

					var data = this.props.passenger.passport_detail;

					for(var k in data) {
						
						if(data[k].PhotoUrl && data[k].PhotoUrl != '') {
							
							passport[k] = (
								<div is
									 key={k}
									 name={"p-passport-" + k}
									 class="slick-content">
									<img src={data[k].PhotoUrl} 
										 className="fw"
										 onLoad={k == 0 ? this.onImgLoadedPassport : ''}/>
									<p>
										<span className="c-gray-6">Date of expiry</span>
										<span className="c-gray-2">{data[k].ExpirationDate}</span>
									</p>
								</div>
							)
						}
					}

					content[i] = (
						<li key={key}>
							<div className="ps-block fw slick-block passport dots-red-white dots-sm">
								{passport}
							</div>
						</li>
					);
				}

				else if(format.title == 'Visa') {

					var data = this.props.passenger.visa_detail;

					for(var k in data) {
						
						if(data[k].PhotoUrl && data[k].PhotoUrl != '') {
							
							visa[k] = (
								<div is
									 key={k}
									 name={"p-visa-" + k}
									 class="slick-content">
									<img src={data[k].PhotoUrl} 
										 className="fw"
										 onLoad={k == 0 ? this.onImgLoadedVisa : ''}/>
									<p>
										<span className="c-gray-6">Date of expiry</span>
										<span className="c-gray-2">{data[k].ExpirationDate}</span>
									</p>
								</div>
							)
						}
					}

					content[i] = (
						<li key={key}>
							<div className="ps-block fw slick-block visa dots-red-white dots-sm">
								{visa}
							</div>
						</li>
					);
				}

				else {
					content[i] = (
						<li key={key} className="ps-block ud-l">
							<FormBlock title={formFormat[i].title} content={formFormat[i].content}></FormBlock>
						</li>
					);
				}
			}
		}

		return (

			<div className='passenger-personal-detail passenger-f-w '>
				<div className="ps-block-scroll ps-p-info-scroll">
					<div className="iscroll-scroller fw">
						<form>
							<ul className="passenger-ul">
								{content}
							</ul>
						</form>
					</div>
				</div>
			</div>
		)
	}
})