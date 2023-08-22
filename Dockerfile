FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN npm run build
CMD ["ng", "serve", "--host", "0.0.0.0"]
