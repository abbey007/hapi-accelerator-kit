import * as Boom from '@hapi/boom';
import * as Hapi from '@hapi/hapi';
import newResponse from '../../../helper/response';
import Logger from '../../../helper/logger';

import { generateSuccess } from '../../../helper/generateResponse';

export default class LoginController {

  public loginUser = async (request: Hapi.Request, toolkit: Hapi.ResponseToolkit) => {
    try {
      const userResponse: any = generateSuccess("api working", { login  : "success" });
      return toolkit.response(
        newResponse({
          value: userResponse,
        })
      );
    } catch (error: any) {
      Logger.error(`Error in src/api/users/login/controller.ts - Method: loginUser - ${error}`);
      return toolkit.response(
        newResponse({
          boom: Boom.badImplementation(error)
        })
      );
    }

  }

}