FROM node:10-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./

# copy source code to /app/src folder
COPY src /app/src

# check files list
RUN ls -a

RUN npm install

EXPOSE 3000

# start app
CMD ["npm", "start"]