import React from 'react'

import ListTitle from './cl-title'
import ListItem from './cl-item'

var scrollerId;

export default React.createClass({

	getInitialState() {
		scrollerId = this.props.section + '-cl-p-scroller';	
		return null;
	},

	componentDidMount() {
		console.log('componentDidMount');
	},

	render() {

		/*console.log(this.props);*/

		var data = this.props.data.check_list,
			section = this.props.section,
			content = [];

		for(var i in data) {
			console.log(data[i]);
		}

		/*
		<CheckTitle title={this.props.stage} clickCallback={this.itemEdit}></CheckTitle>
		<CheckItem itemNum={this.props.stage + "-0"} todo="待辦事項-0" final="false"></CheckItem>
		*/

		return (
			<div className='fw'>
				<div className={"panel-form-scroller" + " " + scrollerId}>
					<div className="fw iscroll-scroller">
						<form is section={section} class="panel-form fw pr of-h">
							<ul>
								{/*content*/}
							</ul>
						</form>
					</div>
				</div>
			</div>
		)
	}
});