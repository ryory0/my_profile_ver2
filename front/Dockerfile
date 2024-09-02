FROM node:18.18
WORKDIR /myapp
COPY ./my-app/package.json ./
RUN npm install && \
    npm install -g npm && \
    npm upgrade
