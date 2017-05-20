import React from 'react'

/* [pages] */
import RemarkList from './psg-remark-list'

var preview, form, list;

export default React.createClass({

	getInitialState() {
		list = <RemarkList passenger={this.props.passenger} onRef={ref => (this.psgPreferences = ref)}></RemarkList>;
		return {content: list, };
	},

	componentDidMount() {
			
	},

	render() {

		return (
			this.state.content
		)
	}
})