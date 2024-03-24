FROM jenkins/jenkins:lts

USER root

WORKDIR /home

RUN apt-get update && apt-get install -y wget curl unzip --no-install-recommends

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \apt-get install -y nodejs --no-install-recommends

RUN npm install -g playwright

RUN playwright install-deps chromium

USER jenkins
