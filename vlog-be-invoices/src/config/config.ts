import * as dotenv from 'dotenv';

dotenv.config();
console.log("config",process.env.KEYCLOAK_HOST )
const CONFIG = {
    MONGODB_URL: `mongodb://${process.env.MONGO_USERNAME ? process.env.MONGO_USERNAME : 'vlogUser'}:${process.env.MONGO_PASSWORD ? process.env.MONGO_PASSWORD : 'G0atadm!n'}@${process.env.MONGO_HOST ? process.env.MONGO_HOST : 'vlog-mongo-service'}:${process.env.MONGO_PORT ? process.env.MONGO_PORT : '27017'}/${process.env.MONGO_DB_NAME ? process.env.MONGO_DB_NAME : 'vlogDB'}?authSource=${process.env.MONGO_DB_NAME ? process.env.MONGO_DB_NAME : 'vlogDB'}`,
    // KEYCLOAK_URL: `http://${process.env.KEYCLOAK_HOST ? process.env.KEYCLOAK_HOST : 'localhost'}:${process.env.KEYCLOAK_PORT ? process.env.KEYCLOAK_PORT : '8080'}/auth`,
    KEYCLOAK_URL:`${process.env.KEYCLOAK_HOST}/auth`,
    KEYCLOAK_CLIENT: process.env.KEYCLOAK_CLIENT_ID || 'rest-client',
    KEYCLOAK_CLIENT_SECRET: process.env.KEYCLOAK_CLIENT_SECRET || 'e80b3b2d-fbcf-48a0-9412-c6d638c4f98e',
    KEYCLOAK_REALM: process.env.KEYCLOAK_REALM || 'master'
}
export default CONFIG;