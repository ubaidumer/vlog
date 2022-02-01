import { createParamDecorator, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import CONFIG from "src/config/config";
import { ENG_LANG } from "src/locale/eng";
import { NL_LANG } from "src/locale/nl/index";
export const AuthHeader = createParamDecorator(
    async (data, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context).getContext();
        const args = GqlExecutionContext.create(context).getArgs();
        const header = ctx.req.headers;
        let ConfigurationFile = {}
        const { languages, authorization } = header;
        const { Enum: ENG_ENUM, ConfigFields: ENG_ConfigFields, ResponsesConfig: ENG_ResponsesConfig } = ENG_LANG;
        const { Enum: NL_ENUM, ConfigFields: NL_ConfigFields, ResponsesConfig: NL_ResponsesConfig } = NL_LANG;
        if (languages === 'eng') {
            const { RESPONSES } = ENG_ResponsesConfig;
            const { APPLICATION ,USERS} = ENG_ENUM;
            const { FIELDS } = ENG_ConfigFields
            ConfigurationFile = {
                RESPONSES,
                APPLICATION,
                FIELDS,
                USERS
            }
            if (!authorization) {
                const replaceStr = RESPONSES.ERROR.NOT_PROVIDED.replace('XXXX', `${FIELDS.TOKEN}`)
                throw new HttpException(`${replaceStr}`, HttpStatus.HTTP_VERSION_NOT_SUPPORTED)
            }
        }
        if (languages === 'dutch' || languages === '' || languages === undefined) {
            const { RESPONSES } = NL_ResponsesConfig;
            const { APPLICATION ,USERS} = NL_ENUM;
            const { FIELDS } = NL_ConfigFields
            ConfigurationFile = {
                RESPONSES,
                APPLICATION,
                FIELDS,
                USERS
            }
            if (!authorization) {
                const replaceStr = RESPONSES.ERROR.NOT_PROVIDED.replace('XXXX', `${FIELDS.TOKEN}`)
                throw new HttpException(`${replaceStr}`, HttpStatus.HTTP_VERSION_NOT_SUPPORTED)
            }
        }

        return {
            authorization,
            ConfigurationFile,
        };
    },
);