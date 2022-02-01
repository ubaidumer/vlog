import { HttpService, Injectable, Post } from '@nestjs/common';
import { doc } from 'prettier';
const qs = require('querystring');
import join = doc.builders.join;
export class AuthenticationError extends Error {}

@Injectable()
export class AuthRoleService {
  private readonly baseURL: string;
  private readonly realm;

  constructor(private httpService: HttpService) {
    this.baseURL = process.env.KEYCLOAK_BASE_URL;
    this.realm = process.env.KEYCLOAK_REALM;
  }
  /**
   * Call the OpenId Connect UserInfo endpoint on Keycloak: https://openid.net/specs/openid-connect-core-1_0.html#UserInfo
   *
   * If it succeeds, the token is valid and we get the user infos in the response
   * If it fails, the token is invalid or expired
   */
  async accessRole(accessToken: string): Promise<any> {
    const url = `${process.env.KEYCLOAK_HOST}/auth/admin/realms/demo/clients/15aec6cb-502b-4d91-ba54-0451ba11ff7d/roles/user`;
    // const url = `${process.env.KEYCLOAK_BASE_URL}/auth/admin/realms/${process.env.KEYCLOAK_REALM}/users`;
    try {
      const response = await this.httpService
        .get(url, {
          headers: {
            authorization: `${accessToken}`,
          },
        })
        .toPromise();
      return response;
    } catch (e) {
      console.log('error services', e);
      throw new AuthenticationError(e.message);
    }
  }
 
}
