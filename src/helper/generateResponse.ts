import * as Dotenv from 'dotenv';
Dotenv.config();

export const generateError = (data: any, errorCode: any = 400) => {
    return {
        code: errorCode,
        message: data,
    };
};

export const generateSuccess = (message = "", data: any = {}, successCode: any = 200) => {

    return {
        code: successCode,
        message,
        data
    };
};