import { Field, InputType, PartialType } from '@nestjs/graphql';
import { UserprofileInput } from './userprofile.input';

@InputType()
export class UserupdateInput extends PartialType(UserprofileInput) {
}
