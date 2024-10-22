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
    synchronize: false,
    migrationsRun: true,
    logging: false,
    logger: 'file',
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    autoLoadEntities: true,
    extra: {
      charset: 'utf8mb4_unicode_ci',
    },
  },

  brevoPassword: process.env.BREVO_PASSWORD,

  googleServiceAccount: {
    type: 'service_account',
    project_id: 'tactical-port-433712-r1',
    private_key_id: 'b1e98a248df5be9217ca8915ad950b7786c96edb',
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCSYBQ1zNbrtyky\n7ARSpqJPxGrv418kXBxyBOKzbaz5k64S1QeeHIXKyCTKqIqF2vxoeOyEwo3JiTRA\nO9twS78kb+RyhDDTDBCL1HAOnQGmzP6BZIhHF3vs53EY5gyhotyX61bLXkVcC/Dq\nVdS0keptN/jQlGikataDTabtbYXsMVrYBogt7I88oGCwXIVoREisZ/Kv60hay6Wg\niwAo2YNlrQPj5r91B9AkR8LjNJB3UF6XVtgjvmluJrdT01dNHUhnxQxMUEAU3V6D\nj80T3RsrKMr2laY5VOwGWgGxzwnri1dkSYm3oXGkLgRwLuYl3UYPHppk9w0YtYy6\niqFW3h0ZAgMBAAECggEACNXHSoMJcvNch4AS97kqoWVx7fZbqwprRh+Q3nMvhmX5\nUxYsLkk68yU3AUuAhvlTlGu+HPpQTBqdvoXOZj4QNL8TOy1K9CYthn8lX2BvNdX4\nQ6+hgScD+iXzH+Vc3FHD/mB8XeycA6UN3tsc6mRHUd3XxSE8GrZ/KbBBc+HRPFMb\n8ESUE4zN7NQu5XKNZMt1xCV3itXIuf0wLntvfCyVpddX7wZ0pKRoXEFzwCnI5snz\nrfheOvqYYPqXtELs6bRtCTPGumJ2aNgJZnmRcHCMgHUpwsuidaWsSuM1M03Uh2Gj\n3yGmUNYG5P/2OmOF5blu0TV2x/IpWGzVoP+ch6wzQQKBgQDGTl+myZWaas1ckJQr\nAVGAYAVpnfR7oYpl7Z0NEmUhTML66W2JsOWLqXDl/Jyd0AgN6F8/x3SLBTBSY67D\n9+wiiVQjxwxNn0ZuoVF+WVWnZwTOZrSvIXmwBWXrwHjOd3LGsgbknbOjHML/Zru4\nacP6mjTvqi92eHbmbUuNKOPVoQKBgQC89fPvUFFcKY5OO0pL+vq0x5bD4Jz8d2Es\n0r73yehI5TDIvXxi6lRCqD/poEsogi1pXIg9CkGYJ/UKIogxw93b8Fje7qSY9BzZ\n0Jw/jV/VbA0xQngXvYVDYJ6nrqUl34u6HPWWfhpp2G98i2Y/0rIWGvzrqWQVwTjW\nflmot3OkeQKBgGq4IMe8cnNQiMYI1IQ0SG0iv6bwJ3MlIzrpXfx76sq56bBoUNep\nyE6Z2DUc9hgDrWH2rNPA/hoWp8Oe+51g3cZUS2CZrShUz+2XiSjK4MqfKTn+kbwx\n8q/kp83wndLW+4CsrAL6T4M3ZkVWPy3mVV6XAGf+GV7TQ4GMTf1ghQQhAoGBAKo7\n4pF9CG9BOOUd4SdmaqqnDRpWpteELVWWX1kY212grTyMCR2MAnEy5rFxKYTLEmJT\nbKGhNcsAZG/HAG/lB2D3vPjKghsSAVPx7nIKyYWanJ/+Q/cPVJmI2CY03q+qH1WC\ndXYpEV6+EGJhq7Jf/PSRR75/kp1OwAftOJUZAOPxAoGBAI8Pp9Pq7wHlsPSRigiz\nXCJ/MEfQCVNMPd7J/2ak2lfhlA2KJLGGaXAaYtvyjeEKbMsvsptb2CoaqIAWm/Kh\nwaFY4hEfRP6XjGYQM61gVSOwDL53pcxDAo9jD9gskVuwGZpK2FVCWtoAHn+vB+IA\nj/+S7kHDoxZ0sJ8xkqBkeqG5\n-----END PRIVATE KEY-----\n",
    client_email: 'google-sheets-webhook-service@tactical-port-433712-r1.iam.gserviceaccount.com',
    client_id: '106393113521297924511',
  }
});
