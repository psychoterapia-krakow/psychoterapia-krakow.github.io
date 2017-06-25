#!/bin/bash

docker run --rm --name rebra-nginx -p 8080:80 -v $PWD:/usr/share/nginx/html:ro nginx

