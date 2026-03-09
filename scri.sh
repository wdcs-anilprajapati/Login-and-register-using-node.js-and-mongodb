#!/bin/bash

LOG_FILE="/var/www/Login-and-register-using-node.js-and-mongodb/log.txt"


echo "anil"
echo "pull code from github"
git pull >> $LOG_FILE 2>&1


echo "create the image"
docker build -t scr . >> $LOG_FILE 2>&1

echo "stop the container"
docker stop app >> $LOG_FILE 2>&1


echo "remove the container"
docker rm app >> $LOG_FILE 2>&1


echo "run the container from the image"
docker run -d -p 2006:2000 --name anil scr >> $LOG_FILE 2>&1


echo "print the logs"
docker logs anil >> $LOG_FILE 2>&1

