FROM node:14-alpine

ADD . /vlog-be-user

WORKDIR /vlog-be-user

ENV NODE_TLS_REJECT_UNAUTHORIZED 0  

RUN chgrp -R 0 /vlog-be-user/src && chmod -R g=u /vlog-be-user/src

RUN npm install

RUN npm install -g --unsafe-perm=true --allow-root
RUN npm cache clean --force --unsafe-perm


RUN npm run build