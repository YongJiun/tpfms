import React from 'react'
import BtnCircle from '../components/btn-circle-red'
import CheckList from './panel-checkList'
import Passenger from './passenger/passenger-main'

const btn_back_pos = {
	right: '-60px',
	top: '12px',
};

export default React.createClass({

	panelSwitch: function(action) {

		var state, panelDisappear;

		if(action == 'open') {
			state = 'open';
			panelDisappear = '';
		}
		else if(action == 'close') {
			state = 'close';
			panelDisappear = 'disappear';
		}
		else {
			if(this.state.panelState == 'close') {
				state = 'open';
				panelDisappear = '';
			}
			else {
				state = 'close';
				panelDisappear = 'disappear';
			}
		}

		this.setState({
			panelState: state,
			panelDisappear: panelDisappear
		});
	},

	getInitialState() {
		
		return {
			/*panelState: 'open',
			panelDisappear: '',
			content: <Passenger panelSwitch={this.panelSwitch}></Passenger>,*/
			panelState: 'close',
			panelDisappear: 'disappear',
			content: <CheckList taskState="main"></CheckList>,
		}	
	},

	componentDidMount() {
		this.props.onRef(this);
	},
  	
	componentWillUnmount() {
		this.props.onRef(undefined);
	},

	changeContent: function(tar) {

		switch(tar) {
			case 'checkList':
				this.setState({content: <CheckList taskState="main" panelSwitch={this.panelSwitch}></CheckList> });
				break;
			case 'passenger':
				this.setState({content: <Passenger panelSwitch={this.panelSwitch}></Passenger> });
				break;
			case 'task':
				{/* 案件頁面 */}				
				break;
		}
	},

	render() {

		return (
			<div className={'panel-main-wrap ' + this.state.panelState + ' ' + this.state.panelDisappear}>

				<div className="panel-bg"></div>

				<div id="panel-main">
					{/*<BtnCircle touchCallback={this.panelSwitch} style={btn_back_pos} btnType="icon-arrow-left"></BtnCircle>*/}
					{this.state.content}
				</div>

			</div>
		)
	}
})