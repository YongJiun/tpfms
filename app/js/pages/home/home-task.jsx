import React from 'react'
import TaskContent from './task-content'
import IScroll from 'iscroll'
import Footer from '../../footer/footer-main'

export default React.createClass({

	componentDidMount() {
		var taskScroll = new IScroll('.home-task-scroller', { scrollX: false, scrollY: true, mouseWheel: true });
	},

	render() {

		return (
			<div className="home-task-scroller">
				<div className="scroll-task iscroll-scroller" ref="container">
					<ul>
						<TaskContent taskState="complete"></TaskContent>
						<TaskContent taskState="complete"></TaskContent>
						<TaskContent taskState="edit"></TaskContent>
						<TaskContent taskState="edit"></TaskContent>
						<TaskContent taskState="main"></TaskContent>
						<TaskContent taskState="wait"></TaskContent>
						<TaskContent taskState="wait"></TaskContent>
						<TaskContent taskState="wait"></TaskContent>
						<TaskContent taskState="wait"></TaskContent>
						<li>
							<Footer></Footer>
						</li>
					</ul>
				</div>
			</div>
		)
	}
})