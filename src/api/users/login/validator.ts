import { RouteOptionsResponseSchema, RouteOptionsValidate } from '@hapi/hapi';
import * as Joi from '@hapi/joi';

export default {
    userLogin: {
        headers: { allowUnknown: true }
    },
};
