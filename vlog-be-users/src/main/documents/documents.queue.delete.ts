import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { DocumentsService } from "./documents.service";

@Processor('documentDeleteQueue')
export class DocumentsDeleteConsumer {
    constructor(private readonly documentsService: DocumentsService,
    ) { }
    @Process('documentsDeleteFromContainer-job')
    documentsCopyOperationJob(job: Job<unknown>) {
        let data: any = job?.data;
        return this.documentsService.deleteBlobAzureBlob(data?.blobId, data?.containerName);
    }
}
