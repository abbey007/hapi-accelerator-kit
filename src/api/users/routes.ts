import * as Hapi from '@hapi/hapi';
import UserLoginRoutes from './login/routes';

export default class Router {
  public static async loadRoutes(server: Hapi.Server): Promise<any> {
    await new UserLoginRoutes().register(server);
  }
}
