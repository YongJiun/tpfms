import React from 'react'
import Title from 'react-document-title'

export default React.createClass({

	componentDidMount() {
		console.log('12312312312312');
	},

	render() {

		return (
			<Title title="about">
				<div>About</div>
			</Title>
		)
	}
})