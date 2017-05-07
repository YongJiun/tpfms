import React from 'react'

export default React.createClass({

	getInitialState() {
		return {
			btnClass: ''
		}			
	},

	fadeOut: function() {
		this.setState({
			btnClass: 'fade-out'
		});
	},

	fadeIn: function() {
		this.setState({
			btnClass: ''
		});
	},

	componentDidMount() {
		if(this.props.onRef) this.props.onRef(this);
	},

	componentWillUnmount() {
		if(this.props.onRef) this.props.onRef(undefined);
	},

	btnTouch: function() {
		if(this.props.touchCallback) this.props.touchCallback();
	},

	render() {

		return (
			<div onTouchStart={this.btnTouch} className={"btn btn-circle btn-back-left " + this.state.btnClass} style={this.props.style}>
				<div className="btn-circle-bg"></div>
				<div className={'btn-icon ' + this.props.btnType}></div>
			</div>
		)
	}
})