Create React-Django-Docker App
==============================


# First
To setup the app
```
docker-compose build
```
To run the app
```
docker-compose up
```
To stop the app
```
docker-compose down
```


# Dockerized REACT
To update/install packages in frontend
```
docker run -v $PWD/frontend:/app -p 3000:3000 -it frontend:latest npm install
```


# Heroku
```
heroku config:set PRODUCTION_HOST=<your app name>.herokuapp.com SECRET_KEY=<your secret key> DJANGO_SETTINGS_MODULE=hello_world.settings.production
```
Tell heroku to use Docker
```
heroku stack:set container
```
```
git push heroku master
```
or 
```
git push heroku <your branch>:master
```