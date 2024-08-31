FROM node:21.7.2-alpine

WORKDIR /wiki-sra

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "serve"]