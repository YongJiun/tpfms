import React from 'react'

export default React.createClass({

	render() {

		return (
			<li className="cl-leg">
				<div className="cl-leg-badge">LEG 1</div>
				
				<div className="cl-leg-form">
					
					<div className="cl-leg-form-l takeoff">
						<div className="cl-form-airplain-wrap">
							<span className="cl-form-airplain sm left icon-takeoff-w"></span>
							<span className="cl-form-text">RCTP</span>
						</div>
						<div className="cl-form-text">台北/</div>
						<div className="cl-form-airport">桃園國際<br/>機場</div>
						<div className="cl-form-text cl-form-time">03/20 23:30 L</div>
					</div>

					<div className="cl-leg-form-s">
						<div className="cl-form-airplain md leg icon-leg-w"></div>
						<div className="cl-form-text leg">LEG 1</div>
					</div>

					<div className="cl-leg-form-l landing">
						<div className="cl-form-airplain-wrap">
							<span className="cl-form-airplain sm left icon-takeoff-w"></span>
							<span className="cl-form-text">RAJJ</span>
						</div>
						<div className="cl-form-text">東京/</div>
						<div className="cl-form-airport">Narita International Airport</div>
						<div className="cl-form-text cl-form-time">03/20 23:30 L</div>
					</div>

				</div>
			</li>
		)
	}
});