import * as Joi from '@hapi/joi';

export default {
    userLogin: {
        headers: Joi.object({
        }).options({ allowUnknown: true }),
    },
};
