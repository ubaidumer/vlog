import { HttpModule, Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesResolver } from './invoices.resolver';
import { InvoicesSchema } from './entities/invoice.entity';
import { AuthRoleModule } from 'src/auth/authrole/authRole.module';
import { MongooseModule } from '@nestjs/mongoose';
import { invoiceController } from './invoices.controller';
import { TransactionLogSchema } from './entities/transaction_log';

@Module({
  imports: [HttpModule, AuthRoleModule, MongooseModule.forFeature([
    {name: "invoices", schema: InvoicesSchema },
    {name: "transaction", schema:TransactionLogSchema}
  ]),],
  controllers: [invoiceController],
  providers: [InvoicesResolver, InvoicesService],
  exports: [InvoicesService]
})
export class InvoicesModule { }
