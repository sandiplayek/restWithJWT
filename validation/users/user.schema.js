const joi = require('@hapi/joi');
const schema = {
    user: joi.object({
        firstName : joi.string().max(100).required(),
        lastName : joi.string().max(100).required(),
        gender: joi.string().valid('m','f','o').required(),
        email : joi.string().email().required(),
        password : joi.string().pattern(new RegExp("^[a-zA-z0-9]{3,30}$")),
        number : joi.number().integer().min(1000000000).message('Invalid mobile number.').max(9999999999).message('Invalid Mobile Number').required()
    }),
    login: joi.object({
        email : joi.string().email().required(),
        password : joi.string().pattern(new RegExp("^[a-zA-z0-9]{3,30}$"))
    })
}

module.exports = schema;