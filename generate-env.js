const { writeFileSync } = require('fs');

const envConfig = `export const environment = {
  production: true,
  BASE_URL: '${process.env.BASE_URL || 'http://localhost:8080/v1'}',
  KEY_USER: '${process.env.KEY_USER || 'default-key'}'
};`;

writeFileSync('src/environments/environment.prod.ts', envConfig);
