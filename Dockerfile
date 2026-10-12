FROM hugomods/hugo:ci-0.148.1 as build

COPY ./ /site
WORKDIR /site
RUN hugo --minify

#Copy static files to Nginx
FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /site/public /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
