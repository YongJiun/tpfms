import React from 'react'

var text = '';

export default React.createClass({

	getClass: function(type) {

		var cls = '';

		switch(type) {

			case 'Next':
				cls = 'next green icon-bt-arrow-r-g';
				break;
			case 'Back':
				cls = 'back red icon-bg-arrow-l-r'
				break;
			case 'Save':
				cls = 'save green icon-bt-tick-g';
				break;
			case 'Complete':
				cls = 'complete green icon-bt-tick-g';
				break;
		}

		return cls;
	},

	getInitialState() {
		return {
			btnClass: this.getClass(this.props.type)
		}
	},

	onTouch: function() {
		if(this.props.touchCallBack) this.props.touchCallBack();
	},

	render() {

		return (
			<div className={'btn btn-bt ' + this.state.btnClass} onTouchStart={this.onTouch}>
				<div>{this.props.type}</div>
			</div>
		)
	}
});