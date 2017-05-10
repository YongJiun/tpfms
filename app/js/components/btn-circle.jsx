import React from 'react'

export default React.createClass({

	getInitialState() {
		return {
			fadeOut: '',
			visible: ''
		}			
	},

	fadeOut: function() {

		this.setState({fadeOut: 'fade-out'});
		
		setTimeout(function(self) {
			self.setState({visible: 'disappear'});
		}, 50, this);
	},

	fadeIn: function() {
		this.setState({
			fadeOut: '',
			visible: ''
		});
	},

	componentDidMount() {
		if(this.props.hidden) this.fadeOut();
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
			<div onTouchStart={this.btnTouch} className={"btn btn-circle " + this.state.fadeOut + " " + this.state.visible} style={this.props.style}>
				<div className={"btn-circle-bg " + this.props.color || 'red'}></div>
				<div className={'btn-icon ' + this.props.btnType}></div>
				{this.props.child}
			</div>
		)
	}
})