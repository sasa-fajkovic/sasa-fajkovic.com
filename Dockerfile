FROM nginx:latest

COPY books /usr/share/nginx/html/books
COPY css /usr/share/nginx/html/css
COPY images /usr/share/nginx/html/images
COPY fonts /usr/share/nginx/html/fonts
COPY js /usr/share/nginx/html/js
COPY 404.html /usr/share/nginx/html
COPY favicon.ico /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
COPY Robots.txt /usr/share/nginx/html
COPY SasaFajkovicCV.pdf /usr/share/nginx/html
COPY sitemap.xml /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["nginx","-g","daemon off;"]
