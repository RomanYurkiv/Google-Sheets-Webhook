import { Inject, Injectable } from '@nestjs/common';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(
    @Inject(MailerService)
    private mailerService: MailerService,
  ) {}

  public async sendEmail(email: string, data: string) {
    return this.sendMailPromise({
      to: email,
      subject: 'subject',
      text: data,
    });
  }

  private sendMailPromise(options: ISendMailOptions) {
    return new Promise((res, rej) => {
      this.mailerService.sendMail(options).then(res).catch(rej);
    });
  }
}
