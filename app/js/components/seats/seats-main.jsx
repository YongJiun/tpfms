import React from 'react'
import SeatsFormat0 from './seats-format-0'

export default React.createClass({

	getInitialState() {
		var seat;

		if(this.props.format == 0) seat = <SeatsFormat0></SeatsFormat0>;
		return {content: seat };
	},
	componentWillMount() {},
 	componentDidMount() {},
	componentDidUpdate(prevProps, prevState) {},
	componentWillUnmount() {},

	render() {

		return (
			<div>
				<div className="seats-wrap">
					{
						<SeatsFormat0></SeatsFormat0>
					}
				</div>
			</div>
		)
	}
});