import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoicesService } from './invoices.service';
import { DataAndPaginationDTO, InvoicesDto } from './dto/invoices.dto';
import { CreateInvoicesInput } from './dto/create-invoice.input';
import { UpdateInvoicesInput } from './dto/update-invoice.input';
import { RoleMatchingMode, Roles, Unprotected } from 'nest-keycloak-connect';
import { AuthHeader } from 'src/comman/custom-decorator/custom-decorator';
import { TopHouses } from './dto/topHouses.dto';
import { CreateTransactionLog } from './dto/create-transaction-log';
import { TransactionLog } from './dto/transaction-log.dto';
import { Escape, sanitize, Trim } from 'class-sanitizer';

@Resolver()
export class InvoicesResolver {
  constructor(private readonly invoicesService: InvoicesService
  ) { }

  @Mutation(() => InvoicesDto)
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  createInvoice(
    @AuthHeader() header: any,
    @Args("email", { type: () => String, nullable: true }) email: string,
    @Args('createInvoiceInput') createInvoiceInput: CreateInvoicesInput) {

    const { authorization: token, ConfigurationFile } = header;
    return this.invoicesService.create(email,createInvoiceInput, token);
  }
  @Query(() => InvoicesDto)
  getInvoiceByTransactionId(
    @AuthHeader() header: any,
    @Args("transactionId", { type: () => String }) transactionId: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    return this.invoicesService.getByTransactionId(transactionId)
  }

  @Query(() => DataAndPaginationDTO)
  @Roles({ roles: ['realm:admin', 'realm:client', 'realm:enduser'], mode: RoleMatchingMode.ANY })
 findAll(
    @AuthHeader() header: any,
    @Args("perPage", { type: () => Number }) perPage: number,
    @Args("pageNum", { type: () => Number }) pageNum: number,
    @Args("sort", { type: () => String }) sort: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES ,FIELDS} = ConfigurationFile;
    return this.invoicesService.findAll(perPage, pageNum, sort, RESPONSES,FIELDS);
  }

  @Query(() => InvoicesDto)
  @Roles({ roles: ['realm:admin', 'realm:client', 'realm:enduser'], mode: RoleMatchingMode.ANY })
  getInvoicesById(
    @AuthHeader() header: any,
    @Args("id", { type: () => String }) id: string,
  ) {

    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES ,FIELDS} = ConfigurationFile;
    return this.invoicesService.getInvoicesById(id, token,RESPONSES,FIELDS);
  }

  @Query(() => DataAndPaginationDTO)
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  findAllByOwnerId(
    @AuthHeader() header: any,
    @Args("perPage", { type: () => Number }) perPage: number,
    @Args("pageNum", { type: () => Number }) pageNum: number,
    @Args("sort", { type: () => String }) sort: string,
    @Args('ownerId', { type: () => String }) ownerId: string
  ) {

    const { authorization: token, ConfigurationFile } = header;

    return this.invoicesService.findAllByOwnerId(perPage, pageNum, sort, ownerId, token);
  }

  @Query(() => DataAndPaginationDTO)
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  findAllByRenterId(
    @AuthHeader() header: any,
    @Args("perPage", { type: () => Number }) perPage: number,
    @Args("pageNum", { type: () => Number }) pageNum: number,
    @Args("sort", { type: () => String }) sort: string,
    @Args('renterId', { type: () => String }) renterId: string
  ) {

    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES ,FIELDS} = ConfigurationFile;

    return this.invoicesService.findAllByRenterId(perPage, pageNum, sort, renterId, token,RESPONSES, FIELDS);
  }


  @Query(() => DataAndPaginationDTO)
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  findAllByRenterIdWithoutPagination(
    @AuthHeader() header: any,
    @Args('renterId', { type: () => String }) renterId: string
  ) {

    const { authorization: token, ConfigurationFile } = header;

    return this.invoicesService.findAllByRenterIdWithoutPagination(renterId, token);
  }

  @Query(() => [TopHouses])
  topHousesPurchase(
    @AuthHeader() header: any,
    @Args("noOfHouses", { type: () => Number }) noOfHouses: number,
  ) {
    const { authorization: token, ConfigurationFile } = header;

    return this.invoicesService.housePurchase(noOfHouses, token);
  }
  @Mutation(() => String)
  @Unprotected()
  PaymentURL(
    @AuthHeader() header: any,
    @Args('createInvoice') createInvoice: CreateInvoicesInput,
    @Args("redirectUrl", { type: () => String }) url: string,
    @Args("email", { type: () => String, nullable: true }) email: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    return this.invoicesService.generatePaymentURL(createInvoice, url, createInvoice.amount, token,email);
  }
  @Mutation(() => String)
  @Unprotected()
  generateInovice(
    @AuthHeader() header: any,
    @Args("transactionId", { type: () => String }) transactionId: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    return this.invoicesService.generateInvoice(transactionId, token);
  }
  @Mutation(() => TransactionLog)
  createTransactionLog(
    @AuthHeader() header: any,
    @Args("createTransactionLog") createTransaction: CreateTransactionLog
  ) {
    const { authorization: token, ConfigurationFile } = header;
    return this.invoicesService.createTransactionLog(createTransaction, token);
  }

  @Query(() => String)
  totalInvoiceAmount(
    @AuthHeader() header: any,
  ) {
    const { authorization: token, ConfigurationFile } = header;

    return this.invoicesService.houseAmount(token);
  }
  @Query(() => String)
  async getInvoiceAttributes(
    @AuthHeader() header: any,
  ) {
    return this.invoicesService.invoiceSchema();
  }

  @Query(() => DataAndPaginationDTO)
  async invoiceSearchFilter(
    @AuthHeader() header: any,
    @Args("search", { type: () => String, nullable: true }) search: string,
    @Args("perPage", { type: () => Number }) perPage: number,
    @Args("pageNum", { type: () => Number }) pageNum: number,
    @Args("sort", { type: () => String }) sort: string,
    @Args("sortColumn", { nullable: true }) sortColumn: string,
  ) {

    class SenitizeClass {
      @Trim()
      @Escape()
      search: string;

      constructor(search: string) {
        this.search = search;
      }
      public accessAttributes() {
        return {
          search: this.search,
        };
      }
    }
    const senitizeInstance = new SenitizeClass(search);
    /// sanitizing data 
    let data = sanitize(senitizeInstance);
    const { ConfigurationFile } = header;
    const { RESPONSES, FIELDS } = ConfigurationFile;

    //// replace double quotes into single quotes
    if(sortColumn){
      sortColumn = sortColumn.replace(/'/g, "\"");
      sortColumn = JSON.parse(sortColumn);
    }

    console.log("sortColumn", sortColumn)
    return this.invoicesService.searchFilter(senitizeInstance.accessAttributes().search, perPage, pageNum, sort, RESPONSES, FIELDS, sortColumn);
  }

  @Query(() => String)
   getSaleData(
    @AuthHeader() header: any,
  ) {
    return this.invoicesService.salesData();
  }
}

