/* [library] */
import React from 'react'
import IScroll from 'iscroll'

/* [data] */
import gp from '../../global/parameter'

/* [components] */
import FR from '../../components/flight-record/fr-main'
import Footer from '../../footer/footer-main'


var scroller, content = [];

export default React.createClass({

	contextTypes: {
		panel: React.PropTypes.object,
	},

	getInitialState() {
		return {
			loading: 'loading',
			trips: [],
		}	
	},

	componentDidMount() {
		scroller = new IScroll('.home-task-scroller', {preventDefault: false, scrollX: false, scrollY: true, mouseWheel: true });
	},

	componentDidUpdate(prevProps, prevState) {
		if(this.props.trips.length > 0 && this.state.loading == 'loading') {
			if(gp.debug) console.log('start done');
			this.setState({loading: '' });
			scroller.refresh();	
		}
	},

	taskClick: function(num) {
		this.context.panel.change('flight-task-detail', num);
	},

	render() {

		var data = this.props.trips; content = [];

		if(data.length > 0) {

			for(var i in data) {

				content[i] = (
					<FR 
						key={'home-task-'+i}
						frNum={i}
						data={data[i]}
						clickCallback={this.taskClick}>
					</FR>
				);
			}

			content[data.length] = (<li key={'home-task-footer'}><Footer></Footer></li>);
		}

		return (
			<div className={"home-task-scroller comp-loading " + this.state.loading}>
				<div className="scroll-task iscroll-scroller" ref="container">
					<ul>
						{content}
					</ul>
				</div>
			</div>
		)
	}
})