import React from 'react'

export default React.createClass({

	render() {

		if(this.props.mode == 'preview') {
			console.log('preview');
			return (
				<div className="category-content">
					<div className="fl content-l w-40">{this.props.title}</div>
					<div className="fr content-r w-55">{this.props.content}</div>
				</div>
			)
		}

		else if(this.props.mode == 'edit') {

			var content = this.props.content,
				input = [];

			if(this.props.type == 'img') {

			}
			else {
				if(content[0].length > 2) {
					for(var i in content) {
						input[i] = (
							<span key={"cm-p-basic-" + i}>
								<input className="fl w-20" name={content[i][0]} defaultValue={content[i][1]} type={this.props.type} /> 
								<span>{content[i][2] || ''}</span>
							</span>
						)
					}
				}
				else input = <input name={content[0][0]} defaultValue={content[0][1]} type={this.props.type} />;
			}

			return (
				<div className="category-content">
					<div className="fl content-l w-40">{this.props.title}</div>
					<div className="fr content-r w-55 of-h child-left">	
						{input}
					</div>
				</div>
			)	
		}
		else {
			console.log('缺少mode [preview or edit]');
			return (
				<div className="category-content">category content</div>
			)
		}
	}
});