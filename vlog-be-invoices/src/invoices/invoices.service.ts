import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateInvoicesInput } from "./dto/create-invoice.input";
import { UpdateInvoicesInput } from "./dto/update-invoice.input";
import { InvoicesInter } from "./interface/invoices.interface";
import { request, gql, GraphQLClient } from "graphql-request";
import jwt_decode from "jwt-decode";
import { TokenInput } from "./dto/token.input";
import { InvoicesDto } from "./dto/invoices.dto";
import createMollieClient from "@mollie/api-client";
import { TransactionLogInter } from "./interface/transaction.log.interface";
import { InvoicesSchema } from "./entities/invoice.entity";
import axios from "axios";
import https = require("https");
//// Business logic here
@Injectable()
export class InvoicesService {
  constructor(
    @InjectModel("invoices")
    private invoices: Model<InvoicesInter>,
    @InjectModel("transaction")
    private transactionrepo: Model<TransactionLogInter>
  ) {}
  public unique(array) {
    return array.filter(function (el, index, arr) {
      return index == arr.indexOf(el);
    });
  }
  private objectEndPoint = `${process.env.OBJECT_HOST}/object`;
  async create(email, createInvoiceInput, token = null) {
    // const decodeTokenData: TokenInput = jwt_decode(token);
    // const { sub, realm_access } = decodeTokenData;

    const dateObj = new Date();

    var month = dateObj.getMonth() + 1;
    const date = dateObj.getFullYear() + "-" + month + "-" + dateObj.getDate();

    const findData = await this.invoices
      .find({ $expr: { $eq: [{ $month: "$date" }, month] } })
      .sort({ $natural: -1 })
      .limit(1);
    console.log("findData : ", findData);

    let monthFormat = month >= 10 ? month : "0" + month;

    let invoiceNumber = "INV-" + dateObj.getFullYear() + monthFormat;

    if (findData.length > 0) {
      const data = JSON.parse(JSON.stringify(findData));
      const firstData = data[0];

      const invoiceLength = firstData.invoiceNumber.length;
      let tempInvoiceNumber = firstData.invoiceNumber.substr(
        invoiceLength - 4,
        invoiceLength
      );
      console.log("invoices temp withoparse", tempInvoiceNumber);
      tempInvoiceNumber = parseInt(tempInvoiceNumber);

      console.log("invoices temp parse", tempInvoiceNumber);
      tempInvoiceNumber++;

      // to fill the number with 0's
      const zeroPadding = new Array(5 - (tempInvoiceNumber + "").length).join(
        "0"
      );

      tempInvoiceNumber = zeroPadding + tempInvoiceNumber;

      invoiceNumber += tempInvoiceNumber;
      console.log("invoice number", invoiceNumber);
    } else {
      invoiceNumber += "0001";
    }

    createInvoiceInput.invoiceNumber = invoiceNumber;
    createInvoiceInput.date = date;

    /* if (realm_access.roles.includes('admin')) {
    createInvoiceInput.createdBy = 'admin'
    }
    if (realm_access.roles.includes('client')) {
    createInvoiceInput.createdBy = 'client'
    }
    if (realm_access.roles.includes('enduser')) {
    createInvoiceInput.createdBy = 'enduser'
    }
    
    createInvoiceInput.createdById = sub;*/
    createInvoiceInput.createdBy = "enduser";
    try {
      // const saveData = JSON.parse(JSON.stringify(CreateInvoicesInput));
      // console.log("onvoicessdfsf", saveData)
      createInvoiceInput.ownerEmail = email;
      const newInvoice = new this.invoices(createInvoiceInput);

      console.log("newInvoices", newInvoice);
      const save = await newInvoice.save();
      return save;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getInvoicesById(id, token, Responses, Fields) {
    try {
      const findData = await this.invoices.findOne({ _id: id });
      if (!findData) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace(
          "XXXX",
          `${Fields.DATA}`
        );
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      let userID;
      try {
        const URL = `${process.env.USER_HOST}/users`;
        const graphQLClient = new GraphQLClient(URL, {
          headers: {
            authorization: `${token}`,
            languages: "eng",
          },
        });

        const query = gql`
          {
            findUserByID(id: "${findData?.renterID}") {
              _id
              userId
          }
          }
      `;

        const data = await graphQLClient.request(query);
        userID = data?.findUserByID?.userId;
      } catch (error) {
        console.log("error", error);
      }
      if(userID){
        findData.userId = userID;
      }
      const decodeTokenData: TokenInput = jwt_decode(token);
      const { sub, realm_access } = decodeTokenData;
      if (realm_access.roles.includes("admin")) {
        return findData;
      }
      if (sub !== findData.renterID) {
        throw new HttpException("forbidden", HttpStatus.FORBIDDEN);
      }
      return findData;
    } catch (err) {
      console.log(err);
      throw new HttpException("Error", err);
    }
  }
  async findAll(perPage, pageNum, sort, Responses, Fields) {
    try {
      const findData = await this.invoices
        .find()
        .limit(perPage)
        .skip(perPage * pageNum)
        .sort({
          _id: sort === "asc" ? 1 : sort === "desc" ? -1 : 1,
        });
      if (findData.length < 1) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace(
          "XXXX",
          `${Fields.DATA}`
        );
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const totalCount = await this.invoices.find().countDocuments();
      const totalDataAndTotalCount = {
        data: findData,
        totalCount,
      };
      return totalDataAndTotalCount;
    } catch (err) {
      console.log(err);
      throw new HttpException("Error", err);
    }
  }

  async findAllByRenterId(
    perPage,
    pageNum,
    sort,
    renterId,
    token,
    Responses,
    Fields
  ) {
    try {
      const decodeTokenData: TokenInput = jwt_decode(token);
      const { sub, realm_access } = decodeTokenData;

      const findData = await this.invoices
        .find({ renterID: renterId })
        .limit(perPage)
        .skip(perPage * pageNum)
        .sort({
          _id: sort === "asc" ? 1 : sort === "desc" ? -1 : 1,
        });
      if (findData.length < 1) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace(
          "XXXX",
          `${Fields.DATA}`
        );
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      if (realm_access.roles.includes("admin")) {
        const totalCount = await this.invoices
          .find({ renterID: renterId })
          .countDocuments();
        const totalDataAndTotalCount = {
          data: findData,
          totalCount,
        };
        return totalDataAndTotalCount;
      }

      if (realm_access.roles.includes("enduser")) {
        const totalCount = await this.invoices
          .find({ renterID: renterId })
          .countDocuments();
        const totalDataAndTotalCount = {
          data: findData,
          totalCount,
        };
        return totalDataAndTotalCount;
      }

      if (findData[0]?._id !== sub) {
        throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
      }
      const totalCount = await this.invoices
        .find({ renterID: renterId })
        .countDocuments();
      const totalDataAndTotalCount = {
        data: findData,
        totalCount,
      };
      return totalDataAndTotalCount;
    } catch (error) {
      console.log(error);
      throw new HttpException("Error", error);
    }
  }

  async findAllByRenterIdWithoutPagination(renterId, token) {
    try {
      const decodeTokenData: TokenInput = jwt_decode(token);
      const { sub, realm_access } = decodeTokenData;

      const findData = await this.invoices.find({ renterID: renterId });
      if (findData.length < 1) {
        throw new HttpException("Data not found", HttpStatus.NOT_FOUND);
      }
      if (realm_access.roles.includes("admin")) {
        const totalCount = await this.invoices
          .find({ renterID: renterId })
          .countDocuments();
        const totalDataAndTotalCount = {
          data: findData,
          totalCount,
        };
        return totalDataAndTotalCount;
      }

      if (realm_access.roles.includes("enduser")) {
        const totalCount = await this.invoices
          .find({ renterID: renterId })
          .countDocuments();
        const totalDataAndTotalCount = {
          data: findData,
          totalCount,
        };
        return totalDataAndTotalCount;
      }

      if (findData[0]?._id !== sub) {
        throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
      }
      const totalCount = await this.invoices
        .find({ renterID: renterId })
        .countDocuments();
      const totalDataAndTotalCount = {
        data: findData,
        totalCount,
      };
      return totalDataAndTotalCount;
    } catch (error) {
      console.log(error);
      throw new HttpException("Error", error);
    }
  }
  async findAllByOwnerId(perPage, pageNum, sort, ownerId, token) {
    try {
      const decodeTokenData: TokenInput = jwt_decode(token);
      const { sub: userId, realm_access } = decodeTokenData;

      const findData = await this.invoices
        .find({ ownerID: ownerId })
        .limit(perPage)
        .skip(perPage * pageNum)
        .sort({
          _id: sort === "asc" ? 1 : sort === "desc" ? -1 : 1,
        });

      if (findData.length < 0) {
        throw new HttpException("Data not found", HttpStatus.NOT_FOUND);
      }
      if (realm_access.roles.includes("admin")) {
        const totalCount = await this.invoices
          .find({ ownerID: ownerId })
          .countDocuments();
        const totalDataAndTotalCount = {
          data: findData,
          totalCount,
        };
        return totalDataAndTotalCount;
      }
      if (realm_access.roles.includes("enduser")) {
        const totalCount = await this.invoices
          .find({ ownerID: ownerId })
          .countDocuments();
        const totalDataAndTotalCount = {
          data: findData,
          totalCount,
        };
        return totalDataAndTotalCount;
      }
      const _id = findData[0]?._id;
      if (_id !== userId) {
        throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
      }
      const totalCount = await this.invoices
        .find({ ownerID: ownerId })
        .countDocuments();
      const totalDataAndTotalCount = {
        data: findData,
        totalCount,
      };
      return totalDataAndTotalCount;
    } catch (err) {
      console.log(err);
      throw new HttpException("Error", err);
    }
  }
  async housePurchase(noOfHouses, token) {
    try {
      const invoiceArray = await this.invoices.find({ invoicesType: 1 });
      let houseidArray = [];
      let response = [];
      for (let j = 0; j < invoiceArray.length; j++) {
        houseidArray[j] = invoiceArray[j].houseID;
      }
      houseidArray = this.unique(houseidArray);
      for (let i = 0; i < houseidArray.length; i++) {
        let counter = await this.invoices
          .find({ houseID: houseidArray[i] })
          .count();
        response.push({
          houseId: houseidArray[i],
          vlogPurchase: counter,
        });
      }
      const graphQLClient = new GraphQLClient(this.objectEndPoint, {
        headers: {
          authorization: `${token}`,
        },
      });
      console.log("House", houseidArray);
      const query = gql` 
query{
findManyHousesByHouseId(id:${JSON.stringify(houseidArray)}){
updatedAt
address{ 
city
area
streetNo
}
}
}
`;
      const data = await graphQLClient.request(query);

      for (let k = 0; k < response.length; k++) {
        response[k] = {
          streetNo: data.findManyHousesByHouseId[k].address.streetNo,
          city: data.findManyHousesByHouseId[k].address.city,
          updatedAt: data.findManyHousesByHouseId[k].updatedAt,
          ...response[k],
        };
      }
      console.log("final:", response);
      return response;
    } catch (err) {
      throw new HttpException(err, err);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(_id: string, updateInvoiceInput: UpdateInvoicesInput) {
    return `This action updates a invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
  async houseAmount(token) {
    const currentMonth = new Date().getMonth() + 1;
    const sum = await this.invoices.aggregate([
      {
        $match: {},
      },
      {
        $group: {
          _id: { month: { $month: "$createdAt" } },
          total: {
            $sum: "$amount",
          },
        },
      },
    ]);
    console.log(sum);

    let result: any = sum.filter((item) => item._id.month === currentMonth);

    if (result?.length > 0) {
      result = result[0].total;
    } else {
      result = 0;
    }

    return JSON.stringify(result);
  }
  async generatePaymentURL(
    createInvoice,
    redirectURL,
    amount,
    token,
    email = null
  ) {
    console.log("Inside Generate Payment URL function");
    let desc = "";

    try {
      const mollieClient = createMollieClient({
        apiKey: `${process.env.MOLLIE_API_KEY}`,
        headers: { authorization: `bearer ${token}` },
      });

      switch (createInvoice.invoicesType) {
        case 0:
          desc = "Huizenvlog";
          break;
        case 1:
          desc = "Aanmelding voor bezichtiging";
          break;
        default:
          break;
      }

      const payment = await mollieClient.payments.create({
        amount: {
          currency: "EUR",
          value: amount, // You must send the correct number of decimals, thus we enforce the use of strings
        },
        description: desc,
        redirectUrl: redirectURL,
        webhookUrl: `${process.env.WEB_HOOK_URL}/webhook/`,
        metadata: {
          ownerEmail: email,
          ...createInvoice,
        },
      });
      console.log("Payment created at Mollie:", payment);
      console.log("Payment URL : ", payment.getPaymentUrl());
      console.log("Payment ID : ", payment.id);

      return payment.getPaymentUrl();
    } catch (err) {
      console.log(err);
      throw new HttpException(err, err);
    }
  }

  async generateInvoice(id, token) {
    console.log("Inside Generate Invoice function");
    try {
      const mollieClient = createMollieClient({
        apiKey: `${process.env.MOLLIE_API_KEY}`,
      });
      const response = await mollieClient.payments.get(id);
      console.log(
        "Invoice Data against id: ",
        id,
        " Mollie response : ",
        response
      );
      if (response.status == "paid") {
        console.log("Transaction status : ", response.status);
        const data = await this.invoices.findOne({
          transactionID: response.id,
        });
        if (data == null || data == undefined) {
          console.log("Transaction Insertion in Invoice DB");
          await this.create(
            response.metadata.ownerEmail,
            {
              transactionStatus: response.status,
              transactionID: response.id,
              ...response.metadata,
            },
            token
          );
          if (response.metadata.invoicesType == 0) {
            const agent = new https.Agent({
              rejectUnauthorized: false,
            });
            const template = await axios.get(
              "https://vlog-be.apps.okd.it22.cloud/emails/v1/templates/name/tenant_purchased_vlog",
              { httpsAgent: agent }
            );
            const sender = await axios.get(
              "https://vlog-be.apps.okd.it22.cloud/emails/v1/senders/name/vlog_gmail_server",
              { httpsAgent: agent }
            );
            let tem_id = template.data.id;
            let send_id = sender.data.id;
            let to = response.metadata.ownerEmail;
            let data = {
              email: "sent",
            };
            console.log("Email Sent:", {
              template_id: tem_id,
              sender_id: send_id,
              to: [to],
              data: data,
            });
            const email = await axios.post(
              "https://vlog-be.apps.okd.it22.cloud/emails/v1/emails",
              {
                template_id: tem_id,
                sender_id: send_id,
                to: [to],
                data: data,
              },
              { httpsAgent: agent }
            );
          }
        }
        return response.status;
      } else {
        return response.status;
      }
    } catch (err) {
      console.log(err);
    }
  }
  async getByTransactionId(id) {
    console.log("Inside GetByTransactionID function");
    try {
      const mollieClient = createMollieClient({
        apiKey: `${process.env.MOLLIE_API_KEY}`,
      });
      const response = await mollieClient.payments.get(id);
      console.log("mollie response against transaction ID : ", id, response);

      let data = await this.invoices.findOne({ transactionID: id });
      if (data == null || data == undefined) {
        throw new HttpException(
          "No Data found against Transaction ID : " + id,
          HttpStatus.NOT_FOUND
        );
      }
      data.transactionStatus = response.status;
      console.log("Transaction Detail", data);
      return data;
    } catch (err) {
      console.log(err);
      throw new HttpException(err, err);
    }
  }

  async createTransactionLog(createTransaction, token) {
    try {
      const newTransaction = new this.transactionrepo(createTransaction);
      console.log("new Transaction:", newTransaction);
      const save = await newTransaction.save();
      return save;
    } catch (err) {
      console.log(err);
      throw new HttpException(err, err);
    }
  }

  async invoiceSchema() {
    try {
      let array = [];
      const keyify = (obj, prefix = "Invoice.") =>
        Object.keys(obj).reduce((res, key) => {
          if (
            key == "type" ||
            key == "required" ||
            key == "unique" ||
            key == "default" ||
            key == "auto" ||
            key == "getters" ||
            key == "path" ||
            key == "__v" ||
            key == "id" ||
            key == "index"
          ) {
            return [...res, prefix];
          }

          if (typeof obj[key] === "object") {
            return [...res, ...keyify(obj[key], prefix + key + ".")];
          }

          return [...res, prefix + key];
        }, []);
      const schema: any = InvoicesSchema;
      const data = keyify(schema.tree);
      const removeDuplicateData = [...new Set(data)];
      const replaceStrArray = removeDuplicateData.map((elem: string) =>
        elem.replace(".0", "")
      );

      const removeLastIndex = replaceStrArray.map((elem: string) =>
        elem.slice(-1) === "." ? elem.slice(0, -1) : elem
      );
      console.log("data", removeLastIndex);
      return JSON.stringify(removeLastIndex);
    } catch (err) {
      console.log(err);
    }
  }

  async searchFilter(
    search,
    perPage,
    pageNum,
    sort,
    Responses,
    Fields,
    sortColumn
  ) {
    try {
      const parseSearchRegex = new RegExp(search, "i");
      const digitCheck = /^-?\d*\.?\d*$/.test(search);
      let digitValueRegex;
      if (digitCheck) {
        digitValueRegex = new RegExp(Number(search).toString(), "i");
      }
      const invoiceSearchData = await this.invoices
        .find(
          parseSearchRegex
            ? {
                $or: [
                  { invoiceNumber: { $regex: parseSearchRegex } },
                  {
                    $where: `${
                      digitCheck ? digitValueRegex : parseSearchRegex
                    }.test(this.renterName)`,
                  },
                  {
                    $where: `${
                      digitCheck ? digitValueRegex : parseSearchRegex
                    }.test(this.amount)`,
                  },
                ],
              }
            : {}
        )
        .collation({ locale: "en" })
        .limit(perPage)
        .skip(perPage * pageNum)
        .sort(
          sortColumn === undefined
            ? {
                _id: sort === "asc" ? 1 : sort === "desc" ? -1 : 1,
              }
            : sortColumn
        );
      if (invoiceSearchData.length < 1) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace(
          "XXXX",
          `${Fields.DATA}`
        );
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }

      const totalCount = await this.invoices
        .find(
          parseSearchRegex
            ? {
                $or: [
                  { invoiceNumber: { $regex: parseSearchRegex } },
                  {
                    $where: `${
                      digitCheck ? digitValueRegex : parseSearchRegex
                    }.test(this.renterName)`,
                  },
                  {
                    $where: `${
                      digitCheck ? digitValueRegex : parseSearchRegex
                    }.test(this.amount)`,
                  },
                ],
              }
            : {}
        )
        .count();
      return {
        data: invoiceSearchData,
        totalCount: totalCount,
      };
    } catch (error) {
      console.log("error", error);
      if (error) {
        throw new HttpException(error.response || error.message, error.status);
      }
    }
  }

  async salesData() {
    try {
      const group = {
        $group: {
          _id: { month: { $month: "$createdAt" } },
          count: { $sum: "$amount" },
        },
      };
      const groups = {
        $group: {
          _id: null,
          amount: { $push: { month: "$_id.month", count: "$count" } },
        },
      };
      const months = Array.from({ length: 12 }, (item, i) => {
        return new Date(0, i).toLocaleString("en-US", { month: "long" });
      });

      const arrayData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      let data = Object.values(months);
      const saleData = await this.invoices.aggregate([group, groups]);
      let cloneArray = JSON.parse(JSON.stringify(arrayData));
      if (saleData.length < 1) {
        return "[0,0,0,0,0,0,0,0,0,0,0,0]";
      }

      for (let monthData of saleData[0]?.amount) {
        const index = parseInt(monthData.month) - 1;
        cloneArray[index] = monthData.count;
      }

      return JSON.stringify(cloneArray);
    } catch (error) {
      console.log(error);
    }
  }
}
