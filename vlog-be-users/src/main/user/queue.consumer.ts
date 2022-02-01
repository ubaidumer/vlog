import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { UsersService } from "./users.service";

@Processor('documentQueue')
export class DocumentsCopyConsumer {
    constructor(private readonly usersService: UsersService,

    ) { }
    @Process('documentsCopyintoAnotherContainer-job')
    documentsCopyOperationJob(job: Job<unknown>) {
        let data: any = job?.data;
        return this.usersService.moveDocuments(data?.userId)
    }

    @Process('removeVlogFromUserContainer-job')
    removeVlogOperationJob(job: Job<unknown>) {
        let data: any = job?.data;
        console.log("sdfsdlflj", data)
        return this.usersService.deleteVlogBlobAzureBlob(data?.blobId, data?.containerName)
    }
}
