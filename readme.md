# Proyecto Node.js con TypeScript y TypeORM

## Inicialización del Proyecto

### Instalación de pnpm (si no lo tienes)

```bash
npm install -g pnpm
```

# Crear directorio del proyecto

mkdir node-ts-project
cd node-ts-project

# Inicializar proyecto

pnpm init

# Instalar TypeScript y tipos

pnpm add -D typescript @types/node ts-node
pnpm add -D @types/express @types/cors @types/morgan

# Dependencias principales

pnpm add express cors morgan dotenv env-var class-validator class-transformer reflect-metadata typeorm typeorm-naming-strategies mysql

# Dependencias de desarrollo

pnpm add -D nodemon concurrently
