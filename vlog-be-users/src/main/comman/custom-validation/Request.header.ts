import { createParamDecorator, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";

export interface iError {
    statusCode:number;
    messages:string[];
    error:string;
}

export const RequestHeader = createParamDecorator(
async (value:  any, context: ExecutionContext) => {
    // console.log("ctx called", ctx)
    // const headers = ctx.switchToHttp().getRequest().headers;
    const ctx = GqlExecutionContext.create(context).getContext();
    const args = GqlExecutionContext.create(context).getArgs();

    const headers = ctx.req.headers;

    // Convert headers to DTO object
    const dto = plainToClass(value, headers, { excludeExtraneousValues: true });
    console.log("DTO", dto)
    // Validate
    const errors: ValidationError[] = await validate(dto);
    
    if (errors.length > 0) {
        //Get the errors and push to custom array
        let validationErrors = errors.map(obj => Object.values(obj.constraints));
        throw new HttpException(`Validation failed with following Errors: ${validationErrors}`, HttpStatus.BAD_REQUEST);
    }
    // return header dto object
    return dto;
})