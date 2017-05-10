/* [library] */
import React from 'react'
import IScroll from 'iscroll'

/* [components] */
import List from './psg-flightRecord-list'
import Detail from './psg-flightRecord-detail'

var scroller, list, detail;

export default React.createClass({

	getInitialState() {

		list = <List></List>;
		detail = <Detail></Detail>

		return {
			// content: list,
			content: detail
		}
	},

	componentDidMount() {
		scroller = new IScroll('.ps-block-scroll', {preventDefault: false, mouseWheel: true });
	},

	componentDidUpdate(prevProps, prevState) {
		scroller.refresh();	
	},

	componentWillUnmount() {
		scroller.destroy();
		scroller = null;	
	},

	render() {

		return (
			<div className="fc">
				<div className="ps-block-scroll">
					<div className="iscroll-scroller fw">
						{this.state.content}
					</div>
				</div>
			</div>
		)
	}
});