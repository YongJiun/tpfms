/* [lib] */
import React from 'react'
import IScroll from 'iscroll'
import _ from 'lodash'

/* [comp] */
import Title from '../panel-title'
import Item from './components/cm-list-item-0'
import gp from './../../global/parameter'

var scroller, member;

export default React.createClass({

	getInitialState() {
		return {
			crewMember: this.props.crewMember,
			search: '',
		}	
	},

	componentDidMount() {
		scroller = new IScroll(('.cm-list-scroll.' + this.props.name), {preventDefault: false, mouseWheel: true, hideScrollbar:false });	
	},

	componentDidUpdate() {
		setTimeout(function() {scroller.refresh(); }, 50);
	},

	search: function(e) {
		this.setState({search: e.target.value });
	},

	render() {

		var member = gp.filter(this.props.crewMember, this.state.search),
			content = [];

		for(var i in member) {
			content[i] = (
				<Item key={'cl-item-'+i} data={member[i]} clickCallback={this.props.clickCallback}></Item>
			)
		}

		return (

			<div className="fw">
				<div className={"cm-list-scroll" + " " + this.props.name}>
					<div className="fw iscroll-scroller">
						<ul>
							<li className="text-center">
								<input className="panel-search icon-magnifier" placeholder="Search" type="text" onChange={this.search}/>
							</li>
							{content}
						</ul>
					</div>
				</div>
			</div>
		)
	}
});