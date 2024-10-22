import * as process from 'process';

export const configFile = (): Record<string, unknown> => ({
  dbConfigs: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrationsRun: true,
    logging: false,
    logger: 'file',
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    autoLoadEntities: true,
    extra: {
      charset: 'utf8mb4_unicode_ci',
    },
    ssl: {
      rejectUnauthorized: false,
    },
  },

  

  brevoPassword: process.env.BREVO_PASSWORD,

  googleServiceAccount: process.env.GOOGLE
});
