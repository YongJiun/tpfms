import React from 'react'

export default React.createClass({


	getInitialState() {
		return {
			disappear: 'disappear',
			fade: 'fade-out'
		}
	},

	componentDidMount() {
		this.props.onRef(this)
	},
  	
	componentWillUnmount() {
		this.props.onRef(undefined)
	},

	touchAdd: function() {
		this.fadeOut();
	},

	touchCancel: function() {
		this.fadeOut();
	},

	fadeIn: function() {

		this.setState({
			disappear: '',
			fade: 'fade-in'
		});
	},

	fadeOut: function() {

		this.setState({fade: 'fade-out' });
		setTimeout(function(self) {
			self.setState({disappear: 'disappear' });
		}, 400, this);
	},


	render() {

		return (
			
			<div className={"popup-wrap " + this.state.fade + " " + this.state.disappear}>
				<div onTouchStart={this.touchCancel} className="popup-bg"></div>
				<div className="popup-panel">
					
					<div className="popup-block">
						<div className="popup-title">新增乘客偏好</div>
					</div>

					<div className="popup-block">
						<div className="popup-form">

							<div className="popup-form-block child-left">
								<div className="popup-form-title">標題</div>
								<div className="popup-form-content">
									<input type="text" />
								</div>
							</div>

							<div className="popup-form-block child-left">
								<div className="popup-form-title">內容</div>
								<div className="popup-form-content">
									<input type="text" />
								</div>
							</div>
							
						</div>
					</div>

					<div className="popup-block">
						<div className="popup-btn-wrap twin child-left">
							<div onTouchStart={this.touchCancel} className="popup-btn cancel left icon-cross">
								<div>Cancel</div>
							</div>
							<div onTouchStart={this.touchAdd} className="popup-btn confirm icon-bt-tick-g">
								<div>Add</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
});