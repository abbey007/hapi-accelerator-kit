const DotEnv = require('dotenv');
DotEnv.config({
  path: `${process.cwd()}/.env`,
});
module.exports = {
  apps : [
    {
    name   : `hapijs-boiler-plate-${process.env.PM2_NAME}`,
    script : "dist/index.js",
    watch  : false,
    instances: `${process.env.INSTANCES}`, //If 0,  PM2 will automatically spawn as many workers as you have CPU cores.
    exec_mode: "cluster",
    ignore_watch : [ "logs","logs/*", "./node_modules","./.git" ],
    env: {
      NODE_ENV: `${process.env.NODE_ENV}`,
      PORT: process.env.PORT
    }
  },
]
}
