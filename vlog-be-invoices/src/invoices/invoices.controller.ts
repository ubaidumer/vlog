
import { Body, Controller, Get, Header, Logger, Param, Post, Query, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Unprotected } from 'nest-keycloak-connect';
import { AuthHeader } from 'src/comman/custom-decorator/custom-decorator';
import { InvoicesService } from './invoices.service';

@Controller()
export class invoiceController {
  constructor(private readonly invoicesService: InvoicesService) { }
  
  @Post('webhook')
  @Unprotected()
  generateInvoice(
    @Req() req,
  ) {
    //const { authorization: token, ConfigurationFile } = req.headers;
    console.log("Inside WebhookURL function");
    console.log("header:", req.header, "body:", req.body)
    return this.invoicesService.generateInvoice(Object.values(req.body)[0], null);
  }
}