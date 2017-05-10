/* [library] */
import React from 'react'
import IScroll from 'iscroll'

/* [pages] */
import PreferencesPreview from './psg-preferences-preview'
import PreferencesForm from './psg-preferences-form'

var scroller;
var preview, form;

export default React.createClass({

	getInitialState() {

		preview = <PreferencesPreview onRef={ref => (this.psgPreferences = ref)}></PreferencesPreview>;
		form 	= <PreferencesForm onRef={ref => (this.psgPreferences = ref)}></PreferencesForm>;

		return {
			content: preview,
			/*content: form,*/
		};	
	},

	componentDidMount() {
		scroller = new IScroll('.ps-pre-scroll', {preventDefault: false });	
	},

	componentDidUpdate(prevProps, prevState) {
		scroller.refresh();	
	},

	render() {

		return (

			<div className='passenger-preferences passenger-f-w'>
				<div className="ps-block-scroll ps-pre-scroll">
					<div className="iscroll-scroller full-width">
						{this.state.content}
					</div>
				</div>
			</div>
		)
	}
});