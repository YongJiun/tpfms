import React from 'react'

export default React.createClass({

	render() {

		var mode = this.props.mode,
			bottomLine = this.props.final == false ? <hr className="w-95 cl-bottom line"/> : <hr className="w-95 cl-bottom"/>,
			content = '';

		switch(mode) {

			case 'preview':
				content = (
					<div className="fw of-h">
						<p className="fr w-90 lg">{this.props.item}</p>
						{bottomLine}
					</div>
				)
				break;

			case 'check':
				break;
		}


		return (
			<li is class="cl-item fw of-h">
				{content}
			</li>
		)
	}
})