FROM node:15.1.0-alpine3.10

WORKDIR /students-payment-preferences-fe

COPY fe/ /students-payment-preferences-fe

RUN rm -rf node_modules

RUN npm install

ENTRYPOINT ["npm", "start"]
