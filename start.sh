rm -rf dist
npm run build
pm2 start ecosystem.config.js