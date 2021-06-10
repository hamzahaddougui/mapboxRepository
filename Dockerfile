FROM node:14-alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN export NODE_OPTIONS=--max_old_space_size=18000
RUN npm run build

CMD ["npm", "start"]