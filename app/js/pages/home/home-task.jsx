import React from 'react'
import TaskContent from './task-content'
import IScroll from 'iscroll'
import Footer from '../../footer/footer-main'

export default React.createClass({

	componentDidMount() {
		var taskScroll = new IScroll('.home-task-scroller', {preventDefault: false, scrollX: false, scrollY: true, mouseWheel: true });
	},

	taskClick: function(num) {
		if(this.props.click_cb) this.props.click_cb(num);
	},

	render() {

		return (
			<div className="home-task-scroller">
				<div className="scroll-task iscroll-scroller" ref="container">
					<ul>
						<TaskContent taskNum="0" clickCallback={this.taskClick} taskState="complete"></TaskContent>
						<TaskContent taskNum="1" clickCallback={this.taskClick} taskState="complete"></TaskContent>
						<TaskContent taskNum="2" clickCallback={this.taskClick} taskState="edit"></TaskContent>
						<TaskContent taskNum="3" clickCallback={this.taskClick} taskState="edit"></TaskContent>
						<TaskContent taskNum="4" clickCallback={this.taskClick} taskState="main"></TaskContent>
						<TaskContent taskNum="5" clickCallback={this.taskClick} taskState="wait"></TaskContent>
						<TaskContent taskNum="6" clickCallback={this.taskClick} taskState="wait"></TaskContent>
						<TaskContent taskNum="7" clickCallback={this.taskClick} taskState="wait"></TaskContent>
						<TaskContent taskNum="8" clickCallback={this.taskClick} taskState="wait"></TaskContent>
						<li>
							<Footer></Footer>
						</li>
					</ul>
				</div>
			</div>
		)
	}
})