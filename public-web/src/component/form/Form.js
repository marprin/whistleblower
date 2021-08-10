import React from 'react';
import Button from '../button/Button';


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSubmitted: false,
			disableSubmitBtn: false,
		}
	}

	render() {
		return (
			<>
				<p className="text-center">
					Have something in mind but don't know where to raise the issue?<br/> Just submit to us and we will help you solve or at least mitigate the issue for you.
				</p>
				<form>
					<div className="shadow overflow-hidden sm:rounded-md">
						<div className="px-4 py-5 bg-white sm:p-6">
							<div className="grid grid-cols-6 gap-6">

							</div>
						</div>
					</div>
					<label>Subject</label>	
					<Button isDisabled="false" buttonText="Submit" />
				</form>
			</>
		)
	}
}

export default Form 
