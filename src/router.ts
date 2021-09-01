import * as Hapi from '@hapi/hapi';
import UserRoutes from './api/users/routes';
import Logger from './helper/logger';

export default class Router {
  public static async loadRoutes(server: Hapi.Server): Promise<any> {
    Logger.info('Router - Start adding routes');
    await UserRoutes.loadRoutes(server);

    /* This is very important to add if you have 
      added some custom headers and you are facing
      CORS issue 
    */

    server.route([
      {
        method: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
        path: "/{path*}",
        handler: (request, h) => {
          return h.response().header('Access-Control-Allow-Headers', 'Accept, Content-Type, User-Agent');
        }
      },
    ]);

    Logger.info('Router - Finish adding routes');
  }
}
