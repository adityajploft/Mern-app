const Joi = require('joi'); 

export const registerSchema = Joi.object({
    email:Joi.string().email().required()
})