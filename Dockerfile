FROM opdavies/sculpin AS sculpin
COPY composer.* ./

FROM opdavies/sculpin-serve AS sculpin-watch
COPY --from=sculpin /app .
COPY . .

