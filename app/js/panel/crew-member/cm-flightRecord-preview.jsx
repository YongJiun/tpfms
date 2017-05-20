import React from 'react'
import IScroll from 'iscroll'

/* [comp] */
import FlightRecord from '../../components/flight-record/fr-main'

var scroller,
	scrollerId;

export default React.createClass({

	getInitialState() {
		scrollerId = this.props.section + '-fr-p-scroller';
		return {};	
	},

	componentDidMount() {
		if(this.props.readyCallback) this.props.readyCallback();
		scroller = new IScroll(('.' + scrollerId), {preventDefault: false, mouseWheel: true });
	},

	componentDidUpdate() {
		scroller.refresh();
	},

	render() {

		var data = this.props.crewMemberDetail.flight_record,
			section = 'crew-member',
			content = [];
			

		for(var i in data) {
			content[i] = (
				<FlightRecord key={'psg-fr-'+i} frNum={i} data={data[i]} size="xs"></FlightRecord>
			);
		}

		return (
			
			<div className="fw">
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
});