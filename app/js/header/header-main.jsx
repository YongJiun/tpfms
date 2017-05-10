/* [library] */
import React from 'react'
import IScroll from 'iscroll'

/* [components] */

export default React.createClass({

	getInitialState() {
		return ({
			pannelState: 'all',
		})	
	},

	contextTypes: {
		naviSwitch: React.PropTypes.func,
		panelSwitch: React.PropTypes.func
	},

	componentDidMount() {
		var monthScroll = new IScroll('.header-tool-scroller', { scrollX: true, scrollY: false, mouseWheel: true });
	},

	naviTouch: function() {
		this.context.naviSwitch();
	},

	switchTouch: function() {

		if(this.state.pannelState == 'all') {
			this.setState({
				pannelState: 'published'
			});
		}
		else {
			this.setState({
				pannelState: 'all'
			});	
		}
	},

	toolTaskTouch: function() {
		if(this.props.checkList_cb) this.props.checkList_cb();
	},

	render() {

		return (
			<header>
				
				<div className="header-toolbar-wrap">
					
					{/* 第一層工具 */}
					<div className="header-toolbar header-toolbar-0">
						
						<div className="header-tool-checkList header-icon" onTouchStart={this.toolTaskTouch}>
							<div className="checkList-number">13</div>
						</div>

						<div className="header-tool-switch">
							<div className="switch-component switch-frame">

								<div onClick={this.switchTouch} className="switch-text">ALL</div>
								<div onClick={this.switchTouch} className="switch-text">Published</div>
								
								<div className={'switch-component switch-pannel ' + this.state.pannelState}>
									<select className="filter-selector" name="fliter-data">
										<option value="All">All</option>
		                                <option value="1">JAN</option>
		                                <option value="2">FEB</option>
		                                <option value="3">MAR</option>
		                                <option value="4">APR</option>
		                                <option value="5">MAY</option>
		                                <option value="6">JUN</option>
		                                <option value="7">JUL</option>
		                                <option value="8">AUG</option>
		                                <option value="9">SEP</option>
		                                <option value="10">OCT</option>
		                                <option value="11">NOV</option>
		                                <option value="12">DEC</option>
									</select>
								</div>
							</div>
						</div>
						<div className="header-tool-navi header-icon" onTouchStart={this.naviTouch}></div>
					</div>

					{/* 第二層工具 */}
					<div className="header-toolbar header-toolbar-1">
						<div className="header-tool-scroller">
							<div className="scroll-month iscroll-scroller">
								<ul>
									<li className="month-1"></li>
									<li className="month-2"></li>
									<li className="month-3"></li>
									<li className="month-4"></li>
									<li className="month-5"></li>
									<li className="month-6"></li>
									<li className="month-7"></li>
									<li className="month-8"></li>
									<li className="month-9"></li>
									<li className="month-10"></li>
									<li className="month-11"></li>
									<li className="month-12"></li>
	                            </ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
})