import Logger from './helper/logger';
import * as DotEnv from 'dotenv';
DotEnv.config();

export default class Cron {
    public static async schedule(): Promise<any> {
        Logger.info('Crons - Initializing All Crons');
        if (process.env.NODE_APP_INSTANCE === '0') {
            // const localTimezone: any = `${process.env.TIMEZONE}`;

            /* cron.schedule('1,15 0 * * *', () => {

                axios({
                    method: 'get',
                    url: `http://${process.env.HOST}/v1/test`,
                    headers: {}
                })

            }, {
                timezone: localTimezone
            }); */
        }
    } 
}
