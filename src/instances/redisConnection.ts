import Hapi from '@hapi/hapi';
import Logger from './../helper/logger';
import Dotenv from 'dotenv';
import IORedis from 'ioredis';

Dotenv.config();

const PORT: number = parseInt(process.env.REDISURLPORT as string, 10) || 6379;

const client = new IORedis({
  port: PORT, // Redis port
  host: `${process.env.REDISHOSTIP}`, // Redis host
  password: `${process.env.REDISPWD}`,
  enableAutoPipelining: true,
});

client.on('error', (err: any) => {
  Logger.error(`Connecting Redis : Unable to connect redis - ${err}`);
});

export const redisConnection = client;

export class CheckRedisConnection {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async register(server: Hapi.Server): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      if (client.status === "ready" || client.status === "connect" || client.status === "connecting") {
        Logger.info(`Connecting Redis : Connected to Redis successfully`);
        resolve();
      } else {
        Logger.error(`Connecting Redis : Unable to connect redis`);
        reject();
      }
    });
  }
}