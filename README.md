# Hapi JS Project Setup

This is intial Hapi JS project setup consist of sequlize, redis, swagger, tslint

## Requirements

- NodeJS > 12.x (LTS version)
- NPM > 6.x
- Postgres > 13.x
- Redis > 4.x

## How to use it?

1. Download this project as a zip and extract
2. Run `npm install`
3. Setup .env file as per your enviorment credentials (Use NODE_ENV = development if running on local or dev or qa machines).
4. Run `npm run nodemon:build`
5. Visit [http://localhost:3000/documentation](http://localhost:3000/documentation) to view swagger docs.
6. Visit [http://localhost:3000/status](http://localhost:3000/status) to view the status monitor.

# Run this project using PM2
1. npm install `npm install pm2 -g`
2. set port in ecosystem.config.js
3. run sh start.sh from command line

## Vscode launch configuration
```json
{
    "type": "node",
    "request": "launch",
    "name": "Launch Program",
    "skipFiles": [
        "<node_internals>/**"
    ],
    "runtimeArgs": [
        "-r",
        "ts-node/register"
    ],
    "args": [
        "${workspaceFolder}/src/index.ts"
    ]
}
```
