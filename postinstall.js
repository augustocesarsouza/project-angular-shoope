import 'dotenv/config';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

// Criação da string de configuração do ambiente
const envConfig = `export const environmentDev = {
  production: true,
  BASE_URL: '${process.env.BASE_URL || ''}',
  KEY_USER: '${process.env.KEY_USER || ''}'
};`;

// Garantir que a pasta existe
const dir = 'src/environments';
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

// Escrever o arquivo environment.prod.ts
writeFileSync(`${dir}/environment.prod.ts`, envConfig);

console.log('Arquivo environment.prod.ts gerado com sucesso!');
