#!/bin/bash

REPO_DIR="/var/www/Login-and-register-using-node.js-and-mongodb"
COMPOSE_DIR="/var/www"
LOG="/var/www/Login-and-register-using-node.js-and-mongodb/log.txt"

cd $REPO_DIR || exit
echo "pulling latest code..." >> $LOG
git pull origin master >> $LOG 2>&1

cd $COMPOSE_DIR || exit
echo "stop cont" >> $LOG
docker-compose down >> $LOG 2>&1

echo "rebuild and up conatiner" >> $LOG
docker-compose up -d --build >> $LOG 2>&1

echo "Done." >> $LOG

