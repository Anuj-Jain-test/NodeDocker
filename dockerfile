FROM node:18-alpine

# create a app directory

WORKDIR /app

# Install app dependencies
COPY package*.json ./

# run npm install
RUN npm install

#bunddle app source
COPY . .

EXPOSE 8000

CMD ["node", "server.js"]
