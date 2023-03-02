FROM node:19.6.0 AS build
COPY . .

WORKDIR /
RUN npm config set strict-ssl false
RUN npm install
RUN chmod +x node_modules/.bin/react-scripts
RUN npm run build:mac
RUN rm -f .npmrc

RUN apt-get update && apt-get install -y \
   curl \
   jq \
   sed \
   && rm -rf /var/lib/apt/lists/*

RUN  LW_AGENT_ACCESS_TOKEN='d88f1e70d66c9183646909b4b73fdd5c7739d93be0f628e38ae4b5b7' && for asset_url in $(curl -s https://api.github.com/repos/lacework/lacework-agent-releases/releases/latest | jq --raw-output '.assets[]."browser_download_url"'); do \
    curl -OL ${asset_url}; done && \
    md5sum -c checksum.txt      && \
    lwagent=$(cat checksum.txt | cut -d' ' -f3) && \
    mkdir /tmp/${lwagent%.*} && \
    tar zxf $lwagent -C /tmp/${lwagent%.*}    && \
    mkdir -p /var/lib/lacework/config/          && \
    echo '{"tokens": {"accesstoken": "'${LW_AGENT_ACCESS_TOKEN}'"}, "tags": {"Project": "EIA"}}' > /var/lib/lacework/config/config.json            && \
    /bin/sh /tmp/${lwagent%.*}/install.sh      && \
    rm -rf /tmp/${lwagent%.*}

FROM build as final
ARG PORT
ENV PORT=$PORT

WORKDIR /
RUN npm install
RUN npm run build:mac
EXPOSE $PORT
CMD [ "sh","-c","service datacollector start && npm start" ]
