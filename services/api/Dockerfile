FROM mhart/alpine-node

EXPOSE 3000

RUN adduser -S app

ENV HOME=/home/app

COPY package.json $HOME/src/
RUN chown -R app $HOME/*

USER app
WORKDIR $HOME/src

RUN npm install && \
    npm cache clean --force

USER root
COPY . $HOME/src
RUN chown -R app $HOME/* 

USER app

CMD ["node", "app.js"]
