import Joi from 'joi';


export const SubmitWhistleblowerEntity = Joi.object({
	subject: Joi.string().pattern(new RegExp("[a-zA-Z0-9\s]$")).min(3).max(30).trim().required(),
	description: Joi.string().alphanum().min(3).max(255).trim().required(),
});


