import Joi from 'joi';


export const SubmitWhistleblowerEntity = Joi.object({
	subject: Joi.string().min(3).max(30).trim().required(),
	description: Joi.string().min(20).max(255).trim().required(),
});


