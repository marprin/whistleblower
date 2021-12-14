import React from 'react';
import Button from '../button/Button';
import httpClient from '../../service/httpclient';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSubmitted: false,
			disableSubmitBtn: false,
			subject: "",
			description: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmitForm(event) {
		console.log(event);
		console.log('inside the submit form');

		event.preventDefault();
		// Disable the button to prevent the double submission
		this.setState({disableSubmitBtn: true});


		// Enable the button after submit
		this.setState({disableSubmitBtn: false});
			
	}

	render() {
		return (
			<>
				<p className="text-center font-bold">
					Have something in mind but don't know where to raise the issue?<br/> Just submit to us and we will help you solve or at least mitigate the issue for you.
				</p>
				<form className="my-5" onSubmit={this.handleSubmitForm}>
					<div className="shadow overflow-hidden sm:rounded-md bg-gray-200">
						<div className="px-4 py-5 space-y-6 sm:p-6">
							<div className="grid grid-cols-3 gap-6" style={{border:"black solid thin;"}}>
								<label>Subject</label>
								<div className="mt-1 flex rounded-md shadow-md">
									<input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"/>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center my-5">
						<Button isDisabled={this.state.disableSubmitBtn} buttonText="Submit" />
					</div>
				</form>
			</>
		)
	}
}

export default Form 
