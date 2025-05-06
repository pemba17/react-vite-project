#!/bin/bash

if [ "$1" == "up" ]; then
    docker compose -f docker-compose.dev.yml up
elif [ "$1" == "build" ]; then
    docker compose -f docker-compose.dev.yml build
elif [ "$1" == "down" ]; then
    docker compose -f docker-compose.dev.yml down
else
    echo "Invalid Option. Use 'up', 'build', 'down'."    
fi        