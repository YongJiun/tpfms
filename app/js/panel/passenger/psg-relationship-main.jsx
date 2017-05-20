import React from 'react'

/* [pages] */
import RelationShipPreview from './psg-relationship-preview'
import RelationShipForm from './psg-relationship-form'
import RelationShipList from './psg-relationship-list'

var preview, form, list;

export default React.createClass({

	getInitialState() {

		preview = <RelationShipPreview passenger={this.props.passenger} onRef={ref => (this.psgPreferences = ref)}></RelationShipPreview>;
		form 	= <RelationShipForm onRef={ref => (this.psgPreferences = ref)}></RelationShipForm>;
		list 	= <RelationShipList onRef={ref => (this.psgPreferences = ref)}></RelationShipList>;

		return {
			content: preview,
			// content: list,
			// content: form,
		};	
	},

	componentDidMount() {
			
	},

	render() {

		return (
			this.state.content
		)
	}
})