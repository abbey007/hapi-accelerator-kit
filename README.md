Hi, I have created this Hapi JS and typescript scaffolding. If you are using Hapi JS for some real world application you should try this framework
This is my official starter kit which has been tested in our production and passed all the scalability, performance and reliability expectations.

# Hapi JS Project Setup

## Requirements

- NodeJS > 12.x (LTS version)
- NPM > 6.x
- Postgres > 13.x
- Redis > 4.x

## How to use it?

1. Download this project as a zip and extract 
    git clone https://github.com/abbey007/hapijs-boiler-plate.git

2. Run `npm install`
3. Setup .env file as per your enviorment credentials (Use NODE_ENV = development if running on local or dev or qa machines).
4. Run `npm run dev`
5. Visit [http://localhost:3000/documentation](http://localhost:3000/documentation) to view swagger docs.
6. Visit [http://localhost:3000/status](http://localhost:3000/status) to view the status monitor.

# Run this project using PM2
1. npm install `npm install pm2 -g`
2. set port in ecosystem.config.js
3. run sh start.sh from command line

# Compile with TSLINT
 - npm run compile

## Vscode launch configuration
This configuration is used in case if you want to debug your project using VScode Debugger

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
