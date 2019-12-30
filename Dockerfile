FROM node:12
RUN npm install
EXPOSE 3000
CMD npm start
