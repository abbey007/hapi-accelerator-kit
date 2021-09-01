import * as Hapi from '@hapi/hapi';
import validator from './validator';
import LoginController from './controller';
import IRoute from '../../../helper/route';


export default class LoginRoutes implements IRoute {
  public async register(server: Hapi.Server): Promise<any> {
    return new Promise<void>(resolve => {
      const controller = new LoginController();

      server.route([
        {
          method: 'POST',
          path: '/v1/users/login',
          options: {
            handler: controller.loginUser,
            validate: validator.userLogin,
            description: 'Method for user login - this is just a test route',
            tags: ['api', 'users'],
            auth: false,
          },
        }
      ]);
      resolve();
    });
  }
}
