import {Injectable, NestMiddleware} from "@nestjs/common";
import {NextFunction} from "express";

@Injectable()
export class DateOfBirthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        next();
    }
}