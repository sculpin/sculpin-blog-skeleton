ARG NODE_VERSION=14

# A node container for generating the CSS and JS assets for the site, copying
# in only the minimal files that are needed to do this. Once this is done, the
# node dependencies can be installed using yarn, and Encore can be run to
# generate the assets.
FROM node:${NODE_VERSION} AS assets
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY webpack.config.js .
COPY source source
RUN yarn install --frozen-lockfile

FROM assets AS assets-build
RUN yarn encore dev

FROM opdavies/sculpin AS sculpin
COPY composer.* ./
WORKDIR /app/source
COPY --from=assets-build /app/source/build build

FROM opdavies/sculpin-serve AS sculpin-watch
COPY --from=sculpin /app .
COPY . .
