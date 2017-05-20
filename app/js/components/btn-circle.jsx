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
		setTimeout(() => {this.setState({visible: 'disappear'}); }, 50);
	},

	fadeIn: function() {
		this.setState({fadeOut: '', visible: ''});
	},

	componentDidMount() {
		if(this.props.hidden) this.fadeOut();
		if(this.props.onRef) this.props.onRef(this);
	},

	componentWillUnmount() {
		if(this.props.onRef) this.props.onRef(undefined);
	},

	btnTouch: function(e) {
		if(this.props.touchCallback) this.props.touchCallback(e, this.props.name);
	},

	render() {

		var fade, disappear;

		if(this.props.status == 'fade-out') {

			fade = 'fade-out';
			disappear = 'disappear';
		}



		return (
			<div is 
				 tar={this.props.name}
				 class={"btn btn-circle" + " " + this.props.color + " " + fade + " " + disappear} 
				 onTouchStart={this.btnTouch}
				 style={this.props.style}>

				<div className={"btn-circle-bg " + this.props.color || 'red'}></div>
				<div className={'btn-icon ' + this.props.btnType}></div>
				{this.props.child}
			</div>
		)
	}
})