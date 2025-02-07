{
"name": "node-ts",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "tsc && node dist/index.js",
"start:dev": "tsc && concurrently \"tsc -w\" \"nodemon dist/index.js\"",
"start:prod": "export NODE_ENV=production && pnpm start"
},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies": {
"@types/cors": "^2.8.17",
"@types/express": "^5.0.0",
"@types/morgan": "^1.9.9",
"class-validator": "^0.14.1",
"cors": "^2.8.5",
"dotenv": "^16.4.7",
"env-var": "^7.5.0",
"express": "^4.21.2",
"morgan": "^1.10.0",
"mysql": "^2.18.1",
"reflect-metadata": "^0.2.2",
"typeorm": "^0.3.20",
"typeorm-naming-strategies": "^4.1.0",
"typescript": "^5.7.3"
},
"devDependencies": {
falta:
cors,
express,
morgan
"concurrently": "^9.1.2",
"nodemon": "^3.1.9",
"ts-node": "^10.9.2"
}
}
