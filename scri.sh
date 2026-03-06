#!/bin/bash

echo "anil"

git pull

docker build -t scr .

docker stop temp-db

docker rm temp-db

docker run -d -p 2006:2000 --name oo scr

echo "logs"

docker logs oo

