/* [lib] */
import React from 'react'

/* [comp] */
import Title from './components/preview-title'
import FormBlock from './components/remark-block'

export default React.createClass({

	delete: function(num) {
		console.log('delete remark', num);
	},

	render() {

		var data = this.props.passenger.remark, 
			content = [];

		if(data) {
			for(var i in data) {
				content[i] = (
					<FormBlock 
						key={'psg-remark-' + i} 
						data={data[i]}
						deleteCallback={this.delete}>		
					</FormBlock>
				)
			}
		}
		else content = <div className="padding-md tc">目前無任何備註</div> 

		return (
			<div>
				<form>
					<ul>
						<Title name='remark' icon='icon-remark-b-w' text='Remark'></Title>
						{content}
					</ul>
				</form>
			</div>
		)
	}
});