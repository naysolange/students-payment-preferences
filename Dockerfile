FROM node:15.1.0-alpine3.10

WORKDIR /students-payment-preferences

COPY BE/ /students-payment-preferences

ENTRYPOINT ["npm", "start"]





