import * as Hapi from '@hapi/hapi';
import { CheckDbConnection } from './instances/dbConnection';
import { CheckRedisConnection } from './instances/redisConnection';
import Logger from './helper/logger';

export default class Connection {
  public static async loadInstanceConnections(server: Hapi.Server): Promise<any> {
    Logger.info('Instances - Start adding Instances');

    await new CheckDbConnection().register(server);
    await new CheckRedisConnection().register(server);
    
    Logger.info('Instances - Finish adding Instances');
  }
}
