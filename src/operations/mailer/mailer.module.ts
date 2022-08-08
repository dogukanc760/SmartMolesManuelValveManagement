import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { SendMailService } from './mailer.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: 'outlook.office365.com', //config.get('MAIL_HOST'),
          port: 587,
          secure: false,
          auth: {
            user: 'dodoyeni@outlook.com', //config.get('MAIL_USER'),
            pass: 'kcinar22', //config.get('MAIL_PASSWORD'),
          },
        },
        /* transport: {
          host: 'smtp.yandex.ru', //config.get('MAIL_HOST'),
          port: 465,
          secure: true,
          auth: {
            user: 'dogukancanerler@smartmoles.com', //config.get('MAIL_USER'),
            pass: 'Moles24052022', //config.get('MAIL_PASSWORD'),
          },
          tls: { ciphers: 'SSLv3' },
        },*/

        defaults: {
          from: `"Smart Mole's" <dodoyeni@outlook.com>`,
        },
        template: {
          headers: 'https://www.smartmoles.com/uploads/files/home/kostebek.png',
          dir: join(__dirname, './templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [SendMailService],
  exports: [SendMailService],
})
export class MailModule {}
