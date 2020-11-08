FROM node:15.1.0-alpine3.10

WORKDIR /students-payment-preferences-be

COPY be/ /students-payment-preferences-be

RUN rm -rf node_modules

RUN npm install

ENTRYPOINT ["npm", "start"]





