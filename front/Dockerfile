FROM node:16.16.0 as build-stage
WORKDIR /jenkins_home/workspace/petsure/front
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir /app
WORKDIR /app
RUN mkdir ./build

COPY --from=build-stage /jenkins_home/workspace/petsure/front/build ./build
COPY ./nginx.conf /etc/nginx/conf.d
#COPY --from=build-stage /var/jenkins_home/workspace/deploytest/testproject_react/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g","daemon off;"]