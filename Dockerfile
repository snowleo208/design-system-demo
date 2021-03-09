FROM node:14.16.0-alpine3.12

WORKDIR /opt/app/

COPY package.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install --frozen-lockfile
COPY . .

EXPOSE 6006

# Run storybook
CMD ["yarn", "storybook"]
