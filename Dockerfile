FROM ubuntu:22.04
RUN apt-get update
RUN apt-get install -y nginx zip curl
RUN echo "daemon off;" >>/etc/nginx.conf
RUN curl -o /var/www/html/master.zip -L