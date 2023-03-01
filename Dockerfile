FROM node

WORKDIR /usr/app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 5050

CMD [ "yarn", "run", "dev"]
