import React from 'react'
import $ from 'jquery'
import IScroll from 'iscroll'

/* [comp] */
import ListTitle from './components/cl-title-preview'
import ListItem from './components/cl-item'

var scroller = '',
	scrollerId = '';

export default React.createClass({

	getInitialState() {
		scrollerId = this.props.section + '-cl-p-scroller';	
		return null;
	},

	componentDidMount() {
		scroller = new IScroll(('.' + scrollerId), {preventDefault: false, mouseWheel: true });
	},

	componentWillUnmount() {
		scroller.destroy();
		scroller = null;
	},

	componentDidUpdate() {
		scroller.refresh();
	},

	getContent: function(mode, data) {

		var categoryDom = [];
		if(mode == 'trip') {
			for(var i in data) {
				var categoryTitle = data[i].CheckGroupName,
					categoryItem = data[i].CheckItem,
					categoryDom = [];
				categoryDom.push(<ListTitle title={categoryTitle}></ListTitle>);
				for(var k in categoryItem) {
					var final = k < (categoryItem.length-1) ? false : true;
					categoryDom.push(<ListItem mode="preview" item={categoryItem[k].CheckItemName} final={final}></ListItem>);
				}
			}
		}

		else if(mode == 'leg') {
			var categoryDom = [];
			for(var i in data) {
				var categoryTitle = i,
					categoryItem = data[i];
				categoryDom.push(<ListTitle title={categoryTitle}></ListTitle>);
				for(var k in categoryItem) {
					var final = k < (categoryItem.length-1) ? false : true;
					categoryDom.push(<ListItem mode="preview" item={categoryItem[k].CheckItemName} final={final}></ListItem>);
				}
			}
		}
		return categoryDom;
	},




	render() {

		var data = this.props.data.check_list,
			section = this.props.section,
			content = [];

		/* [插入trip before checklist] */
		var tripBeforeData = data.trip.before;
		content.push(this.getContent('trip', tripBeforeData));
		
		/* [插入leg checklist] */
		var legData = data.leg;
		content.push(this.getContent('leg', legData));

		/* [插入trip after checklist] */
		var tripAfterData = data.trip.after;
		content.push(this.getContent('trip', tripAfterData));

		return (
			<div className='fw'>
				<div className={"panel-form-scroller" + " " + scrollerId}>
					<div className="fw iscroll-scroller">
						<form is section={section} class="panel-form fw pr of-h">
							<ul className="cl-list">
								{content}
							</ul>
						</form>
					</div>
				</div>
			</div>
		)
	}
});