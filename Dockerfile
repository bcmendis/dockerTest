# FROM node:14-alpine

# WORKDIR /app

# COPY package.json .
# COPY package-lock.json .

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm","start"]

FROM node:16-slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
CMD ["npm", "start"]