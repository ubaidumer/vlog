import {  Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { VlogService } from './vlog.service';

@Processor('vlogQueue')
export class vlogRemoveConsumer {
    constructor(private readonly vlogService: VlogService) { }
    @Process('vlogRemoveFromContainer-job')
    vlogRemoveOperationJob(job: Job<unknown>) {
        console.log("vlog consumer called", job?.data)
       let data : any = job?.data;
        return this.vlogService.removeVlogFromAzureBlob(data?.vlogBlobID);
    }
}