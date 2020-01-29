FROM node:8.5.0

RUN mkdir -p /app/frontend_user
WORKDIR /app/frontend_user
COPY . /app/frontend_user

RUN npm install npm@5.3.0
RUN npm install


#CMD npm run dev
RUN npm install -g http-server
RUN npm -g install serve
CMD npm run build; node server.js
#CMD ["node", "server.js"]
#RUN npm install http-server-spa -g
#CMD ["http-server-spa", "/dist/", "index.html", "8080"]
