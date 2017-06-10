var React = require('react');
var ReactDOM = require('react-dom');

require('./style.scss');

class BlockContent extends React.Component {
	
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<div className="img-container"></div>
			</div>
		);		
	}
}

ReactDOM.render(<BlockContent title="About page !" />, document.getElementById('main-container'));