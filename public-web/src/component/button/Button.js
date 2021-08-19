import React from 'react';

export default class Button extends React.Component {
	render() {
		const isDisabled = this.props.isDisabled === true ? true : false;
		return (
			<button disabled={isDisabled} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{this.props.buttonText}</button>
		)
	}
}
