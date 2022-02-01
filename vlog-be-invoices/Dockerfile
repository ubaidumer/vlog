FROM node:14-alpine

ADD . /vlog-be-invoice

WORKDIR /vlog-be-invoice

ENV NODE_TLS_REJECT_UNAUTHORIZED 0  

RUN chgrp -R 0 /vlog-be-invoice/src && chmod -R g=u /vlog-be-invoice/src

RUN npm install

RUN npm run build