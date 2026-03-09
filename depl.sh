#!/bin/bash

echo "hello"

echo "pull latest code"
git pull

echo "stop all container"
docker-compose down

echo "Rebuild container"
docker-compose up -d --build
